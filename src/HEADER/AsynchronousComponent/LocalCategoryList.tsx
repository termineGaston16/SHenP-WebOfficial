import { Link } from "react-router-dom";
import { Category } from "../../FIREBASE/Interface/Types";

interface props {
    localCategoryList: Category[]
    className: string,
    isError: boolean,
    isLoading: boolean
}

const AsynchronousComponent: React.FC<props> = ({ localCategoryList, className, isError, isLoading }) => {
    return (<>
        {isLoading ? <span>Cargando Categorias...</span> :
            isError ? <span>Ocurrió un error inesperado. </span> :
                localCategoryList.map((categories, index) => (
                    <Link key={index} style={{ textDecoration: 'none', color: 'white' }}
                        to={`/${categories.title.toLocaleLowerCase()}`}>
                        <li className={className}>{categories.title} <categories.icon /></li>
                    </Link>
                ))
        }
    </>)
}

export default AsynchronousComponent;