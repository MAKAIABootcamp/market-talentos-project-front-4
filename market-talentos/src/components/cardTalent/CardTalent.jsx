import React from "react";
import { useSelector} from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import useOnClick from "../../funtions/useOnClick";
import "./styleCardTalent.scss";
import imgGitUp from "../../assets/logogithub.png";
import imgLinkedin from "../../assets/logolink.png";
import imgVideo from "../../assets/logovideo.png";
import imgPhone from "../../assets/celular.png";
import imgMail from "../../assets/correo.png";
// import imgWhatsapp from '../../assets/whatsapp.png';

const CardTalent = () => {
  const handleClick = useOnClick();
 
  const talentosEncontrados = useSelector((store) => store.userTalents);
  console.log("cardTalent tE", talentosEncontrados);
  const { user } = useSelector((state) => state.user);
  console.log("user",user);

  const findTalents = talentosEncontrados.userTalents.find(talento => talento.id === user.id);
  console.log("findTalents", findTalents);


const userStore = useSelector((store) => store.user.user);
console.log("esta es a info de userStore", userStore);

  return (
    
    <>
      <section className="cardTalents">
           
        <div className="cardTalents__container">
          <div
            className="cardTalents__container-imgTalent"
            onClick={() => handleClick("editImgProfile", "")}
          >
            <figure className="cardTalents__card-figure">
              <img src={userStore?userStore.phothoURL:""} alt="imgTalent" />
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
                <span className="cardTalents__know">A1</span>
              </div>
            </div>
            <div className="cardTalents__line"></div>
            <div className="cardTalents__container-infoPnal">
              <span className="cardTalents__name">
                              <strong>{userStore?userStore.firstName:""}</strong>
              </span>
              <span className="cardTalents__lastName">
                <strong>{userStore?userStore.lastName:""}</strong>
              </span>
            <span className="cardTalents__know">
              <strong>Front End</strong>
              </span>
            </div>
          </div>
          <section className="cardTalents__seccion-info">
            <div className="cardTalents__container-links">
              <button className="cardTalents__button-link">
                <NavLink to="">
                  <figure className="cardTalents__figure-icons-gitUp">
                    <img src={imgGitUp} alt="git" />
                  </figure>
                </NavLink>
                <NavLink>
                  <figure className="cardTalents__figure-icons-linkedin">
                    <img src={imgLinkedin} alt="link" />
                  </figure>
                </NavLink>
                <NavLink>
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
                  {userStore?userStore.email:""}
                  </span>
                </div>
                <div className="cardTalents__container-mail">
                  <figure className="cardTalents__iconPhone">
                    <img src={imgPhone} alt="" />
                  </figure>
                  <span className="cardTalents__infoContact">+57 3002791131</span>
                </div>
              </div>
              <div className="cardTalents__container-programs">
                <span className="cardTalents__programs">HTML</span>
                <span className="cardTalents__programs">CSS</span>
                <span className="cardTalents__programs">JAVA_SCRIPT</span>
                <span className="cardTalents__programs">SASS</span>
                <span className="cardTalents__programs">REACT</span>
                <span className="cardTalents__programs">BOOBSTRAP</span>

                <span className="cardTalents__programs">GIT_UP</span>
              </div>
              <div className="cardTalents__container-profile">
                <h5 className="cardTalents__profile">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, cum, quis veniam dicta, ducimus sint necessitatibus recusandae velit ipsum maxime repellendus doloremque voluptatibus corporis laborum. Praesentium vel obcaecati atque quas.
                </h5>
              </div>
            </div>
            <div className="cardTalents__container-EditProfile">
              <button 
              onClick={() => handleClick("formStudies", "")}
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
                hoja de vida
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
