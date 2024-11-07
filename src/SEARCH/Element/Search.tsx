import React, { useRef } from 'react';
import '../Style/search.css'

interface Props {
    setQuerySearch: React.Dispatch<React.SetStateAction<string | undefined>>
}


const Search: React.FC<Props> = ({ setQuerySearch }) => {
    const timerRef = useRef<number | null>(null);

    const filterQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (timerRef.current) clearTimeout(timerRef.current);

        timerRef.current = window.setTimeout(() => {
            setQuerySearch(
                e.target.value
                    .trim()
                    .toLocaleLowerCase()
                    .replace(/[^\w\s]/g, '')
            );
        }, 1000);
    };

    return (<form className='search'>
        <input
            className='search__input'
            type="search"
            placeholder="Realiza tu búsqueda aquí..."
            onChange={filterQuery}
        />
        <button
            className='search__btn-cancel'
            type="reset"
            onClick={() => setQuerySearch(undefined)}
        >⨉</button>
    </form>);
};

export default Search;
