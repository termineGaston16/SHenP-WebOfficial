import { useQuery } from "react-query"
import { getOptions } from "../FIREBASE/Index"
import { useEffect, useState } from "react"
import './Style/configuration.css'

export default function Configuration() {

    const { data: options = [], isLoading, isError } = useQuery({
        queryKey: ['options'],
        queryFn: async () => await getOptions(),
        refetchOnWindowFocus: false,                  // Evita hacer refetch cuando el usuario regresa a la ventana de la aplicación
        retry: 2,                                     // Número de intentos de reintento si la consulta falla
        retryDelay: 2000,                             // Tiempo en milisegundos entre cada reintento si la consulta falla
        refetchInterval: 1800000,                     // Intervalo para refetch automático cada 30 minutos (1800000 ms)
        staleTime: 1800000,                           // Tiempo en el cual la caché se considera "fresca" (30 minutos); no hará refetch automático en ese tiempo
        cacheTime: 0                                  // Elimina el caché inmediatamente cuando el componente se desmonta
    })

    const changeOptions = (index: number, urlLink: string) => {
        switch (index) {
            case 0:
                localStorage.setItem('logotipo_actual', urlLink)
                break;

            case 1:
                localStorage.setItem('background_actual', urlLink)
                break;
            default:
                break;
        }
        window.dispatchEvent(new Event('localStorageUpdated'));
    }

    const [showOptions, setShowOptions] = useState<undefined | number>(undefined)
    const [opactity, setOpacity] = useState<string>(()=>{
        const inLocal = localStorage.getItem('opacidad_actual')
        if(inLocal) return inLocal
        return '0.5'
    })

    useEffect(()=>{
        localStorage.setItem('opacidad_actual', opactity)
        window.dispatchEvent(new Event('localStorageUpdated'));
    },[opactity])

    return (<main className="configuration">
        <section className="configuration__container-options">
            <ul className="configuration__container-options__list">
                {options.map((option, index) => (
                    <li
                        className="configuration__container-options__list__item"
                        key={index} onClick={() => setShowOptions(index)}>
                        <h3 className="configuration__container-options__list__item__title">{option.title}</h3>
                        <p className="configuration__container-options__list__item__description">{option.description}</p>
                    </li>
                ))}
            </ul>
        </section>
        <section className="configuration__container-items">
            {(showOptions !== undefined) && (
                typeof options[showOptions].content === 'string' ? (<>
                    <h3 className="configuration__container-items__h3">Opacidad actual: {opactity}</h3>
                    <input className="configuration__container-items__inputRange"
                        type="range"
                        max={1.0}
                        min={0.0}
                        step={0.1}
                        onChange={(e) => setOpacity(e.target.value)}
                        value={opactity} />
                </>) : (
                    <ul className="configuration__container-items__list">
                        {options[showOptions].content.map((item, indexItem) => (
                            <li key={indexItem}
                                className="configuration__container-items__list__item"
                                onClick={()=> changeOptions(showOptions, item.imgContent)}
                            >
                                <img
                                    className="configuration__container-items__list__item__img"
                                    src={item.imgContent} alt={item.titleContent} />
                                <span className="configuration__container-items__list__item__titleContent">{item.titleContent}</span>
                            </li>
                        ))}
                    </ul>
                )
            )}
        </section>

        {isLoading && <span>Cargando Opciones...</span>}
        {isError && <span>Ocurrió un error inesperado.</span>}
    </main>)
}