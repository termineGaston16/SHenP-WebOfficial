import { useEffect, useState } from 'react'
import '../Style/loadingComponents.css'

export default function LoadingComponent() {


    const [idPhrase, setIdPhrase] = useState<number>(0)
    const [phrase, _setPhrase] = useState<string[]>([
        'Construyendo juego PPT...',
        'Recolectando fragmentos de gema...',
        'Renderizando vídeos...',
        'Iniciando combate por turnos...',
        'Descargando consola PPT...',
        '¿Ramirez, dónde estás?',
        'Iniciando guerra contra el imperio...',
        'Usando poderes...'
    ])

    useEffect(()=>{
        const number = Math.floor(Math.random() * phrase.length)
        setIdPhrase(number)
    },[])
    
    return (<div className="loading-component">
        <img 
        loading='lazy'
        className="loading-component__img" src='../../../public/logo-loading.png' alt="Logo de cargando componente básico." />
        <span className="loading-component__phrase">{phrase[idPhrase]}</span>
    </div>)
}
