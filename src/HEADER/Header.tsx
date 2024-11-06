import { useState } from "react";
import { IoMdHome, IoIosSettings } from "react-icons/io";

import LocalCategoryList from "./AsynchronousComponent/LocalCategoryList";
import './Style/header.css'
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { getCatergories } from "../FIREBASE/Index";

export default function Header() {
    const [openHeader, setOpenHeader] = useState<string[]>(['', ''])

    const { data: localCategoryList = [], isError, isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => await getCatergories(),
        enabled: true,
        refetchOnWindowFocus: false,
        

    })

    return (<>
        <div className={`header__background ${openHeader[0]}`}></div>

        <header className={`header ${openHeader[1]}`}
            onMouseEnter={() => setOpenHeader(['open-background', 'open-header'])}
            onMouseLeave={() => setOpenHeader(['', ''])}>

            <Link to={'/'}><img src="" alt="" className="header__logo-main" /></Link>
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