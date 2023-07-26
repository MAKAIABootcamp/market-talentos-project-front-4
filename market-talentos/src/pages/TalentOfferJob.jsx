import React, { useEffect, useState } from "react";
import "../style/styleTalentOfferJob.scss";
import { NavLink, useNavigate } from "react-router-dom";
import imgGitUp from "../assets/logogithub.png";
import imgLinkedin from "../assets/logolink.png";
import imgVideo from "../assets/logovideo.png";
import LayoutTalents from "../components/layout/LayoutTalents";
import Footer from "../components/footer/Footer";
import { listOfferJob } from "../redux/actions/offerJobActions";
import { useDispatch, useSelector } from "react-redux";
import { Timestamp } from "firebase/firestore";
import { getTalentFromTalentsCollection } from "../services/talentsServices";
import { addmyAplication } from "../redux/actions/talentAplicationActions";

const TalentOfferJob = ({ id }) => {
  const [talento, setTalent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const offerJobs = useSelector((state) => state.offerJob.offerJob);
  const { loggedUser } = useSelector((store) => store.user);

  useEffect(() => {
    dispatch(listOfferJob());
    console.log("user", loggedUser[0]);
  }, [dispatch]);

  useEffect(() => {
    async function fetchData() {
      console.log("Valor de id:", id);
      try {
        const talent = await getTalentFromTalentsCollection(id);
        console.log("talento", talent);
        setTalent(talent || {}); // Asignar un objeto vacío si talent es null o undefined
        setIsLoading(false);
      } catch (error) {
        console.error("Error al obtener el talento:", error);
        setIsLoading(false);
      }
    }
    fetchData();
  }, [id]);

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

  const handleApplicate = (offer) => {
    console.log("entré a aplicate");
    const talents = offer.talents || [];
    talents.push(loggedUser);
    const postulacion = {
      offerId: offer.id,
      talentId: loggedUser[0].id,
    };
    dispatch(addmyAplication(postulacion));
    // alert("aplicacion registrada correctamente")
    handleClosePopup();
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
          {!isLoading && talento && (
            <div className="talentOffer__container-cards">
              <div className="talentOffer__container-imgTalent">
                <figure className="talentOffer__card-fig">
                  <img src={talento.photoURL} alt="imgTalent" />
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
                    <strong>{talento.firstName}</strong>
                  </span>
                  <span className="talentOffer__lastName">
                    <strong>{talento.lastName}</strong>
                  </span>
                  <span className="talentOffer__know">{talento.rol}</span>
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

                <div>
                  <div className="talentOffer__container-otheroffert">
                    <button
                      className="talentOffer__button-otheroffert"
                      onClick={() => navigate("/jobTalent")}
                    >
                      Ver Mis Postulaciones
                    </button>
                  </div>

                  <div className="talentOffer__container-otheroffert">
                    <button
                      className="talentOffer__button-otheroffert"
                      onClick={() => navigate("/talentDetails")}
                    >
                      Ir a Perfil
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
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
              <div className="talentOffer__contenerdorpopup-close">
                <button
                  className="talentOffer__popup-close"
                  onClick={handleClosePopup}
                >
                  X
                </button>
              </div>
              <button className="talentOffer__button-offer">
                Fecha cierre de convocatoria:{" "}
                {formatTimestamp(selectedOfferJob.closeDate)}
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
              <button
                className="talentOffer__button-talentOffer"
                onClick={() => handleApplicate(selectedOfferJob)}
              >
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
