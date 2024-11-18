import { Link } from "react-router-dom";
import './Style/whoWeAre.css'
import LogoWeb from '../../public/Logo_Web.png'
import { useEffect } from "react";


export default function WhoWeAre() {

    useEffect(() => {
        document.title = 'Home | SHenP Web'
    }, [])

    return (<main className="who-we-are">
        <section className="who-we-are__image-data">
            <h3 className="who-we-are__image-data__h4">10 años haciendo historia</h3>
            <img src={LogoWeb} alt="Logo Web principal" className="who-we-are__image-data__logo" loading="lazy" />
            <h2 className="who-we-are__image-data__h2">Series hechas en Paint</h2>
            <h3 className="who-we-are__image-data__h4">¡Dibujamos por pasión!</h3>
            <p className="who-we-are__image-data__description">Entre amigos, forjamos mundos desde la imaginación, donde la creatividad y la diversión se entrelazan en series, juegos, y cómics originales. <br /> ¡Bienvenido/a a SHEP!</p>
            <Link to={'/generos'} className="who-we-are__image-data__link"
            >Descubre nuestros universos...</Link>

            <hr />
            <p className="who-we-are__image-data__description">Vídeo parodia de nuestro amigo FerXo Animations!</p>
            <iframe src="https://www.youtube.com/embed/Odaeaho0CQs?si=sChGzhFx35mh7YQe" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        </section>
    </main>)
}