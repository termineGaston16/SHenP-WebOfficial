import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import { getComic } from "../../FIREBASE/Index"
import LoadingComponent from "../LoadingComponents/LoadingComponent"
import IsErrorComponent from "../LoadingComponents/IsErrorComponent"
import { useEffect, useState } from "react"
import ButtonBox from "./ButtonBox"
import './comicLocales.css'


import CapIntro from '../../../public/NOVA COMIC/nova-intro.png'
import Cap1 from '../../../public/NOVA COMIC/nova-part1.png'
import Cap2 from '../../../public/NOVA COMIC/nova-part2.png'
import Cap3 from '../../../public/NOVA COMIC/nova-part3.png'
import Cap4 from '../../../public/NOVA COMIC/nova-part4.png'
import Cap5 from '../../../public/NOVA COMIC/nova-part5.png'
import Cap6 from '../../../public/NOVA COMIC/nova-part6.png'
import Cap7 from '../../../public/NOVA COMIC/nova-part7.png'
import Cap8 from '../../../public/NOVA COMIC/nova-part8.png'
import Cap9 from '../../../public/NOVA COMIC/nova-part9.png'

export default function ComicComponent() {

    const { nameSection } = useParams()
    const [page, setPage] = useState<number>(0)
    const [novaComic, _setNovaComic] = useState<string[]>([
        CapIntro, Cap1, Cap2, Cap3, Cap4, Cap5, Cap6, Cap7, Cap8, Cap9
    ])

    if (!nameSection) return (<main className="proyectMain">Debe ingresar el nombre exacto de un comic en la barra de búsqueda.
        <br /> Ejemplo: /comic/nova cadenas hacia la liberacion</main>)

    const { data: comic = undefined, isLoading, isError } = useQuery({
        queryKey: ['comic'],
        queryFn: async () => getComic(nameSection),
        refetchOnWindowFocus: false,
        retry: 2,
        retryDelay: 2000,
        refetchInterval: false,
        cacheTime: 0,
        enabled: !!nameSection
    })

    useEffect(()=>{
        document.title= 'Comic Local | SHenP Web'
    },[])

    if (isLoading) return (<main className="proyectMain"><LoadingComponent /></main>)
    if (isError) return (<main className="proyectMain"><IsErrorComponent /></main>)

    if (comic) return (<main className="comic-component">
        <img className="comic-component__logo" loading="lazy" src={comic.logo} alt={`Logotipo del comic`} />

        <ButtonBox comic={comic} page={page} setPage={setPage} />
        <img className="comic-component__page" loading="lazy" src={novaComic[page]} alt={`Página de Comic número: ${page}`} />

    </main>)
}