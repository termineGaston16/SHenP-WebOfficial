import { useCallback, useEffect, useRef, useState } from "react";
import './Style/genres.css';
import { useQuery } from "react-query";
import { getGeneros } from "../FIREBASE/Index";
import ListOfProjectsByGender from "./Elements/ListOfProjectsByGender";
import { Gender } from "../FIREBASE/Interface/Types";
import LoadingComponent from "../SHENP/LoadingComponents/LoadingComponent";
import IsErrorComponent from "../SHENP/LoadingComponents/IsErrorComponent";

export default function Genres() {
    const [localGeneratorList, setLocalGeneratorList] = useState<Gender[]>([]);

    const { data: listResult = [], isLoading, isError, refetch } = useQuery({
        queryKey: ["genres"],
        queryFn: async () => await getGeneros([...localGeneratorList]),
        refetchOnWindowFocus: false,                  // Evita hacer refetch cuando el usuario regresa a la ventana de la aplicación
        retry: 2,                                     // Número de intentos de reintento si la consulta falla
        retryDelay: 2000,                             // Tiempo en milisegundos entre cada reintento si la consulta falla
        refetchInterval: 1800000,                     // Intervalo para refetch automático cada 30 minutos (1800000 ms)
        staleTime: 1800000,                           // Tiempo en el cual la caché se considera "fresca" (30 minutos); no hará refetch automático en ese tiempo
        cacheTime: 3600000,                           // Tiempo que la caché permanece en memoria después de no usarse (1 hora)
    });

    const observer = useRef<IntersectionObserver | null>(null);

    // Ref del elemento que estará al final de la lista
    const lastGenreElementRef = useCallback((node: HTMLLIElement | null) => {
        if (isLoading) return;
        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                refetch();
            }
        });

        if (node) observer.current.observe(node);
    }, [isLoading, refetch]);

    useEffect(() => {
        document.title = 'Géneros | SHenP Web'
        if (listResult.length > 0) {
            setLocalGeneratorList(listResult);
        }
    }, [listResult]);
    
    return (
        <main className="genres">
            <ul className="genres__list">
                {localGeneratorList.map((gender, index) => {
                    const isLast = index === localGeneratorList.length - 1

                    return (
                        <ListOfProjectsByGender
                            key={index}
                            resultGenre={gender}
                            isLast={isLast}
                            lastGenreElementRef={lastGenreElementRef}
                        />
                    )
                })}
            </ul>

            
            {isLoading && <LoadingComponent />}
            {isError && <IsErrorComponent />}
        </main>
    );
}