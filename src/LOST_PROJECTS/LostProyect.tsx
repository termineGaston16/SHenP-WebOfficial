import { useCallback, useEffect, useRef, useState } from "react"
import { ProjectLost } from "../FIREBASE/Interface/Types"
import { useQuery } from "react-query"
import { getProyectsLost } from "../FIREBASE/Index"
import './Style/lostProyect.css'
import LoadingComponent from "../SHENP/LoadingComponents/LoadingComponent"
import IsErrorComponent from "../SHENP/LoadingComponents/IsErrorComponent"

export default function LostProyect() {

    const [listOfProyectLost, setListOfProyectLost] = useState<ProjectLost[]>([])

    const { data: proyectsLostsListResults, isLoading, isError, refetch } = useQuery({
        queryKey: ['proyectsLost'],
        queryFn: async () => await getProyectsLost([...listOfProyectLost]),
        refetchOnWindowFocus: false,                  // Evita hacer refetch cuando el usuario regresa a la ventana de la aplicación
        retry: 2,                                     // Número de intentos de reintento si la consulta falla
        retryDelay: 2000,                             // Tiempo en milisegundos entre cada reintento si la consulta falla
        refetchInterval: 1800000,                     // Intervalo para refetch automático cada 30 minutos (1800000 ms)
        staleTime: 1800000,                           // Tiempo en el cual la caché se considera "fresca" (30 minutos); no hará refetch automático en ese tiempo
        cacheTime: 3600000,
    })

    const observer = useRef<IntersectionObserver | null>(null)
    const lastLostProyectFunction = useCallback((node: HTMLElement | null) => {
        if (isLoading) return
        if (observer.current) observer.current.disconnect()

        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                refetch()
            }
        })
        if (node) observer.current.observe(node)

    }, [isLoading, refetch])

    useEffect(() => {
        if (proyectsLostsListResults && proyectsLostsListResults.length > 0) {
            setListOfProyectLost(proyectsLostsListResults);
        }
    }, [proyectsLostsListResults]);

    return (<main className="lost-proyects">
        <h2 className="lost-proyects__title">Proyectos Perdidos</h2>
        <span className="lost-proyects__descripcion">
            Aquí se encuentran los proyectos que no se lograron encontrar y quedaron perdidos en las redes en su momento.
            <br /> A modo de homenaje, tienen su espacio aquí.
        </span>

        {isLoading && <LoadingComponent />}
        <ul className="lost-proyects__list">
            {listOfProyectLost.map((proyecto, index) => {
                const isLast = index === listOfProyectLost.length - 1

                return (
                    <li
                        key={index}
                        ref={isLast ? lastLostProyectFunction : null}
                        className="lost-proyects__list__item"
                    >
                        <section className="lost-proyects__list__item__poster-content">
                            <img
                                className="lost-proyects__list__item__poster-content__img"
                                src={proyecto.front_page} alt={`Portada del proyecto perdido: ${proyecto.official_title}`} />
                        </section>
                        <section className="lost-proyects__list__item__data-content">
                            <h2 className="lost-proyects__list__item__data-content__h2">{proyecto.official_title}</h2>
                            <h3 className="lost-proyects__list__item__data-content__h3">{proyecto.producer}</h3>
                            <h4 className="lost-proyects__list__item__data-content__h3">{proyecto.estimated_year}</h4>
                            <h4 className="lost-proyects__list__item__data-content__h4">{proyecto.description}</h4>
                        </section>
                    </li>

                )
            })}
            {isError && <IsErrorComponent />}
        </ul>
    </main>)
}