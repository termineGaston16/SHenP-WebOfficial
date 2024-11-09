import React, { useCallback, useEffect, useRef, useState } from 'react';
import '../Style/search.css'
import { useNavigate, useParams } from 'react-router-dom';

interface Props {
    setQuerySearch: React.Dispatch<React.SetStateAction<string | undefined>>
}


const Search: React.FC<Props> = ({ setQuerySearch }) => {
    const timerRef = useRef<number | null>(null);
    const { query } = useParams()
    const navigate = useNavigate()

    const filterQuery = (e: React.ChangeEvent<HTMLInputElement> | string) => {
        if (timerRef.current) clearTimeout(timerRef.current);

        if (typeof e === 'string') return setQuerySearch(
            e
                .trim()
                .toLocaleLowerCase()
                .replace(/[^\w\s]/g, '')
        );

        timerRef.current = window.setTimeout(() => {
            navigate(`/buscar/${e.target.value
                .trim()
                .toLocaleLowerCase()
                .replace(/[^\w\s]/g, '')}`)

            setQuerySearch(
                e.target.value
                    .trim()
                    .toLocaleLowerCase()
                    .replace(/[^\w\s]/g, '')
            );
        }, 1000);
    };

    useEffect(() => {
        if (!query) return
        filterQuery(query)
    }, [query])

    const [lengthOfSearcher, setLengthOfSearcher] = useState<'30vw' | '10vw'>('10vw')
    const observer = useRef<IntersectionObserver | null>(null)
    const seeingSearcher = useCallback((node: HTMLElement | null) => {
        if (observer.current) observer.current.disconnect()

        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setLengthOfSearcher('30vw')
            } else {
                setLengthOfSearcher('10vw')
            }
        })
        if (node) observer.current.observe(node)
    }, [])

    return (<form
        ref={seeingSearcher}
        className='search'
        style={{ width: `${lengthOfSearcher}` }}
        onSubmit={(e) => e.preventDefault()}>
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
