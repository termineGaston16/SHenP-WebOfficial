import { Link } from "react-router-dom";
import { getProyectsByGender } from "../../FIREBASE/Index";
import { useCallback, useEffect, useRef, useState } from "react";
import { Proyecto } from "../../FIREBASE/Interface/Types";
import { useQuery } from "react-query";

interface Props {
    resultGenre: string,
    isLast: boolean,
    lastGenreElementRef: (node: HTMLLIElement | null) => void
}

const ListOfProjectsByGender: React.FC<Props> = ({ resultGenre, isLast, lastGenreElementRef }) => {
    const [listOfProjectsAccordingToGenre, setListOfProjectsAccordingToGenre] = useState<Proyecto[]>([]);

    const { data: proyectsResult = [], isLoading, isError, refetch } = useQuery({
        queryKey: [resultGenre],
        queryFn: async () => await getProyectsByGender(resultGenre, [...listOfProjectsAccordingToGenre]),
        refetchOnWindowFocus: false,
        retry: 2,
        retryDelay: 2000,
        refetchInterval: 1800000,
        staleTime: 1800000,
        cacheTime: 3600000,
    });

    const observer = useRef<IntersectionObserver | null>(null);
    const lastProjectElementRef = useCallback((node: HTMLLIElement | null) => {
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
        if (proyectsResult.length > 0) {
            setListOfProjectsAccordingToGenre(proyectsResult);
        }
    }, [proyectsResult]);

    return (
        <li ref={isLast ? lastGenreElementRef : null} className="genres__list__item">
            <h4 className="genres__list__item__h4">{resultGenre}</h4>
            <hr className="genres__list__item__hr" />

            <ul className="genres__list__item__results">
                {listOfProjectsAccordingToGenre.map((proyect, indexProyect) => {
                    const isLastProject = indexProyect === listOfProjectsAccordingToGenre.length - 1;

                    return (
                        <Link
                            key={indexProyect} to={`/proyecto/${proyect.name_section}`}
                            className="genres__list__item__results__link"
                        >
                            <li
                                ref={isLastProject ? lastProjectElementRef : null}
                                className="genres__list__item__results__link__item"
                            >
                                <img
                                    src={`Portada del proyecto: ${proyect.official_title}`}
                                    alt={`${proyect.name_section}`}
                                    className="genres__list__item__results__link__item__img"
                                />
                            </li>
                        </Link>
                    );
                })}
                {isLoading && <span>Cargando Géneros...</span>}
                {isError && <span>Ocurrió un error inesperado.</span>}
            </ul>
        </li>
    );
};

export default ListOfProjectsByGender;
