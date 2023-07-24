import React from "react";
import "../style/styleTalentOfferJob.scss";
import { NavLink, useNavigate } from "react-router-dom";
import imgTalent from "../assets/elisa.jpeg";
import imgGitUp from "../assets/logogithub.png";
import imgLinkedin from "../assets/logolink.png";
import imgVideo from "../assets/logovideo.png";
import LayoutTalents from "../components/layout/LayoutTalents";
import Footer from "../components/footer/Footer";
import { useDispatch, useSelector } from "react-redux";
// import logoMakaia from "../assets/icon/logoMakaia.png";
// import fondoTalentdesk from "../assets/fondotalentdesk.jpg";

const TalentOfferJob = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const listaOfertas = useSelector((store) => store.offerJob);
  console.log(listaOfertas, "listaOfertas");

  useEffect(() => {
    dispatch(listOfferJob());
  }, [dispatch]);

  const jobsButtons = [
    {
      id: 1,
      name: "Magenta Developer",
      cargo: "FrontEnd",
      changeStatus: "Más Información",
    },
    {
      id: 2,
      name: "Soluciones web S.A",
      cargo: "BackEnd",
      changeStatus: "Más Información",
    },
    {
      id: 3,
      name: "Desing Red",
      cargo: "FullStack",
      changeStatus: "Más Información",
    },
    {
      id: 4,
      name: "Develop Juniors",
      cargo: "BackEnd ",
      changeStatus: "Más Información",
    },
    {
      id: 5,
      name: "Ingeniers web",
      cargo: "FrontEnd ",
      changeStatus: "Más Información",
    },
  ];

  return (
    <section className="talentOffer">
      <LayoutTalents />
      <div className="talentOffer__card-jobs">
      <div className="talentOffer__container">
        {/* <div className="talentOffer__background">
          <img src={fondoTalentdesk} alt="fondoTalentdesk" />
        </div> */}

        {/* ...........cards talento................ */}
        <div className="talentOffer__container-cards">
          <div className="talentOffer__container-imgTalent">
            <figure className="talentOffer__card-fig">
              <img src={imgTalent} alt="imgTalent" />
            </figure>
          </div>
          <div className="talentOffer__container-info">
            <div className="talentOffer__container-state">
              <div className="talentOffer__container-programs">
                <span className="talentOffer__programs">HTML</span>
                <span className="talentOffer__programs">CSS</span>
              </div>
            </div>
            <div className="talentOffer__line"></div>
            <div className="talentOffer__container-infoPnal">
              <span className="talentOffer__name">
                <strong>Elisabeth Cristina</strong>
              </span>
              <span className="talentOffer__lastName">
                <strong>Ospina Graciano</strong>
              </span>
              <span className="talentOffer__know">FrontEnd developer</span>
            </div>
          </div>

          <div className="talentOffer__container-infoContacts">
            <div className="talentOffer__container-links">
              <button className="talentOffer__button-link">
                <NavLink>
                  <figure className="talentOffer__figure-icons-gitUp">
                    <img src={imgGitUp} alt="git" />
                  </figure>
                </NavLink>
                <NavLink>
                  <figure className="talentOffer__figure-icons-linkedin">
                    <img src={imgLinkedin} alt="link" />
                  </figure>
                </NavLink>
                <NavLink>
                  <figure className="talentOffer__figure-icons-video">
                    <img src={imgVideo} alt="vid" />
                  </figure>
                </NavLink>
              </button>
            </div>

            <div className="talentOffer__container-otheroffert">
              <button
                className="talentOffer__button-otheroffert"
                onClick={() => navigate("/jobTalent")}
              >
                Ver Mis Postulaciones
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ...........cards Ofertas laborales................ */}

      <div className="talentOffer__container-offert">
        <div className="talentOffer__container-infojob">
          <button className="talentOffer__button-otherjobs">
            Ofertas Laborales
          </button>

          <div className="talentOffer__container-jobs">
            
            {jobsButtons.map((button, index) => (
              <button className="talentOffer__button-costumer" key={index}>
                {button.name}
                <div className="talentOffer__div-costumer">
                <span className="talentOffer__button-job">{button.cargo}</span>
                <span className="talentOffer__button-changeinfo">
                  {button.changeStatus}
                </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="talentOffer__aplicattionJob">
          <button className="talentOffer__button-offer">
            Fecha cierre de convocatoria: 24/julio/2023
          </button>
          <button className="talentOffer__button-offer">
            Cargo: Front End Developer Junior
          </button>
          <button className="talentOffer__button-requ">
            Requerimientos: Desarrollar la parte visual de la aplicación web
            Diseñar interfaces con foco en UX/UI Conectar interfaces con los
            servicios de backend Brindar soporte al software de producción
          </button>
          <button className="talentOffer__button-offer">
            Modalidad Presencial
          </button>
          <button className="talentOffer__button-offer">
            Salario: 2´000.000
          </button>
          <button className="talentOffer__button-offer">
            Ciudad: Medellín
          </button>
          <button className="talentOffer__button-talentOffer">Aplicar</button>
        </div>
      </div>
      </div>
      <div><Footer /></div>
    </section>
  );
};
//cambio pequeño//
export default TalentOfferJob;
