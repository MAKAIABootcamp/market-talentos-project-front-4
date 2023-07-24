import React, { useEffect, useState } from "react";
import "../style/styleTalentOfferJob.scss";
import { NavLink, useNavigate } from "react-router-dom";
import imgTalent from "../assets/elisa.jpeg";
import imgGitUp from "../assets/logogithub.png";
import imgLinkedin from "../assets/logolink.png";
import imgVideo from "../assets/logovideo.png";
import LayoutTalents from "../components/layout/LayoutTalents";
import Footer from "../components/footer/Footer";
import { listOfferJob } from "../redux/actions/offerJobActions";
import { useDispatch, useSelector } from "react-redux";
import { Timestamp } from "firebase/firestore";
// import logoMakaia from "../assets/icon/logoMakaia.png";
// import fondoTalentdesk from "../assets/fondotalentdesk.jpg";

const TalentOfferJob = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const offerJobs = useSelector((state) => state.offerJob.offerJob);

  useEffect(() => {
    dispatch(listOfferJob());
  }, [dispatch]);

const [selectedOfferJob, setSelectedOfferJob] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleShowApplicationJob = (offerJob) => {
    setSelectedOfferJob(offerJob);
    setIsPopupOpen(true);
  };
  const formatTimestamp = (timestamp) => {
    if (timestamp instanceof Timestamp) {
      // Convertir el objeto Timestamp de Firebase a una fecha legible
      const date = timestamp.toDate();
      return date.toLocaleDateString("es-ES", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    }
    return "";
  };
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

 
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
              {offerJobs.map((offerJob) => (
                <button
                  className="talentOffer__button-costumer"
                  key={offerJob.id}
                  onClick={() => handleShowApplicationJob(offerJob)}
                >
                  {offerJob.empresa}
                  <div className="talentOffer__div-costumer">
                    <span className="talentOffer__button-job">
                      {offerJob.cargo}
                    </span>
                    <span className="talentOffer__button-changeinfo">
                      Más Información
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
          
           {/* Ventana emergente */}

          {isPopupOpen && selectedOfferJob && (
            <div className="talentOffer__aplicattionJob">
                <button className="talentOffer__popup-close" onClick={handleClosePopup}>
                X
              </button>
              <button className="talentOffer__button-offer">
              Fecha cierre de convocatoria: {formatTimestamp(selectedOfferJob.closeDate)}
              </button>
              <button className="talentOffer__button-offer">
                Cargo: {selectedOfferJob.cargo}
              </button>
              <button className="talentOffer__button-requ">
                Requerimientos: {selectedOfferJob.description}
              </button>
              <button className="talentOffer__button-offer">
                Modalidad: {selectedOfferJob.modalidad}
              </button>
              <button className="talentOffer__button-offer">
                Salario: {selectedOfferJob.salary}
              </button>
              <button className="talentOffer__button-offer">
                Ciudad: {selectedOfferJob.ciudad}
              </button>
              <button className="talentOffer__button-talentOffer">
                Aplicar
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default TalentOfferJob;