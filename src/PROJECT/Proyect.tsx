import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import { getProyect } from "../FIREBASE/Index"
import './Style/proyect.css'
import { useState } from "react"

export default function Proyect() {

    const [showImage, setShowImage] = useState<{
        link: string,
        show: boolean,
        index: number
    }>({
        index: 0,
        link: '',
        show: false
    })

    const { nameSection } = useParams()
    if (!nameSection) return (<span>Nombre inválido</span>)

    const { data: proyect = undefined, isError, isLoading } = useQuery({
        queryKey: ['proyect'],
        queryFn: async () => getProyect(nameSection),
        refetchOnWindowFocus: false,                  // Evita hacer refetch cuando el usuario regresa a la ventana de la aplicación
        retry: 2,                                     // Número de intentos de reintento si la consulta falla
        retryDelay: 2000,                             // Tiempo en milisegundos entre cada reintento si la consulta falla
        refetchInterval: false,                     // Intervalo para refetch automático cada 30 minutos (1800000 ms)
    })

    if (!proyect) return (<span>Proyecto no encontrado</span>)

    return (<main className="proyect">
        <section className="proyect__component-one">
            <div className="proyect__component-one__official-cover-container">
                <img
                    src={proyect.intro_link}
                    className="proyect__component-one__official-cover-container__cover"
                    alt={`Intro del proyecto ${proyect.name_section}`} />
            </div>
            <div className="proyect__component-one__data-container">
                <a
                    href={proyect.access_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proyect__component-one__data-container__play"
                >
                    PLAY ▶
                </a>
                <h2 className="proyect__component-one__data-container__official-title">{proyect.official_title}</h2>
                <h3 className="proyect__component-one__data-container__category">{proyect.category}</h3>
                <a className="proyect__component-one__data-container__producer"
                    href={proyect.producer.link} target="_blank" rel="noopener noreferrer">{proyect.producer.name}</a>
                <ul className="proyect__component-one__data-container__list-gender">
                    {proyect.gender.map((g, i) => (
                        <li
                            className="proyect__component-one__data-container__list-gender__item"
                            key={i}>{g}</li>
                    ))}
                </ul>
                <h4 className="proyect__component-one__data-container__release-date">{proyect.release_date}</h4>
            </div>
        </section>
        <section className="proyect__component-two">
            <div className="proyect__component-two__official-logo-container">
                <img
                    className="proyect__component-two__official-logo-container__logo"
                    src={proyect.logo_link}
                    alt={`Logo Oficial del proyecto ${proyect.name_section}`} />
            </div>
            <p className="proyect__component-two__description">{proyect.description}</p>
            <ul className="proyect__component-two__list-gallery">
                {proyect.gallery_link.map((p, i) => (<>
                    <li
                        onClick={() => setShowImage({
                            index: i,
                            link: p,
                            show: true
                        })}
                        className="proyect__component-two__list-gallery__item"
                        key={i}><img src={p} alt={`${proyect.name_section} galería número: ${i}`} />
                    </li>
                </>))}
            </ul>
        </section>

        {showImage.show && <div className="proyect__show-image">
            <button className="proyect__show-image__btn-cancel"
                onClick={() => setShowImage({
                    index: 0,
                    link: '',
                    show: false
                })}
                type="button">⨉</button>
            <img
                className="proyect__show-image__img"
                src={showImage.link} alt={`${proyect.name_section} galería número: ${showImage.index}`} />
        </div>}
        {isLoading && <span>Cargando Proyecto...</span>}
        {isError && <span>Ocurrió un error inesperado.</span>}
    </main>)
}