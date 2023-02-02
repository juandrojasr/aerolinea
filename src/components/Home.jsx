import React from 'react'
import img1 from '../assets/images/avion.jpg'
import img2 from '../assets/images/tarjetas.png'
import img3 from '../assets/images/efectivo.png'

const Home = () => {
    return (
        <>
            <div className='form'>

            </div>
            <div className='avion'>
                <img src={img1} />

            </div>
            <div className='pagoseguro'>
                <div className='tarjeta'>
                    <p>
                        Tarjeta de credito, tarjeta de debito y pago electronico
                    </p>
                    <img src={img2} alt="banner tarjetas" />

                </div>
                <div className='efectivo'>
                    <p>
                        Efectivo en cualquiera de las sucrusales participantes.
                    </p>
                    <img src={img3} alt="efectivo" />
                </div>
            </div>
            <div className='servicios'>

            </div>


        </>
    )
}

export default Home