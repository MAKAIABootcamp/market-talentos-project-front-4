import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import "../style/styleEditProfile.scss";
import imgTalent from "../assets/elisa.jpeg";
import { useFormik } from "formik";
import * as Yup from "yup";
import useOnClick from "../funtions/useOnClick";
import imageFond from "../assets/EditProfileFondo.jpg";
import NavbarTalentos from "../components/navbarTalentos/NavbarTalentos";
import Footer from "../components/footer/Footer";

const EditProfile = () => {

  // const dispatch = useDispatch();

  // const {user} = useSelector(state => state.user);
  // console.log(user);

  const validationSchema = Yup.object().shape({
    inputGitUp: Yup.string()
      .url("Ingresa un enlace válido. Ejemplo: https://github.com/tuusuario")
      .required("Este campo es obligatorio"),
    inputlinkedin: Yup.string()
      .url(
        "Ingresa un enlace válido. Ejemplo: https://www.linkedin.com/in/tuusuario"
      )
      .required("Este campo es obligatorio"),
    profile: Yup.string()
      .max(160, "La presentación no debe exceder las 160 palabras.")
      .required("Este campo es obligatorio"),
    cv: Yup.mixed()
      .test("fileType", "Solo se permiten archivos PDF", (value) => {
        if (value) {
          return value && ["application/pdf"].includes(value.type);
        }
        return true;
      })
      .required("Este campo es obligatorio"),
    video: Yup.mixed()
      .test("fileType", "Solo se permiten archivos de video", (value) => {
        if (value) {
          return value && value.type.includes("video/");
        }
        return true;
      })
      .required("Este campo es obligatorio"),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  const handleClick = useOnClick();

  const formik = useFormik({
    initialValues: {
      inputGitUp: "",
      inputlinkedin: "",
      knowledge: false,
      profile: "",
      languages: [],
      otherLanguages: "",
    },
    validationSchema,
    onSubmit: handleSubmit,
  });

  const languageOptions = [
    { id: "css", label: "CSS" },
    { id: "sass", label: "SASS" },
    { id: "react", label: "REACT" },
    { id: "javaScript", label: "JavaScript" },
    { id: "html", label: "HTML" },
    { id: "styledComponent", label: "GITHUB" },
    { id: "redux", label: "REDUX" },
    { id: "bootstrap", label: "BOOPTRAP" },
    { id: "axios", label: "AXIOS" },
    { id: "others", label: "Otros" },
  ];

  const isFormValid =
    Object.keys(formik.errors).length === 0 &&
    Object.keys(formik.touched).length !== 0;

  return (
    <>
    <div className="editProfile">
    <NavbarTalentos/>
      <section className="editProfile__section">

        <div className="editProfile__container">
          <div className="editProfile__background">
            <img src={imageFond} alt="imageFond" />
          </div>
          <section className="editProfile__seccion-info">
            <div className="editProfile__container-title">
              <button className="editProfile__button-title">
                Completa tu información
              </button>
            </div>
            <div className="editProfile__container-infoCustom">
              <div className="editProfile__container-infoContacts">
                <div
                  className="editProfile__container-imgTalent"
                  onClick={() => handleClick("editImgProfile", "")}
                >
                  <figure className="editProfile__card-figure">
                    <img src={imgTalent} alt="imgTalent" />
                  </figure>
                </div>
              </div>
              <form
                className="editProfile__container-form"
                onSubmit={formik.handleSubmit}
              >
                <div className="editProfile__container-profile">
                  <input
                    type="url"
                    name="inputGitUp"
                    id="inputGithub"
                    className="editProfile__input"
                    placeholder="Ingresa el vínculo de tu cuenta en Github"
                    value={formik.values.inputGitUp}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.inputGitUp && formik.touched.inputGitUp && (
                    <div className="editProfile__error-message">
                      {formik.errors.inputGitUp}
                    </div>
                  )}
                </div>
                <div className="editProfile__container-profile">
                  <input
                    type="url"
                    name="inputlinkedin"
                    id="inputlinkedin"
                    className="editProfile__input"
                    placeholder="Ingresa el vínculo de tu cuenta en Linkedin"
                    value={formik.values.inputlinkedin}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.inputlinkedin &&
                    formik.touched.inputlinkedin && (
                      <div className="editProfile__error-message">
                        {formik.errors.inputlinkedin}
                      </div>
                    )}
                </div>
                <div className="editProfile__knowLedge">
                  <div> Conocimientos</div>

                  <div className="editProfile__languages">
                    {languageOptions.map((option) => (
                      <div key={option.id} className="editProfile__language">
                        <input
                          type="checkbox"
                          id={option.id}
                          name="languages"
                          value={option.id}
                          checked={formik.values.languages.includes(option.id)}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        <label htmlFor={option.id}>{option.label}</label>
                      </div>
                    ))}

                    <div className="editProfile__language">
                      <input
                        type="text"
                        id="otherLanguages"
                        name="otherLanguages"
                        value={formik.values.otherLanguages}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Escribe otro lenguaje"
                      />
                    </div>
                  </div>

                  {formik.errors.knowledge && formik.touched.knowledge && (
                    <div className="editProfile__error-message">
                      {formik.errors.knowledge}
                    </div>
                  )}

                  {formik.errors.otherLanguages &&
                    formik.touched.otherLanguages && (
                      <div className="editProfile__error-message">
                        {formik.errors.otherLanguages}
                      </div>
                    )}
                </div>
                <div className="editProfile__container-custom">
                  <label
                    htmlFor="profile"
                    className="editProfile__profile-label"
                  ></label>
                  <textarea
                    name="profile"
                    className="editProfile__input-profile"
                    id="profile"
                    placeholder="Escribe aquí tu presentación...160 palabras máximo"
                    value={formik.values.profile}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.profile && formik.touched.profile && (
                    <div className="editProfile__error-message">
                      {formik.errors.profile}
                    </div>
                  )}
                </div>

                <div className="editProfile__container-up">
                  <label htmlFor="cv" className="editProfile__label">
                    Hoja de Vida (PDF):
                    <input
                      type="file"
                      id="cv"
                      name="cv"
                      accept="application/pdf"
                      onChange={(event) =>
                        formik.setFieldValue("cv", event.currentTarget.files[0])
                      }
                      className="editProfile__input-file"
                    />
                  </label>
                  {formik.errors.cv && formik.touched.cv && (
                    <div className="editProfile__error-message">
                      {formik.errors.cv}
                    </div>
                  )}
                </div>
                <div className="editProfile__container-up">
                  <label htmlFor="video" className="editProfile__label">
                    Video:
                  
                  <input
                    type="file"
                    id="video"
                    name="video"
                    accept="video/*"
                    onChange={(event) =>
                      formik.setFieldValue(
                        "video",
                        event.currentTarget.files[0]
                      )
                    }
                    className="editProfile__input-file"
                  />
                  {formik.errors.video && formik.touched.video && (
                    <div className="editProfile__error-message">
                      {formik.errors.video}
                    </div>
                  )}
                  </label>
                </div>

                <div className="editProfile__container-custom">
                  <button
                    className="editProfile__button"
                    type="submit"
                    disabled={!isFormValid}
                  >
                    Guardar
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
        
      </section>
      <Footer />
      </div>
    </>
  );
};

export default EditProfile;
