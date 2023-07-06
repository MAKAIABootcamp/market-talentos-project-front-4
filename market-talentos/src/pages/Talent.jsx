import React from 'react';
import '../style/styleTalent.scss';
import Gesi from "../assets/Gesi.png";
import diana from "../assets/diana.jpg";
import bg from "../assets/bg.jpg";
// import whatsapp from "../assets/whatsapp.png"
import imgTalent from '../assets/elisa.jpeg';
import useOnClick from '../funtions/useOnClick';
import { NavLink, Outlet } from 'react-router-dom';
import imgGitUp from '../assets/logogithub.png';
import imgLinkedin from '../assets/logolink.png';
import imgVideo from '../assets/logovideo.png';
import imgPhone from '../assets/celular.png';
import imgMail from '../assets/correo.png';
// import imgWhatsapp from '../assets/whatsapp.png';


const Talent = () => {

  const handleClick = useOnClick();

  return (

    <>

      <section className='talents'>


        <div className='container_principal'>

          <div className='buttons_principal'>
            <div className='buttons'>
              <div>
                Buscar Talento
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
                >dispponible</button>
                <button className='talents__button-custom'
                  onClick={() => handleClick("curriculum", "")}
                >hoja de vida</button>
              </div>
            </div>

            <div className='buttons'>
              <div>
                Front End
              </div>
            </div>

            <div className='buttons'>
              <div>
                Back End
              </div>
            </div>

            <div className='buttons'>
              <div>
                Full Stack
              </div>
            </div>
          </div>


          <div className='talents__container'>
            <div className='talents__container-imgTalent'
              onClick={() => handleClick("editImgProfile", "")}>
              <figure className='talents__card-figure'>
                <img src={imgTalent} alt="imgTalent" />
              </figure>
            </div>
            <div className='talents__container-info'>
              <div className='talents__container-state'>
                <button className='talents__card-icon'>
                  Disponible
                </button>
                <div className='talents__container-levelEnglish'>
                  <span className='talents__know'>Contactar</span>
                  {/* <span className='talents__know'>A1</span> */}
                </div>
              </div>
              <div className='talents__line'>
              <div className='talents__container-infoPnal'>
                <span className='talents__name'><strong>Elisabeth Cristina</strong></span>
                <span className='talents__lastName'><strong>Ospina Graciano</strong></span>
                <span className='talents__know'>Front end developer</span>


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
                  {/* <section className='talents__seccion-info'>
                    <div className='talents__container-links'>
                      <button className='talents__button-link'>
                        <NavLink><img src="" alt="git" /> </NavLink>
                        <NavLink><img src="" alt="link" /></NavLink>
                        <NavLink><img src="" alt="vid" /></NavLink>
                      </button>
                    </div>
                    <div className='talents__container-infoCustom'>
                      <div className='talents__container-infoContacts'>
                        <div className='talents__container-mail'>
                          <figure className='talents__iconMail'>
                            <img src="" alt="" />
                          </figure>
                          <span className='talents__infoContact'>elisabethospinag@gmail.com</span>
                        </div>
                        <div className='talents__container-mail'>
                          <figure className='talents__iconPhone'>
                            <img src="" alt="" />
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
                      {/* <div className='talents__container-profile'>
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
                      </div> */}
                    {/* </div> */} 
                  </section>
                </div>

              </div>
              </div>
              <br />

              <hr />

              <div className='contaniner_principal_search'>

                <div className='talentSearch'>

                  <div className='talents__container-search'
                    onClick={() => handleClick("editImgProfile", "")}>
                    <figure className='talents__card-figure'>
                      <img src={bg} alt="imgTalent" />
                    </figure>
                  </div>

                  <div className='talents__container-info-search'>
                    <div className='talents__container-state'>
                      <button className='talents__buttons-state'>
                        Disponible
                      </button>
                      <div className='talents__container-levelEnglish'>
                        <span className='talents__know'>Contactar</span>
                        {/* <span className='talents__know'>A1</span> */}
                      </div>
                    </div>
                    <div className='talents__line'></div>
                    <div className='talents__container-infoPnal'>
                      <span className='talents__name'><strong>Santiago David</strong></span>
                      <span className='talents__lastName'><strong>Gomez Pavas</strong></span>
                      <span className='talents__know'>Full Stack</span>
                    </div>
                  </div>


                </div >

                <div className='talentSearch'>

                  <div className='talents__container-search'
                    onClick={() => handleClick("editImgProfile", "")}>
                    <figure className='talents__card-figure'>
                      <img src={diana} alt="imgTalent" />
                    </figure>
                  </div>

                  <div className='talents__container-info-search'>
                    <div className='talents__container-state'>
                      <button className='talents__buttons-state'>
                        Disponible
                      </button>
                      <div className='talents__container-levelEnglish'>
                        <span className='talents__know'>Contactar</span>
                        {/* <span className='talents__know'>A1</span> */}
                      </div>
                    </div>
                    <div className='talents__line'></div>
                    <div className='talents__container-infoPnal'>
                      <span className='talents__name'><strong>Diana Alejandra</strong></span>
                      <span className='talents__lastName'><strong>Pinzón Solano</strong></span>
                      <span className='talents__know'>Front end developer</span>
                    </div>
                  </div>


                </div >

                <div className='talentSearch'>

                  <div className='talents__container-search'
                    onClick={() => handleClick("editImgProfile", "")}>
                    <figure className='talents__card-figure'>
                      <img src={Gesi} alt="imgTalent" />
                    </figure>
                  </div>

                  <div className='talents__container-info-search'>
                    <div className='talents__container-state'>
                      <button className='talents__buttons-state'>
                        Disponible
                      </button>
                      <div className='talents__container-levelEnglish'>
                        <span className='talents__know'>Contactar</span>
                        {/* <span className='talents__know'>A1</span> */}
                      </div>
                    </div>
                    <div className='talents__line'></div>
                    <div className='talents__container-infoPnal'>
                      <span className='talents__name'><strong>Gesiel Raquel</strong></span>
                      <span className='talents__lastName'><strong>Gimenez Perez</strong></span>
                      <span className='talents__know'>Front end developer</span>
                    </div>
                  </div>


                </div >
                <div className='talentSearch'>

                  <div className='talents__container-search'
                    onClick={() => handleClick("editImgProfile", "")}>
                    <figure className='talents__card-figure'>
                      <img src={bg} alt="imgTalent" />
                    </figure>
                  </div>

                  <div className='talents__container-info-search'>
                    <div className='talents__container-state'>
                      <button className='talents__buttons-state'>
                        Disponible
                      </button>
                      <div className='talents__container-levelEnglish'>
                        <span className='talents__know'>Contactar</span>
                        {/* <span className='talents__know'>A1</span> */}
                      </div>
                    </div>
                    <div className='talents__line'></div>
                    <div className='talents__container-infoPnal'>
                      <span className='talents__name'><strong>Diego Saul</strong></span>
                      <span className='talents__lastName'><strong>Meriño Cartagena</strong></span>
                      <span className='talents__know'>Front end developer</span>
                    </div>
                  </div>


                </div >



              </div >
            </div>
          </div>
        </section>

        <Outlet />
      
    </>
  )
}

export default Talent;