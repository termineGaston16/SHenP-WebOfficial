import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import { getProyect } from "../FIREBASE/Index"
import './Style/proyect.css'
import { useEffect, useState } from "react"
import LoadingComponent from "../SHENP/LoadingComponents/LoadingComponent"
import IsErrorComponent from "../SHENP/LoadingComponents/IsErrorComponent"
import BackgroudProyectNule from '../../public/background-proyect-nule.png'

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
    const [isComic, setIsComic] = useState<boolean>(false)

    const { nameSection } = useParams()

    if (!nameSection) return (<main className="proyectMain">Debe ingresar el nombre exacto de un proyecto en la barra de búsqueda.
        <br /> Ejemplo: /proyecto/exe world 2</main>)

    const { data: proyect = undefined, isError, isLoading } = useQuery({
        queryKey: ['proyect'],
        queryFn: async () => getProyect(nameSection),
        refetchOnWindowFocus: false,                  // Evita hacer refetch cuando el usuario regresa a la ventana de la aplicación
        retry: 2,                                     // Número de intentos de reintento si la consulta falla
        retryDelay: 2000,                             // Tiempo en milisegundos entre cada reintento si la consulta falla
        refetchInterval: false,                         // Intervalo para refetch automático cada 30 minutos (1800000 ms)
        cacheTime: 0                                  // Elimina el caché inmediatamente cuando el componente se desmonta
    })

    useEffect(() => {
        document.title = `Proyecto... | SHenP Web`
        if(proyect) document.title = `${proyect.official_title} | SHenP Web`
        
        if (proyect?.category === 'Comic') return setIsComic(true)
        return setIsComic(false)
    }, [proyect])

    if (isLoading) return (<main className="proyectMain"><LoadingComponent /></main>)

    if (isError) return (<main className="proyectMain"><IsErrorComponent /></main>)

    if (proyect) return (<main className="proyect">
        <section className="proyect__component-one">
            <div className="proyect__component-one__official-cover-container"
                style={{ backgroundImage: `url(${BackgroudProyectNule})` }}
            >
                <img
                    loading="lazy"
                    style={{ width: '100%' }}
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
            <div
                className="proyect__component-two__official-logo-container">
                <img
                    loading="lazy"
                    className="proyect__component-two__official-logo-container__logo"
                    src={proyect.logo_link}
                    alt={`Logo Oficial del proyecto ${proyect.name_section}`} />
            </div>
            <p className="proyect__component-two__description">{proyect.description}</p>
            <ul className="proyect__component-two__list-gallery">
                {proyect.gallery_link.map((p, i) => (<>
                    {!isComic && <li
                        onClick={() => setShowImage({
                            index: i,
                            link: p,
                            show: true
                        })}
                        style={{ backgroundImage: `url(${BackgroudProyectNule})` }}
                        className="proyect__component-two__list-gallery__item"
                        key={i}><img style={{ width: '100%' }} loading="lazy" src={p} alt={`${proyect.name_section} galería número: ${i}`} />
                    </li>}
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
                style={{ backgroundImage: `url(${BackgroudProyectNule})` }}
                loading="lazy"
                className="proyect__show-image__img"
                src={showImage.link} alt={`${proyect.name_section} galería número: ${showImage.index}`} />
        </div>}
    </main>)
}