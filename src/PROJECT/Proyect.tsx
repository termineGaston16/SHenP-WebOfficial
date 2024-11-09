import { useParams } from "react-router-dom"

export default function Proyect() {

    const { nameSection } = useParams()

    if(!nameSection) return (<span>Proyecto  no encontrado</span>)

    

    return (<main>

    </main>)
}