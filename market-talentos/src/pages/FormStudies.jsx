import React, { useEffect, useState } from 'react';
import "../style/styleFormStudies.scss";
import Swal from "sweetalert2";
import { useFormik } from "formik";
import * as Yup from "yup";
import { completeProfileAsync, editTalentAsync } from "../redux/actions/usersActions";
import { useNavigate, useParams } from "react-router-dom";
import LayoutTalents from "../components/layout/LayoutTalents";
import { Spinner } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { getTalentLoggued } from '../services/talentsServices';
import Footer from '../components/footer/Footer';

const FormStudies = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState("");

  useEffect(() => {
    async function fetchData() {
      const editTalent = await getTalentLoggued(id);
      console.log("talent useeffect", editTalent)
      setUser(editTalent)
    }
    fetchData();

  }, []);

  const validationSchema = Yup.object().shape({
    institution: Yup.string().required("El nombre de la Institución educativa es requerido"),
    initialDate: Yup.string().required("La fecha de inicio es requerida"),
    finishDate: Yup.string().required("La fecha de terminación es requerida"),
    programName: Yup.string().required("El nombre del programa es requerido"),
    title: Yup.string().required("El título obtenido es requerido"),
  });

  const handleSubmit = async (values) => {
    

    // const newStudie = {
    //   institution: values.institution,
    //   initialDate: values.initialDate,
    //   finishDate: values.finishDate,
    //   programName: values.programName,
    //   title: values.title,
    // };

    const newStudie = {
      id: user?.id,
      studies: [
        
        values.institution,
        values.initialDate,
        values.finishDate,
        values.programName,
        values.title]
    };
    dispatch(
      editTalentAsync(newStudie, user.type)
      
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
    // initialValues: {
    //   institution: user?.institution || "",
    //   initialDate: user?.initialDate || "",
    //   finishDate: user?.finishDate || "",
    //   programName: user?.programName || "",
    // },
    initialValues: {
      studies:[
    ]
     
    },
    validationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
  });

  const isFormValid = () => {
    if (Object.keys(formik.errors).length === 0 &&
      Object.keys(formik.touched).length !== 0) { return true }

  };

  return (
    <>
      <section className="formStudies">
        <LayoutTalents />
        <div className="formStudies__contenedorForm">
          <div className="formStudies__container">
            {/* <figure className="formStudies__fondo-figure">
              <img src="" alt="fondoImg" />
            </figure> */}

            <div className="formStudies__form">
              <div className="formStudies__container-tittle">
                <button className="formStudies__button-tittle">
                  Formulario de Registro
                </button>
              </div>

              <form
                onSubmit={formik.handleSubmit}
              >
                <div className="formStudies__container-infoRegister">
                  <div className="formStudies__input-regist">
                    <input
                      type="text"
                      name="institution"
                      placeholder="Nombre de la Institucion Educativa"
                      value={formik.values.institution}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
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
                      onBlur={formik.handleBlur}
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
                      onBlur={formik.handleBlur}
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
                      onBlur={formik.handleBlur}
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
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.title && formik.errors.title && (
                      <span>{formik.errors.title}</span>
                    )}
                    <div className="formStudies__container-buttons">
                      <button className="formStudies__omitir"
                        type="button"
                        onClick={() => navigate(`/talentDetails/${user.id}`)}
                      >
                        Omitir
                      </button>
                      <button
                        className="formStudies__crearCuenta"
                        type="submit"
                        disabled={!isFormValid}
                        // onClick={() => navigate(`/talentDetails/${user.id}`)}
                      >
                        Guardar
                      </button>

                    </div>

                    <div className="formStudies__habeasdata ">
                      <input
                        id="habeasDataCheckbox"
                        name="habeasDataCheckbox"
                        type="checkbox"
                        value={formik.values.habeasDataCheckbox}
                        onChange={formik.handleChange}
                      />
                      <label className="formStudies__habeasdata-info">
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