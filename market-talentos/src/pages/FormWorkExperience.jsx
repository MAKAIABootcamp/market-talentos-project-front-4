import React, { useEffect, useState } from 'react';
import "../style/styleFormStudies.scss";
import Swal from "sweetalert2";
import { useFormik } from "formik";
import * as Yup from "yup";
import { completeProfileAsync} from "../redux/actions/usersActions";
import { useNavigate, useParams } from "react-router-dom";
import LayoutTalents from "../components/layout/LayoutTalents"; 
import { Spinner } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { getTalentLoggued } from '../services/talentsServices';

const FormWorkExperience = () => {

    const {id} = useParams()
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [talentExperience, setTalentExperience] = useState("");

  useEffect(()=>{      
    async function fetchData() {
      const workInfoTalent = await getTalentLoggued(id);      
      console.log("workInfoTalent", workInfoTalent);
      setTalentExperience(workInfoTalent);
    }
    fetchData();
    console.log("workInfoTalent", workInfoTalent) 
  }, []);

  useEffect(()=>{        
      console.log("talentExperience", talentExperience);
  }, [talentExperience]);

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
      company: values.company,
      initialDate: values.initialDate,
      finishDate: values.finishDate,
      post: values.post,
      functions: values.functions,
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
        company: talentStudies.company || "",
      initialDate: talentStudies.initialDate || "",
      finishDate: talentStudies.finishDate || "",
      programName: talentStudies.programName || "", 
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
      return <Spinner size="md" />;
    }
  }
  return (
    <>

<section className="registerWork">
        <LayoutTalents />
        <div className="registerWork__contenedorForm">
          <div className="registerWork__container">
            <figure className="registerWork__fondo-figure">
              <img src="" alt="fondoImg" />
            </figure>

            <div className="registerWork__form">
              <div className="registerWork__container-tittle">
                <button className="registerWork__button-tittle">
                  Formulario de Registro
                </button>
              </div>

              <form 
              onSubmit={formik.handleSubmit}
              >
                <div className="registerWork__container-infoRegister">
                  <div className="registerWork__input-regist">
                    <div className="registerWork__user-photo">
                      {/* Label asociado al input de tipo file */}
                      <label
                        htmlFor="avatarInput"
                        className="registerWork__file-input-label"
                      >
                        <img src={logoUser} alt="logoUser" />
                      </label>
                      <h5>Subir foto de perfil</h5>
                      {/* Input de tipo file oculto */}
                      <input
                        id="avatarInput"
                        className="registerWork__select"
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
                        <span className="registerWork__span">
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
                      name="functions"
                      placeholder="describa las funciones realizadas"
                      value={formik.values.functions}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.functions && formik.errors.functions && (
                      <span>{formik.errors.functions}</span>
                    )}
                  <div className="registerWork__buttons">
                    <button className="registerWork__crearCuenta" 
                    type="button"
                    onClick={() => navigate(`/talentDetails/${user.id}`)}
                    >
                      Omitir
                    </button>
                    <button 
                    className="registerWork__omitir" 
                    type="submit"
                    disabled={!isFormValid}
                    >
                      Guardar
                    </button>
                  
                  </div>                    
                  
                  <div className="registerWork__habeasdata ">
                    <input
                      id="habeasDataCheckbox"
                      name="habeasDataCheckbox"
                      type="checkbox"
                      value={formik.values.habeasDataCheckbox}
                      onChange={formik.handleChange}
                    />
                    <label className="registerWork__habeasdata-info">
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

export default FormWorkExperience