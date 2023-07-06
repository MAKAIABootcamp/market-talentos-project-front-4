import React from 'react';
import './styleCardTalent.scss';
import imgTalent from '../../assets/elisa.jpeg';
import useOnClick from '../../funtions/useOnClick';
import { NavLink, Outlet } from 'react-router-dom';
import imgGitUp from '../../assets/logogithub.png';
import imgLinkedin from '../../assets/logolink.png';
import imgVideo from '../../assets/logovideo.png';
import imgPhone from '../../assets/celular.png';
import imgMail from '../../assets/correo.png';
import imgWhatsapp from '../../assets/whatsapp.png';

const CardTalent = () => {
    const handleClick = useOnClick();
    return (
        <>
            <section className='talents'>
                <div className='talents__container'>
                    <div className='talents__container-imgTalent'
                        onClick={() => handleClick("editImgProfile", "")}>
                        <figure className='talents__card-figure'>
                            <img src={imgTalent} alt="imgTalent" />
                        </figure>
                    </div>
                    <div className='talents__container-info'>
                        <div className='talents__container-state'>
                            <figure className='talents__buttons-state'>
                                <img src={imgWhatsapp} alt="" />
                            </figure>
                            <div className='talents__container-levelEnglish'>
                                <span className='talents__know'>Ingles</span>
                                <span className='talents__know'>A1</span>
                            </div>
                        </div>
                        <div className='talents__line'></div>
                        <div className='talents__container-infoPnal'>
                            <span className='talents__name'><strong>Elisabeth Cristina</strong></span>
                            <span className='talents__lastName'><strong>Ospina Graciano</strong></span>
                            <span className='talents__know'>Front end developer</span>
                        </div>
                    </div>
                    <section className='talents__seccion-info'>
                        <div className='talents__container-links'>
                            <button className='talents__button-link'>
                                <NavLink>
                                    <figure className='talents__figure-icons-gitUp'>
                                        <img src={imgGitUp} alt="git" />
                                    </figure>
                                </NavLink>
                                <NavLink>
                                    <figure className='talents__figure-icons-linkedin'>
                                        <img src={imgLinkedin} alt="link" />
                                    </figure>
                                </NavLink>
                                <NavLink>
                                    <figure className='talents__figure-icons-video'>
                                        <img src={imgVideo} alt="vid" />
                                    </figure>
                                </NavLink>
                            </button>
                        </div>
                        <div className='talents__container-infoCustom'>
                            <div className='talents__container-infoContacts'>
                                <div className='talents__container-mail'>
                                    <figure className='talents__iconMail'>
                                        <img src={imgMail} alt="" />
                                    </figure>
                                    <span className='talents__infoContact'>elisabethospinag@gmail.com</span>
                                </div>
                                <div className='talents__container-mail'>
                                    <figure className='talents__iconPhone'>
                                        <img src={imgPhone} alt="" />
                                    </figure>
                                    <span className='talents__infoContact'>+57 3002791131</span>
                                </div>
                            </div>
                            <div className='talents__container-programs'>
                                <span className='talents__programs'>HTML</span>
                                <span className='talents__programs'>CSS</span>
                                <span className='talents__programs'>JAVA_SCRIPT</span>
                                <span className='talents__programs'>SASS</span>
                                <span className='talents__programs'>REACT</span>
                                <span className='talents__programs'>BOOBSTRAP</span>

                                <span className='talents__programs'>GIT_UP</span>
                            </div>
                            {/* <button className='talents__button-seeMore'>ver más</button> */}
                            <div className='talents__container-profile'>
                                <p className='talents__profile'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nostrum dolores quasi beatae. Placeat quod quia quidem quasi accusamus maxime nemo ut, alias ullam, exercitationem deleniti ad vero totam vitae.
                                </p>
                            </div>
                            <div className='talents__container-custom'>
                                <button className='talents__button-custom'
                                    onClick={() => handleClick("portfolio", "")}
                                >portafolio</button>
                                <button className='talents__button-custom'
                                    onClick={() => handleClick("curriculum", "")}
                                >hoja de vida</button>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
            <Outlet />

        </>
    )
}

export default CardTalent