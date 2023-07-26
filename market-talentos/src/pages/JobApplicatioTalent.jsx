import React, { useEffect, useState } from "react";
import "../style/styleJobApplicatioTalent.scss";
// import imgTalent from "../assets/elisa.jpeg";
import { NavLink, useNavigate } from "react-router-dom";
import imgGitUp from "../assets/logogithub.png";
import imgLinkedin from "../assets/logolink.png";
import imgVideo from "../assets/logovideo.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import Footer from "../components/footer/Footer";
import LayoutTalents from "../components/layout/LayoutTalents";
import { addmyAplication } from "../redux/actions/talentAplicationActions";
import { useDispatch, useSelector } from "react-redux";
import {
  //getApplicationsAsync,
  getApplicationsUserAsync,
} from "../redux/actions/applicationActions";
import { listOfferJob } from "../redux/actions/offerJobActions";


const JobApplicatioTalent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  //const [myApplications, setMyApplications] = useState([]);
  //const [myOffers, setMyOffers] = useState([]);
  //const { applications } = useSelector((store) => store.applications);
  const {offerJob} = useSelector((state) => state.offerJob);
  const { loggedUser } = useSelector((store) => store.user);
  const { applications } = useSelector((store) => store.applications);
  console.log(loggedUser[0]);
  console.log(applications);

  
  const validationSchema = Yup.object().shape({
    cargo: Yup.string().required("Este campo es obligatorio"),
    closeDate: Yup.date().required("Este campo es obligatorio"),
    description: Yup.string().required("Este campo es obligatorio"),
    empresa: Yup.string().required("Este campo es obligatorio"),
    modalidad: Yup.string().required("Este campo es obligatorio"),
    salary: Yup.string().required("Este campo es obligatorio"),
    offerLink: Yup.string().required('Campo requerido').url('El enlace no es válido'),
  });

  useEffect(() => {
    //dispatch(getApplicationsAsync());
    dispatch(getApplicationsUserAsync(loggedUser[0].id));
    dispatch(listOfferJob());
  }, [dispatch, loggedUser]);

  // useEffect(() => {
  //   const myapps = applications.filter(
  //     (item) => item.talentId === loggedUser[0].id
  //   );
  //   setMyApplications(myapps);
  // }, [applications, loggedUser]);

  // const [myoffersTalent, setyoffersTalent]= useState({});

  // useEffect(()=>{
  //   const myoffers = [];
  //   for (let index = 0; index < myApplications.length; index++) {
  //     myoffers.push(offerJobList.offerJob.find(item => item.id === myApplications[index].offerId))      
  //   }
  //   setMyOffers(myoffers)
  //   console.log("postulaciones", myoffers)
  // },[offerJobList, myApplications])

  const handleSubmit = async (values) => {
    const newAplication = {
      talentId: loggedUser[0].id,
      offerId: "NA",
      cargo: values.cargo,
      closeDate: values.closeDate,
      description: values.description,
      empresa: values.empresa,
      modalidad: values.modalidad,
      salary: values.salary,
      offerLink: values.offerLink,
    };
    //console.log("nueva aplicación", values, newAplication);

    dispatch(addmyAplication(newAplication));
  };

  const formik = useFormik({
    initialValues: {
      cargo: "",
      closeDate: "",
      description: "",
      empresa: "",
      modalidad: "",
      salary: "",
      offerLink: '',
    },
    validationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
  });


  const handleAddPostulaciones = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <section className="jobtalent">
        <div className="jobtalent__layout">
          <LayoutTalents />
        </div>
        <section className="jobtalent__card-jobs">
          <div className="jobtalent__container">
            {/* ...........cards talento................ */}
            <div className="jobtalent__container-cards">
              <div className="jobtalent__container-imgTalent">
                <figure className="jobtalent__card-fig">
                  <img src={loggedUser[0].photoURL} alt="imgTalent" />
                </figure>
              </div>
              <div className="jobtalent__container-info">
                <div className="jobtalent__container-state">
                  <div className="jobtalent__container-programs">
                    <span className="jobtalent__programs">HTML</span>
                    <span className="jobtalent__programs">CSS</span>
                  </div>
                </div>
                <div className="jobtalent__line"></div>
                <div className="jobtalent__container-infoPnal">
                  <span className="jobtalent__name">
                    <strong>{loggedUser[0].firstName}</strong>
                  </span>
                  <span className="jobtalent__lastName">
                    <strong>{loggedUser[0].lastName}</strong>
                  </span>
                  <span className="jobtalent__know"></span>
                </div>
              </div>

              <div className="jobtalent__container-infoContacts">
                <div className="jobtalent__container-links">
                  <button className="jobtalent__button-link">
                    <NavLink>
                      <figure className="jobtalent__figure-icons-gitUp">
                        <img src={imgGitUp} alt="git" />
                      </figure>
                    </NavLink>
                    <NavLink>
                      <figure className="jobtalent__figure-icons-linkedin">
                        <img src={imgLinkedin} alt="link" />
                      </figure>
                    </NavLink>
                    <NavLink>
                      <figure className="jobtalent__figure-icons-video">
                        <img src={imgVideo} alt="vid" />
                      </figure>
                    </NavLink>
                  </button>
                </div>

                <div className="jobtalent__container-addpstulation">
                  <button
                    className="jobtalent__button-otheroffertjobs"
                    onClick={() => navigate("/talentOfferJob")}
                  >
                    {/* onClick={() => navigate(`/talentOfferJob/${id}`)} */}
                    Ver Ofertas Laborales
                  </button>
                  <button
                    className="jobtalent__button-otherjobs"
                    onClick={handleAddPostulaciones}
                  >
                    Añadir Postulaciones
                  </button>
                  {showForm && (
                    <div className="jobtalent__container-other">
                      <form onSubmit={formik.handleSubmit}>
                        <input
                          className="jobtalent__button-other"
                          type="text"
                          id="cargo"
                          name="cargo"
                          value={formik.values.cargo}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          placeholder="Cargo"
                        />
                        {formik.errors.cargo && formik.touched.cargo && (
                          <div className="jobtalent__error-message">
                            {formik.errors.cargo}
                          </div>
                        )}

                        <input
                          className="jobtalent__button-other"
                          type="date"
                          id="closeDate"
                          name="closeDate"
                          value={formik.values.closeDate}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          placeholder="Fecha de cierre"
                        />
                        {formik.errors.closeDate &&
                          formik.touched.closeDate && (
                            <div className="jobtalent__error-message">
                              {formik.errors.closeDate}
                            </div>
                          )}

                        <input
                          className="jobtalent__button-other"
                          type="text"
                          id="description"
                          name="description"
                          value={formik.values.description}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          placeholder="Descripción"
                        />
                        {formik.errors.description &&
                          formik.touched.description && (
                            <div className="jobtalent__error-message">
                              {formik.errors.description}
                            </div>
                          )}

                        <input
                          className="jobtalent__button-other"
                          type="text"
                          id="empresa"
                          name="empresa"
                          value={formik.values.empresa}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          placeholder="Empresa"
                        />
                        {formik.errors.empresa && formik.touched.empresa && (
                          <div className="jobtalent__error-message">
                            {formik.errors.empresa}
                          </div>
                        )}

                        <input
                          className="jobtalent__button-other"
                          type="text"
                          id="modalidad"
                          name="modalidad"
                          value={formik.values.modalidad}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          placeholder="Modalidad"
                        />
                        {formik.errors.modalidad &&
                          formik.touched.modalidad && (
                            <div className="jobtalent__error-message">
                              {formik.errors.modalidad}
                            </div>
                          )}

                        <input
                          className="jobtalent__button-other"
                          type="text"
                          id="salary"
                          name="salary"
                          value={formik.values.salary}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          placeholder="Salario"
                        />
                        {formik.errors.salary && formik.touched.salary && (
                          <div className="jobtalent__error-message">
                            {formik.errors.salary}
                          </div>
                        )}

                        <input
                          className="jobtalent__button-other"
                          type="text"
                          id="offerLink"
                          name="offerLink"
                          value={formik.values.offerLink}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          placeholder="Enlace de la oferta"
                        />
                        {formik.errors.offerLink &&
                          formik.touched.offerLink && (
                            <div className="jobtalent__error-message">
                              {formik.errors.offerLink}
                            </div>
                          )}

                        <button
                          className="jobtalent__button-aceptar"
                          type="submit"
                        >
                          Aceptar
                        </button>
                      </form>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* ...........cards Mis postulaciones................ */}
          <div className="jobtalent__container-infojob">
            <button className="jobtalent__button-infojob">
              Mis Postulaciones
            </button>
            <div className="jobtalent__container-costumer">
              {applications.length &&
                applications.map((button, index) => (
                  <button className="jobtalent__button-costumer" key={index}>
                    {button.empresa}

                    <span className="jobtalent__button-status">
                      {button.cargo}
                    </span>

                    <span className="jobtalent__button-changeStatus">
                      {button.salary}
                    </span>
                   </button>
                ))}
            </div>
          </div>
        </section>

        <Footer />
      </section>
    </>
  );
};

export default JobApplicatioTalent;
