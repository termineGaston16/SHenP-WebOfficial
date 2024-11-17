import NoResultImg from '../../../public/no-results.png'
import NoResultText from '../../../public/noResults-message.png'
import '../Style/noResults.css'

export default function NoResultsComponent(){
    return(<div 
    style={{backgroundImage:`url(${NoResultImg})`}}
    className='no-results-component'>
        <img src={NoResultText} alt="Resultados no encontrados..." />
    </div>)
}