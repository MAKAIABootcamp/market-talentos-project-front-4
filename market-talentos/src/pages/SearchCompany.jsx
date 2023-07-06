import React from 'react'
import "../style/styleSearchCompany.scss";
import makaia from "../assets/Logo.png";
import arrowleft from "../assets/arrowleft.png";
import iconclose from "../assets/iconclose.png";

const SearchCompany = () => {
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
                <section className='buttons'>
                    <div>
                        <button>Perfil</button>
                    </div>
                    <div>
                        <button>Salir</button>
                    </div>

                </section>

                <div className='card__buttonsSearch'>
                    <button > Buscar Talentos</button>

                </div>

                <section className='container__busqueda'>

                    <div className='container__roles_p'>
                        <div className='container__front'>
                            <button  >Front End</button>
                        </div>
                        <div  className='container__back'>
                            <button >Back End</button>
                        </div>
                        <div className='container__full'> 
                            <button>Full Satck</button>
                        </div>
                        <div className='container__all'>
                            <button >Todos</button>
                        </div>
                    </div>


                </section>









            </body>




        </>
    )
}

export default SearchCompany;