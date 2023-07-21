import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../style/styleEditProfile.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import imageFond from "../assets/EditProfileFondo.jpg";
// import Footer from "../components/footer/Footer";
import {
  completeProfileAsync,
  singOutAsync,
} from "../redux/actions/usersActions";
import Swal from "sweetalert2";
import { redirect, useNavigate } from "react-router-dom";
import LayoutTalents from "../components/layout/LayoutTalents"; import { languageOptions } from "../services/dates";
import { Spinner } from "react-bootstrap";
import { doc, getDoc } from "firebase/firestore";
import { dataBase } from "../firebase/firebaseConfig";
import { listTalents } from "../redux/actions/userActions";
import { debugErrorMap } from "firebase/auth";
import fileUpLoad from "../services/fileUpload";
import videoUpLoad from "../services/videoUpload";


const EditProfile = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  const talentosEncontrados = useSelector((store) => store.userTalents);
  console.log("talentosEncontrados", talentosEncontrados);
  const { user } = useSelector((state) => state.user);
  console.log("user",user);

  const findTalents = talentosEncontrados.userTalents.find(talento => talento.id === user.id);
  console.log("findTalents", findTalents);
 
  useEffect(() => {
    dispatch(listTalents())
        
    setTimeout(() => {
      if (user?.validateUser==false) {
        navigate("/")
        
       } else {
        
       }
     
    
      setIsLoading(false);
    }, 2000); 

    
    
  
  }, [dispatch])

  
  // const usuarioEncontrado = user.map((user) => {
  //   if (user?.uid) {
  //       return user;
  //   } else {
  //     console.log("usuario no encontrado");
  //   }
  // })
//   const talentsList = useSelector((store) => store.userTalents);

//   useEffect(() => {
//     dispatch(listTalents())
// }, [dispatch]);

  // console.log("todos talent", talentsList);

  // talentsList.map(talent  => talent.id)
  
const buscarDocumento = async (talentoID) => {
  try {
    const docRef = doc(dataBase, "talentos", talentoID); // "talentos" es el nombre de la colección
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // El documento existe, puedes acceder a los datos utilizando docSnap.data()
      const datosTalento = docSnap.data();
      console.log("Datos del talento:", datosTalento);
      if (Object.entries(datosTalento).length > 0) {
        

        console.log("hay datosTalento",datosTalento);
        // setTalento(datosTalento)
      }
      // console.log(talento);
      
    } else {
      console.log("El documento no existe.");
     
    }
  } catch (error) {
    console.error("Error al buscar el documento:", error);
  
  }
};

  const validationSchema = Yup.object().shape({
    github: Yup.string()
      .url("Ingresa un enlace válido. Ejemplo: https://github.com/tuusuario")
      .required("Este campo es obligatorio"),
    linkedIn: Yup.string()
      .url(
        "Ingresa un enlace válido. Ejemplo: https://www.linkedin.com/in/tuusuario"
      )
      .required("Este campo es obligatorio"),
    profile: Yup.string()
      .max(160, "La presentación no debe exceder las 400 palabras.")
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

  const handleSubmit = async (values) => {
    console.log(values);
    const cvURL = await fileUpLoad(values.cv);
    const videoURL = await videoUpLoad(values.video);

    const newTalent = {
      github: values.github,
      linkedIn: values.linkedIn,
      stacks: [...values.stacks, values.otherLanguages?? ""],
      profile: values.profile,
      curriculum: cvURL,
      video: videoURL,
      displayName:user.displayName,
      idUsuario: user.uid,
      rol: user.rol,
      cohorte: user.cohorte,
      firstName:user.firstName,
      lastName:user.lastName,
      type: user.type,
    };
    console.log(user,user.displayName,newTalent,"neuvoalneto");
    dispatch(
      completeProfileAsync(newTalent, user.type)
    )
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Información guardada exitosamente",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          // Redireccionar a la página de edición de perfil
          // Reemplaza '/editProfile' con la ruta correcta si es necesario
         
          navigate(`/talentDetails`);
        });
      })
      .catch((error) => {
        // Manejar errores en caso de que ocurra un problema al guardar la información
        console.log(error);
      });
  };

  const formik = useFormik({
    initialValues: {
      github: findTalents?.github,
      linkedIn: findTalents?.linkedIn,
      // knowledge: false,
      profile: findTalents?.profile,
      stacks: findTalents?.stacks ?? [],
      otherLanguages: findTalents?.otherLanguages,
    },
    validationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
  });



  const isFormValid =
    Object.keys(formik.errors).length === 0 &&
    Object.keys(formik.touched).length !== 0;
    const [isLoading, setIsLoading] = useState(true);
    if (isLoading) {
      // Mostrar un spinner mientras se verifica el usuario
      return <Spinner />;
    }
    if (user?.validateUser === false) {
      navigate("/");
      return null; // No se renderizará nada en este punto, ya que se está redirigiendo
    }
  return (
    <>
      <div className="editProfile">
        {/* <div className="editProfile__boton">
          <button
            className="editProfile__boton"
            onClick={() => dispatch(singOutAsync())}
          >
            Salir
          </button>
        </div> */}

        <LayoutTalents />

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
                  <div className="editProfile__container-imgTalent">
                    <figure className="editProfile__card-figure">
                      <img src={user?.photoURL} alt="imgTalent" />
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
                      name="github"
                      className="editProfile__input"
                      placeholder="Ingresa el vínculo de tu cuenta en Github"
                      value={formik.values.github}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.errors.github && formik.touched.github && (
                      <div className="editProfile__error-message">
                        {formik.errors.github}
                      </div>
                    )}
                  </div>
                  <div className="editProfile__container-profile">
                    <input
                      type="url"
                      name="linkedIn"
                      className="editProfile__input"
                      placeholder="Ingresa el vínculo de tu cuenta en Linkedin"
                      value={formik.values.linkedIn}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.errors.linkedIn &&
                      formik.touched.linkedIn && (
                        <div className="editProfile__error-message">
                          {formik.errors.linkedIn}
                        </div>
                      )}
                  </div>
                  <div className="editProfile__knowLedge">
                    <div> Conocimientos</div>

                    <div className="editProfile__languages">
                      {languageOptions.map((option,index) => (
                        <div key={index} className="editProfile__language">
                          <input
                            type="checkbox"
                            name="stacks"
                            id={option.id}
                            value={option.id}
                            checked={formik.values.stacks.includes(
                              option.id
                            )}
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

                    {/* {formik.errors.knowledge && formik.touched.knowledge && (
                      <div className="editProfile__error-message">
                        {formik.errors.knowledge}
                      </div>
                    )} */}

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

                  <div className="editProfile__container-pdf">
                    <label htmlFor="cv" className="editProfile__label">
                      Hoja de Vida (PDF):
                      <input
                        type="file"
                        id="cv"
                        name="cv"
                        accept="application/pdf"
                        onChange={(event) =>
                          formik.setFieldValue(
                            "cv",
                            event.currentTarget.files[0]
                          )
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
        </section >
        {/* <Footer /> */}
      </div >
    </>
  );
};

export default EditProfile;
