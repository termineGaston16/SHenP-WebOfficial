import { FaListUl, FaRibbon, FaSearch   } from "react-icons/fa";
import { Link } from "react-router-dom";
import LogoWhoWeAre from '../../public/logo-who-we-are.png'
import './Style/navHeader.css'

export default function NavHeader() {
    return (<nav className="nav-header">
        <ul className="nav-header__list">
            <Link to={'/'} className="nav-header__list__link"
            ><li className="nav-header__list__link__item">¿Quiénes somos? 
            <img className="nav-header__list__link__item__img"
            src={LogoWhoWeAre} alt="logo-whoWeAre" />
            </li></Link>
            <Link to={'/generos'} className="nav-header__list__link"
            ><li className="nav-header__list__link__item">Géneros <FaListUl className="classReactIcon"/></li></Link>
            <Link to={'/proyectos-perdidos'} className="nav-header__list__link"
            ><li className="nav-header__list__link__item">Proyectos Perdidos <FaRibbon className="classReactIcon"/></li></Link>
            <Link to={'/buscar'} className="nav-header__list__link"
            ><li className="nav-header__list__link__item">Buscar <FaSearch className="classReactIcon"/></li></Link>
        </ul>
    </nav>)
}