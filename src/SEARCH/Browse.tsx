import { lazy, Suspense, useEffect, useState } from "react"
import Search from "./Element/Search"
import { useQuery } from "react-query"
import { getResultsByCategory, getResultsByQuery } from "../FIREBASE/Index"
import './Style/browse.css'
import { useParams } from "react-router-dom"

const Results = lazy(() => import('./Element/Results'))

export default function Browse() {

    const [querySearch, setQuerySearch] = useState<string | undefined>(undefined)
    const { category } = useParams()
    
    const { data: listOfProyect, isLoading, isError } = useQuery({
        queryKey: ['query', querySearch, category],
        queryFn: async () => {
            if (category) return await getResultsByCategory(category)
            if (querySearch) return await getResultsByQuery(querySearch as string)
        },
        refetchOnWindowFocus: false,                  // Evita hacer refetch cuando el usuario regresa a la ventana de la aplicación
        retry: 2,                                     // Número de intentos de reintento si la consulta falla
        retryDelay: 2000,                             // Tiempo en milisegundos entre cada reintento si la consulta falla
        refetchInterval: false,                     // Intervalo para refetch automático cada 30 minutos (1800000 ms)
        staleTime: 1800000,                           // Tiempo en el cual la caché se considera "fresca" (30 minutos); no hará refetch automático en ese tiempo
        cacheTime: 3600000,
        enabled: !!querySearch || !!category
    })

    useEffect(()=>{
        if(category) setQuerySearch(undefined)
    },[category])
    
    return (<main className="browse">
        {!category && <Search setQuerySearch={setQuerySearch} />}
        {(querySearch || category) &&
            <Suspense fallback='Loading...'>
                <Results
                    isLoading={isLoading}
                    isError={isError}
                    listOfProyect={listOfProyect} />
            </Suspense>}
    </main>)
}