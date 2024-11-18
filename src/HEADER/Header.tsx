import { useEffect, useState } from "react";

import LocalCategoryList from "./AsynchronousComponent/LocalCategoryList";
import './Style/header.css'
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { getCatergories } from "../FIREBASE/Index";
import LogoWeb from '../../public/Logo_Web.png'
import BackGroundWeb from '../../public/background_web.png'

export default function Header() {
    const [openHeader, setOpenHeader] = useState<string[]>(['', ''])
    const [logoSrc, setLogoSrc] = useState<string>(localStorage.getItem('logotipo_actual') ?? LogoWeb);
    const [backGroundSrc, setBackGroundSrc] = useState<string>(localStorage.getItem('background_actual') ?? BackGroundWeb);
    const [opactityInLocal, setOpactityInLocal] = useState<string>(localStorage.getItem('opacidad_actual') ?? '0.5');

    const { data: localCategoryList = [], isError, isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => await getCatergories(),
        refetchOnWindowFocus: false,
    })

    useEffect(() => {
        const handleStorageChange = () => {
            setLogoSrc(localStorage.getItem('logotipo_actual') ?? LogoWeb);
            setBackGroundSrc(localStorage.getItem('background_actual') ?? BackGroundWeb);
            setOpactityInLocal(localStorage.getItem('opacidad_actual') ?? '0.5');
        };

        window.addEventListener('localStorageUpdated', handleStorageChange);

        return () => {
            window.removeEventListener('localStorageUpdated', handleStorageChange);
        };
    }, []);

    return (<>
        <div className={`header__background ${openHeader[0]}`}></div>
        <div
            className="background"
            style={{ backgroundImage: `url(${backGroundSrc})` }}
        ></div>
        <div className="background_opactity" style={{ opacity: opactityInLocal }}></div>

        <header className={`header ${openHeader[1]}`}
            onMouseEnter={() => setOpenHeader(['open-background', 'open-header'])}
            onMouseLeave={() => setOpenHeader(['', ''])}>

            <Link to={'/'}><img loading="lazy" src={logoSrc} alt={`Logo actual: ${logoSrc}`} className="header__logo-main" /></Link>
            <hr className="header__hr" />
            <ul className="header__list">
                <Link to={'/'} className="header__list__item__link">
                    <li className="header__list__item">SHenP Crew</li>
                </Link>

                <LocalCategoryList
                    localCategoryList={localCategoryList} isError={isError} isLoading={isLoading}
                    className={'header__list__item'} className2={'header__list__item__link'}
                />

                <Link to={'/configuracion'} className="header__list__item__link">
                    <li className="header__list__item">Configuración</li>
                </Link>
            </ul>
            <hr className="header__hr" />
            <span className="header__copy">
                @KDA/NOVA 2024 <br /> @SHenP 2024
            </span>
        </header ></>)
}