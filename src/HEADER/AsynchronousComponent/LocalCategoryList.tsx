import { Category } from "../../FIREBASE/Interface/Types";

interface props{
    localCategoryList: Category[]
    className: string,
    isError: boolean,
    isLoading: boolean
}

const AsynchronousComponent: React.FC<props> = ({localCategoryList, className, isError, isLoading}) => {
    return (<>
        {isLoading ? <span>Cargando Categorias...</span> :
            isError ? <span>Ocurrió un error inesperado. </span> :
            localCategoryList.map((categories, index) => (
                    <li key={index} className={className}>{categories.title} <categories.icon /></li>
                ))
        }
    </>)
}

export default AsynchronousComponent;