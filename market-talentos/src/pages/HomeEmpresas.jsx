import React from 'react'
import makaia from "../assets/Logo.png";
import arrowleft from "../assets/arrowleft.png";
import iconclose from "../assets/iconclose.png";
import "../style/stylehomecompany.scss";

const HomeEmpresas = () => {
    return (
        <>
            <body>
                {/* //NavBar home company// */}
                <div className='company'>
                    <div className='company__navBar'>
                        <img src={arrowleft} alt="imgLogo" height={30} width={30} />
                        <figure>
                            <img className='company__logo' src={makaia} alt="imgLogo" width={200} />
                        </figure>
                        <img src={iconclose} alt="imgLogo" height={30} width={30} />

                    </div>

                </div>
                {/* //Mensaje de Bienvenida// */}
                <div className='text__w'>
                    <h1>HOLA</h1>
                    <h3>Magenta Developer</h3>
                </div>

                {/* //Card de información// */}

                <section className='card'>

                    <div className='card__container'>
                        <div className='card__buttonsSearch'>
                            <button > Buscar Talentos</button>

                        </div>
                        <div className='card__buttonsOfert'>
                            <button >Ofertas Vacantes</button>
                        </div>

                        <div className='card__buttonsSelect'>
                            <button>Talentos Seleccionados</button>
                        </div>

                        <div className='card__info'>

                            <p>
                                Por Favor actualiza aquí el estado de los <br /> Talentos Selecionados
                            </p>

                            <div className='card__buttonsSelectInfo'>
                                <button>Talentos Seleccionados</button>
                            </div>

                            <div className='text__wInfo'>
                                <h1>Click aquí</h1>
                                <h3>DASHBOARDS</h3>
                            </div>

                        </div>

                    </div>

                </section>


            </body>
        </>
    )
}

export default HomeEmpresas;