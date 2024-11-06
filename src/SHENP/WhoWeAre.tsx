import { Link } from "react-router-dom";
import './Style/whoWeAre.css'

export default function WhoWeAre() {
    return (<main className="who-we-are">
        <section className="who-we-are__image-container">
            {/*<img src="" alt="" />*/}
        </section>
        <section className="who-we-are__image-data">
            <h3 className="who-we-are__image-data__h4">10 años haciendo historia</h3>
            <img src="" alt="" className="who-we-are__image-data__logo"/>
            <h2 className="who-we-are__image-data__h2">Series hechas en Paint</h2>
            <h3 className="who-we-are__image-data__h4">¡Dibujamos por pasión!</h3>
            <p className="who-we-are__image-data__description">Entre amigos, forjamos mundos desde la imaginación, donde la creatividad y la diversión se entrelazan en series, juegos, y cómics originales. <br /> ¡Bienvenido/a a SHEP!</p>
            <Link to={'/generos'} className="who-we-are__image-data__link"
            >Descubre nuestros universos...</Link>
        </section>
    </main>)
}