import '../Style/isErrorComponent.css'
import LogoIsError from '../../../public/img-isError.png'

export default function IsErrorComponent() {
    return (
        <div className='is-error-component'>
            <img  className='ir-error-component__img'loading="lazy" src={LogoIsError} alt="Background isError" />
            <span className='ir-error-component__title'>¡Error inesperado!</span>
            <p className='ir-error-component__text'>Parece que ocurre un error. Inténtelo de nuevo.</p>
        </div>
    )
}