import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "./styleCardTalentCompany.scss";
import imgGitUp from "../../assets/logogithub.png";
import imgLinkedin from "../../assets/logolink.png";
import imgVideo from "../../assets/logovideo.png";
import imgPhone from "../../assets/celular.png";
import imgMail from "../../assets/correo.png";
import imgWhatsapp from "../../assets/whatsapp1.png"


const CardCompany = ({id}) => {
 
  const navigate = useNavigate();

  return (
    <>
        <section className="cardCompany">
        <div className="cardCompany__container">
          <div
            className="cardCompany__container-imgTalent"
            
          >
            <figure className="cardCompany__card-figure">
              <img src="" alt="imgTalent" />
            </figure>
          </div>
          <div className="cardCompany__container-info">
            <div className="cardCompany__container-state">
              <button
               
                className="cardCompany__buttons-edit"
              >
               <figure className='cardCompany__buttons-whatsapp'>
                                <img src={imgWhatsapp} alt="" />
              </figure>
              </button>
              
              <div className="cardCompany__container-levelEnglish">
                <span className="cardCompany__know">Ingles</span>
                <span className="cardCompany__know">A1</span>
              </div>
            </div>
            <div className="cardCompany__line"></div>
            <div className="cardCompany__container-infoPnal">
              <span className="cardCompany__name">
                              <strong>Elisabeth Cristina</strong>
              </span>
              <span className="cardCompany__lastName"> 
                <strong>Ospina Graciano</strong>
              </span>
            <span className="cardCompany__know">
              <strong>Front End</strong>
              </span>
            </div>
          </div>
          <section className="cardCompany__seccion-info">
            <div className="cardCompany__container-links">
              <button className="cardCompany__button-link">
                <NavLink to="{talento.githup}">
                  <figure className="cardCompany__figure-icons-gitUp">
                    <img src={imgGitUp} alt="git" />
                  </figure>
                </NavLink>
                <NavLink to="{talento.linkedIn}">
                  <figure className="cardCompany__figure-icons-linkedin">
                    <img src={imgLinkedin} alt="link" />
                  </figure>
                </NavLink>
                <NavLink to="{talento.video}">
                  <figure className="cardCompany__figure-icons-video">
                    <img src={imgVideo} alt="vid" />
                  </figure>
                </NavLink>
              </button>
            </div>
            <div className="cardCompany__container-infoCustom">
              <div className="cardCompany__container-infoContacts">
                <div className="cardCompany__container-mail">
                  <figure className="cardCompany__iconMail">
                    <img src={imgMail} alt="" />
                  </figure>
                  <span className="cardCompany__infoContact">
                  {/* {talento.email} */}
                  elisabethospinag@gmail.com
                  </span>
                </div>
                <div className="cardCompany__container-mail">
                  <figure className="cardCompany__iconPhone">
                    <img src={imgPhone} alt="" />
                  </figure>
                  <span className="cardCompany__infoContact">+57 3002791131</span>
                </div>
              </div>
              <div className="cardCompany__container-programs">
                {/* {
                  talento?.stacks?.map(item => 
                    <span className="cardCompany__programs" key={item}>{item}</span>
                  )
                } */}
                <span className="cardCompany__programs" >HTML</span>
                <span className="cardCompany__programs" >CSS</span>
                <span className="cardCompany__programs" >JAVA-SCRIPT</span>
                <span className="cardCompany__programs" >REACT</span>
                <span className="cardCompany__programs" >REDUX</span>
                <span className="cardCompany__programs" >BOOSTRAP</span>
                <span className="cardCompany__programs" >STYLE-COMPONENT</span>
              </div>
              <div className="cardCompany__container-profile">
                <h5 className="cardCompany__profile">
                Actualmente estudiante del Bootcamp Desarrollo front-end. Técnica Laboral Auxiliar en Desarrollo de Software, con conocimientos básicos en Html, Css, Sass, Java Script, Visual Studio Code, React y Boostrap. Con amplia experiencia en capacitación, coordinación y seguimiento de proyectos de desarrollo social en concertación con instituciones y entidades públicas, especialmente en procesos de contratación y gestión participativa; con habilidades para la formación, enseñanza y capacitación a ciudadanos y ciudadanas, organizaciones sociales y grupos de control social en materia participación ciudadana.
                </h5>
              </div>
            </div>
            <div className="cardCompany__container-EditProfile">
            </div>
            <div className="cardCompany__container-custom">
              <button
                className="cardCompany__button-custom"
                // onClick={() => handleClick("portfolio", "")}
              >
                Demoday
              </button>
              <button
                className="cardCompany__button-custom"
                // onClick={() => handleClick("curriculum", "")}
              >
                Hoja de vida
              </button>
            </div>
          </section>
        </div>
      </section>
      <Outlet />
    </>
  )
}

export default CardCompany