import { useCallback, useEffect, useRef, useState } from "react";
import { ProjectPreview } from "../../FIREBASE/Interface/Types";
import { Link } from "react-router-dom";
import '../Style/results.css';
import IsLoadingComponent from "../../SHENP/LoadingComponents/IsLoadingComponent";
import IsErrorComponent from "../../SHENP/LoadingComponents/IsErrorComponent";
import NoResultsComponent from "../../SHENP/LoadingComponents/NoResultsComponent";
import BackgroudProyectNule from '../../../public/background-proyect-nule.png'

interface Props {
    listOfProyect: ProjectPreview[] | undefined;
    isLoading: boolean;
    isError: boolean;
}

const Results: React.FC<Props> = ({ listOfProyect, isLoading, isError }) => {
    const [resultsByParts, setResultsByParts] = useState<ProjectPreview[]>([]);
    const [hasMore, setHasMore] = useState(true);

    const getMoreResults = useCallback((listActual: ProjectPreview[]) => {
        if (!listOfProyect) return;

        const results = listOfProyect.slice(listActual.length, listActual.length + 4);
        setResultsByParts(prev => [...prev, ...results]);

        if (listActual.length + results.length >= listOfProyect.length) {
            setHasMore(false);
        }
    }, [listOfProyect]);

    const observer = useRef<IntersectionObserver | null>(null);
    const isInterseccion = useCallback((node: HTMLElement | null) => {
        if (isLoading || !hasMore) return;

        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) getMoreResults(resultsByParts);
        });

        if (node) observer.current.observe(node);
    }, [isLoading, hasMore, getMoreResults, resultsByParts]);

    useEffect(() => {
        if (listOfProyect) {
            setResultsByParts([]);
            setHasMore(true);

            getMoreResults([]);
        }
    }, [listOfProyect, getMoreResults]);


    if (isLoading) return (<IsLoadingComponent />)
    if (isError) return (<IsErrorComponent />)
    if (resultsByParts.length < 1) return (<NoResultsComponent />);

    return (<ul className="results">
        {resultsByParts.map((result, index) => {
            const isLast = index === resultsByParts.length - 1;
            return (<Link style={{ textDecoration: 'none' }} key={index} to={`/proyecto/${result.name_section}`}>
                <li
                    ref={isLast ? isInterseccion : null}
                    className="results__item"
                >
                    <h4 className="results__item__h4">{result.category}</h4>
                    <div  style={{ backgroundImage: `url(${BackgroudProyectNule})` }}
                     className="results__item__container-img">
                        <img style={{ width: '100%' }} src={result.front_page} alt={`Portada del proyecto ${result.official_title}`} />
                    </div>
                    <h2 className="results__item__h2">{result.official_title}</h2>
                </li>
            </Link>)
        })}
    </ul>);
}

export default Results;
