import 'react'
import HeaderImagen from '../images/headerImg.jpg'
import '../styles/headerImg.css'

const HeaderImg = () => {

    return (
        <>
        <img className='headerPhoto' src={HeaderImagen} alt="Imagen header" />
        </>

    )
}

export default HeaderImg