import { useEffect } from "react"
import './Style/genres.css'

export default function Genres() {

    const asyncFunction = async () => {
    };

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight; // Altura de la ventana visible
            const scrollTop = window.scrollY; // Cantidad de desplazamiento desde el principio
            const documentHeight = document.documentElement.scrollHeight; // Altura total del documento

            // Comprobamos si el usuario ha llegado al final
            if (windowHeight + scrollTop >= documentHeight - 1) {
                asyncFunction();
            }
        };

        // Añadimos el evento de scroll
        window.addEventListener("scroll", handleScroll);

        // Eliminamos el evento de scroll al desmontar el componente
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);



    return (
        <main className="genres">
            <ul className="genres__list">
                {/*localGeneratorList.data.result.map((result, index) => (
                    <li key={index} className="genres__list__item">
                        <h4 className="genres__list__item__h4">{result.genre}</h4>
                        <hr className="genres__list__item__hr" />

                        <ul className="genres__list__item__results">
                            {result.proyects.map((proyect, indexProyect) => (
                                <Link key={indexProyect} to={`/proyecto/${proyect.name_section}`}
                                    className="genres__list__item__results__link"
                                >
                                    <li
                                        className="genres__list__item__results__link__item"
                                    >
                                        <img src={`Portada del proyecto: ${proyect.official_title}`} alt={`${proyect.name_section}`}
                                            className="genres__list__item__results__link__item__img" />
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </li>
                ))*/}

                {/*localGeneratorList.isLoading && <span>Cargando Generos...</span>*/}
                {/*localGeneratorList.data.isError && <span>Ocurrió un error inesperado.</span>*/}
            </ul>
        </main>
    );
}