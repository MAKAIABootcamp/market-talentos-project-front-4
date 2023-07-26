import React, { useState, useEffect } from "react";
import { useSelector} from "react-redux";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import useOnClick from "../../funtions/useOnClick";
import "./styleCardTalent.scss";
import imgGitUp from "../../assets/logogithub.png";
import imgLinkedin from "../../assets/logolink.png";
import imgVideo from "../../assets/logovideo.png";
import imgPhone from "../../assets/celular.png";
import imgMail from "../../assets/correo.png";
import { getTalentLoggued } from "../../services/talentsServices";

const CardTalent = ({id}) => {
  const [talento, setTalent] = useState("")
  
  const navigate = useNavigate();
  useEffect(()=>{      
    async function fetchData() {
      const talent = await getTalentLoggued(id);
      console.log("talento", talent)
      setTalent(talent)
    }
    fetchData();
    
  }, [])

  useEffect(()=>{

    console.log("cadtalent talento", talento);
  }, [talento] )
  
  const handleClick = (params) => {
    console.log(params)
  }

  return (
    
    <>
      <section className="cardTalents">
        <div className="cardTalents__container">
          <div
            className="cardTalents__container-imgTalent"
            onClick={() => handleClick("editImgProfile", "")}
          >
            <figure className="cardTalents__card-figure">
              <img src={talento.photoURL} alt="imgTalent" />
            </figure>
          </div>
          <div className="cardTalents__container-info">
            <div className="cardTalents__container-state">
              <button
                onClick={() => handleClick("editProfile", "")}
                className="cardTalents__buttons-edit"
              >
                Editar{" "}
              </button>
              {/* <figure className='cardTalents__buttons-state'>
                                <img src={imgWhatsapp} alt="" />
                            </figure> */}
              <div className="cardTalents__container-levelEnglish">
                <span className="cardTalents__know">Ingles</span>
                <span className="cardTalents__know">{talento.englishLevel}</span>
              </div>
            </div>
            <div className="cardTalents__line"></div>
            <div className="cardTalents__container-infoPnal">
              <span className="cardTalents__name">
                              <strong>{talento.firstName}</strong>
              </span>
              <span className="cardTalents__lastName"> 
                <strong>{talento.lastName}</strong>
              </span>
            <span className="cardTalents__know">
              <strong>{talento.rol}</strong>
              </span>
            </div>
          </div>
          <section className="cardTalents__seccion-info">
            <div className="cardTalents__container-links">
              <button className="cardTalents__button-link">
                <NavLink to={talento.githup}>
                  <figure className="cardTalents__figure-icons-gitUp">
                    <img src={imgGitUp} alt="git" />
                  </figure>
                </NavLink>
                <NavLink to={talento.linkedIn}>
                  <figure className="cardTalents__figure-icons-linkedin">
                    <img src={imgLinkedin} alt="link" />
                  </figure>
                </NavLink>
                <NavLink to={talento.video}>
                  <figure className="cardTalents__figure-icons-video">
                    <img src={imgVideo} alt="vid" />
                  </figure>
                </NavLink>
              </button>
            </div>
            <div className="cardTalents__container-infoCustom">
              <div className="cardTalents__container-infoContacts">
                <div className="cardTalents__container-mail">
                  <figure className="cardTalents__iconMail">
                    <img src={imgMail} alt="" />
                  </figure>
                  <span className="cardTalents__infoContact">
                  {talento.email}
                  </span>
                </div>
                <div className="cardTalents__container-mail">
                  <figure className="cardTalents__iconPhone">
                    <img src={imgPhone} alt="" />
                  </figure>
                  <span className="cardTalents__infoContact">+57 {talento.phone}</span>
                </div>
              </div>
              <div className="cardTalents__container-programs">
                {
                  talento?.stacks?.map(item => 
                    <span className="cardTalents__programs" key={item}>{item}</span>
                  )
                }
              </div>
              <div className="cardTalents__container-profile">
                <h5 className="cardTalents__profile">
                  {talento.profile}
                </h5>
              </div>
            </div>
            <div className="cardTalents__container-EditProfile">
              <button 
              onClick={() => navigate('/editProfile/'+talento.id)}
              className="cardTalents__button-EditProfile">
                Editar Información
              </button>
            </div>
            <div className="cardTalents__container-custom">
              <button
                className="cardTalents__button-custom"
                onClick={() => handleClick("portfolio", "")}
              >
                Demoday
              </button>
              <button
                className="cardTalents__button-custom"
                onClick={() => handleClick("curriculum", "")}
              >
                Hoja de vida
              </button>
            </div>
          </section>
        </div>
      </section>
      <Outlet />
    </>
  );
};

export default CardTalent;