import { useEffect, useState } from "react";
import { IoMdHome, IoIosSettings } from "react-icons/io";

import LocalCategoryList from "./AsynchronousComponent/LocalCategoryList";
import './Style/header.css'
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { getCatergories } from "../FIREBASE/Index";

export default function Header() {
    const [openHeader, setOpenHeader] = useState<string[]>(['', ''])
    const [logoSrc, setLogoSrc] = useState<string>(localStorage.getItem('logotipo_actual') ?? './././public/logos/Logo_Web.png');
    const [backGroundSrc, setBackGroundSrc] = useState<string>(localStorage.getItem('background_actual') ?? './././public/backgrounds/background_web.png');
    const [opactityInLocal, setOpactityInLocal] = useState<string>(localStorage.getItem('opacidad_actual') ?? '0.5');

    const { data: localCategoryList = [], isError, isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => await getCatergories(),
        refetchOnWindowFocus: false,
    })

    useEffect(() => {
        const handleStorageChange = () => {
            setLogoSrc(localStorage.getItem('logotipo_actual') ?? './././public/logos/Logo_Web.png');
            setBackGroundSrc(localStorage.getItem('background_actual') ?? './././public/backgrounds/background_web.png');
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

            <Link to={'/'}><img src={logoSrc} alt={`Logo actual: ${logoSrc}}`} className="header__logo-main" /></Link>
            <hr className="header__hr" />
            <ul className="header__list">
                <Link to={'/'} className="header__list__item__link">
                    <li className="header__list__item">SHenP Crew <IoMdHome /></li>
                </Link>

                <LocalCategoryList
                    localCategoryList={localCategoryList} isError={isError} isLoading={isLoading}
                    className={'header__list__item'}
                />

                <Link to={'/configuracion'} className="header__list__item__link">
                    <li className="header__list__item">Configuración <IoIosSettings /></li>
                </Link>
            </ul>
            <hr className="header__hr" />
            <span className="header__copy">
                @KDA/NOVA 2024 <br /> @SHenP 2024
            </span>
        </header ></>)
}