import React, { useEffect, useState } from 'react';
import "../style/styleFormStudies.scss";
import Swal from "sweetalert2";
import { useFormik } from "formik";
import * as Yup from "yup";
import { completeProfileAsync} from "../redux/actions/usersActions";
import { useNavigate, useParams } from "react-router-dom";
import LayoutTalents from "../components/layout/LayoutTalents"; import { languageOptions } from "../services/dates";
import { Spinner } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { getTalentLoggued } from '../services/talentsServices';


const FormStudies = () => {

  const {id} = useParams()
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setuser] = useState("");

  useEffect(()=>{      
    async function fetchData() {
      const editInfoTalent = await getTalentLoggued(id);      
      console.log("editInfoTalent", editInfoTalent);
      setuser(editInfoTalent);
    }
    fetchData();
    console.log("user", user) 
  }, [])

  const validationSchema = Yup.object().shape({
    institution: Yup.string().required("El nombre de la Institución educativa es requerido"),
    initialDate: Yup.string().required("La fecha de inicio es requerida"),
    finishDate: Yup.string().required("La fecha de terminación es requerida"),
    programName: Yup.string().required("El nombre del programa es requerido"),
    title: Yup.string().required("El título obtenido es requerido"),
  });
  console.log("validationSchema", validationSchema);

  const handleSubmit = async (values) => {
    console.log(values);
    
    const newStudie = {
      firstName: user.displayName,
      lastName: user.displayName,
      rol: user.displayName,
      cohorte: user.displayName,
    };
    dispatch(
      completeProfileAsync(newStudie, user.type)
    ).then((result) => {
        Swal.fire({
          icon: "success",
          title: "Información guardada exitosamente",
          showConfirmButton: true,
        }).then(() => {
          navigate(`/talentDetails/${user.id}`);
        });
      }) 
      .catch((error) => {
        Swal('error', "No se pudo actualizar el talento", 'error')
        // Manejar errores en caso de que ocurra un problema al guardar la información
        console.log(error);
      });
  };

  const formik = useFormik({
    initialValues: {
      firstName: user.displayName || "",
      lastName: user.displayName || "",
      rol: user.displayName || "",
      cohorte: user.displayName || "", 
    },
    validationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
  });

  const isFormValid = () =>{
    Object.keys(formik.errors).length === 0 &&
    Object.keys(formik.touched).length !== 0;
    const [isLoading, setIsLoading] = useState(true);
    if (isLoading) {
      // Mostrar un spinner mientras se verifica el usuario
      return <Spinner />;
    }
  }

  return (
    <>
      <section className="registerStudies">
        <LayoutTalents />
        <div className="registerStudies__contenedorForm">
          <div className="registerStudies__container">
            <figure className="registerStudies__fondo-figure">
              <img src="" alt="fondoImg" />
            </figure>

            <div className="registerStudies__form">
              <div className="registerStudies__container-tittle">
                <button className="registerStudies__button-tittle">
                  Formulario de Registro
                </button>
              </div>

              <form 
              onSubmit={formik.handleSubmit}
              >
                <div className="registerStudies__container-infoRegister">
                  <div className="registerStudies__input-regist">
                    <div className="registerStudies__user-photo">
                      {/* Label asociado al input de tipo file */}
                      <label
                        htmlFor="avatarInput"
                        className="registerStudies__file-input-label"
                      >
                        <img src={logoUser} alt="logoUser" />
                      </label>
                      <h5>Subir foto de perfil</h5>
                      {/* Input de tipo file oculto */}
                      <input
                        id="avatarInput"
                        className="registerStudies__select"
                        name="photoURL"
                        type="file"
                        accept="image/*"
                        onChange={(event) => {
                          formik.setFieldValue(
                            "photoURL",
                            event.currentTarget.files
                          );
                        }}
                      />
                      {formik.touched.avatar && formik.errors.avatar && (
                        <span className="registerStudies__span">
                          {formik.errors.avatar}
                        </span>
                      )}
                    </div>

                    <input
                      type="text"
                      name="institution"
                      placeholder="Nombre de la Institucion Educativa"
                      value={formik.values.institution}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.institution && formik.errors.institution && (
                      <span>{formik.errors.institution}</span>
                    )}
                    
                    <input

                      type="text"
                      name="initialDate"
                      placeholder="dia mes año"
                      value={formik.values.initialDate}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.initialDate && formik.errors.initialDate && (
                      <span>{formik.errors.initialDate}</span>
                    )}
                    <input
                      type="text"
                      name="finishDate"
                      placeholder="dia mes año"
                      value={formik.values.finishDate}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.finishDate && formik.errors.finishDate && (
                      <span>{formik.errors.finishDate}</span>
                    )}

                    <input
                      type="text"
                      name="programName"
                      placeholder="Nombre del programa académico"
                      value={formik.values.programName}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.programName && formik.errors.programName && (
                      <span>{formik.errors.programName}</span>
                    )}

                    <input
                      type="text"
                      name="title"
                      placeholder="Nombre del título otorgado"
                      value={formik.values.title}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.title && formik.errors.title && (
                      <span>{formik.errors.title}</span>
                    )}
                  <div className="registerStudies__buttons">
                    <button className="registerStudies__crearCuenta" type="submit">
                      Omitir
                    </button>
                    <button className="registerStudies__omitir" type="submit">
                      Crear cuenta
                    </button>
                  
                  </div>                    
                  
                  <div className="registerStudies__habeasdata ">
                    <input
                      id="habeasDataCheckbox"
                      name="habeasDataCheckbox"
                      type="checkbox"
                      value={formik.values.habeasDataCheckbox}
                      onChange={formik.handleChange}
                    />
                    <label className="registerStudies__habeasdata-info">
                      Habeas Data: Al completar este formulario, aceptas que tus
                      datos sean almacenados y utilizados de acuerdo con nuestra
                      política de privacidad.
                    </label>
                  </div>
                  </div>
                  </div>
              </form>
            </div>
          </div>
        </div>

        <Footer />

      </section>
    
    </>
  )
}

export default FormStudies