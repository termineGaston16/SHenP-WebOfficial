import { lazy, Suspense, useState } from "react"
import Search from "./Element/Search"
import { useQuery } from "react-query"
import { getResultsByQuery } from "../FIREBASE/Index"
import './Style/browse.css'

const Results = lazy(() => import('./Element/Results'))

export default function Browse() {

    const [querySearch, setQuerySearch] = useState<string | undefined>(undefined)
    
    const { data: listOfProyect, isLoading, isError } = useQuery({
        queryKey: ['query', querySearch],
        queryFn: async () => await getResultsByQuery(querySearch as string),
        refetchOnWindowFocus: false,                  // Evita hacer refetch cuando el usuario regresa a la ventana de la aplicación
        retry: 2,                                     // Número de intentos de reintento si la consulta falla
        retryDelay: 2000,                             // Tiempo en milisegundos entre cada reintento si la consulta falla
        refetchInterval: false,                     // Intervalo para refetch automático cada 30 minutos (1800000 ms)
        staleTime: 1800000,                           // Tiempo en el cual la caché se considera "fresca" (30 minutos); no hará refetch automático en ese tiempo
        cacheTime: 3600000,
        enabled: !!querySearch
    })

    return (<main className="browse">
        <Search setQuerySearch={setQuerySearch} />
        {querySearch &&
            <Suspense fallback='Loading...'>
                <Results
                    isLoading={isLoading}
                    isError={isError}
                    listOfProyect={listOfProyect} />
            </Suspense>}
    </main>)
}