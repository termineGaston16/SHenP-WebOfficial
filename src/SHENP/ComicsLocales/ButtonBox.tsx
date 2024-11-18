import { Comic } from "../../FIREBASE/Interface/Types"

interface Props {
    page: number,
    setPage: React.Dispatch<React.SetStateAction<number>>,
    comic: Comic
}

const ButtonBox: React.FC<Props> = ({ page, setPage, comic }) => {
    return (<div className="comic-component__box">
        <button
            className="comic-component__box__btn"
            type="button"
            onClick={() => {
                if (page === 0) return setPage(comic.pages.length -1)
                setPage(prevPage => prevPage -= 1)
            }}>◁</button>

        <span className="comic-component__box__span">Página Actual: {page + 1}/{comic.pages.length}</span>

        <button
            className="comic-component__box__btn"
            type="button"
            onClick={() => {
                if (page === comic.pages.length - 1) return setPage(0)
                setPage(prevPage => prevPage += 1)
            }}>▷</button>
    </div>)
}

export default ButtonBox;