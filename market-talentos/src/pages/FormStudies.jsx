import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import "../style/styleFormStudies.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  completeProfileAsync} from "../redux/actions/usersActions";
import Swal from "sweetalert2";
import LayoutTalents from "../components/layout/LayoutTalents"; 
import { listTalents } from '../redux/actions/userActions';

const FormStudies = () => {
    const dispatch = useDispatch();
    const talents = useSelector((store) => store.userTalents);
    console.log(talents, "talentos");

    useEffect(() => {
        dispatch(listTalents())
    }, [dispatch]);

    const validationSchema = Yup.object().shape({
    institute: Yup.string().required("la Institucion educativa es requerida"),
    programName: Yup.string().required("El nombre del programa es requerido"),
    degree: Yup.string().required("El titulo obtenido es requerido"),
    graduationYear: Yup.string().required("El año de graduación es requerido"),
    
  });

  const handleSubmit = (values) => {
    console.log(values);
    

    const newInfoStudies = {
      institute: values.institute,
      initialDate: values.initialDate,
      finishDate: values.finishDate,
      programName: values.programName,
      degree: values.degree,
      graduationYear: values.graduationYear,
     
    };
    console.log( institute, initialDate, user.displayName, finishDate, newInfoStudies, programName, programName, degree, graduationYear, user.type, "NuevoTalento");
    dispatch(
      completeProfileAsync(newInfoStudies, user.type)
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
          navigate(`/workexperience`);
        });
      })
      .catch((error) => {
        // Manejar errores en caso de que ocurra un problema al guardar la información
        console.log(error);
      });
  };

  const formik = useFormik({
    initialValues: {
      institute: "",
      programName: "",
      degree: "",
      graduationYear: "",
           
    },
    validationSchema,
    onSubmit: handleSubmit,
  });

  const isFormValid =
    Object.keys(formik.errors).length === 0 &&
    Object.keys(formik.touched).length !== 0;

    return (
        <>
            <div className="formStudies">
                <LayoutTalents />
                <section className="formStudies__section">
                    <div className="formStudies__container">
                        <section className="formStudies__seccion-info">
                            <div className="formStudies__container-title">
                                <button className="formStudies__button-title">
                                    Ingresa la información de los Estudios
                                </button>
                            </div>
                            <div className="formStudies__container-infoCustom">
                                <form
                                    className="formStudies__container-form"
                                    onSubmit={formik.handleSubmit}
                                >
                                    <div className="formStudies__container-profile">
                                        <input
                                            type="text"
                                            name="instituto"
                                            className="formStudies__input"
                                            placeholder="Institución educativa"
                                            value={formik.values.institute}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.errors.institute && formik.touched.institute && (
                                            <div className="formStudies__error-message">
                                                {formik.errors.institute}
                                            </div>
                                        )}
                                    </div>
                                    <div className="formStudies__container-profile">
                                        <input
                                            type="text"
                                            name="programName"
                                            className="formStudies__input"
                                            placeholder="Nombrem  del programa"
                                            value={formik.values.degree}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.errors.degree &&
                                            formik.touched.degree && (
                                                <div className="formStudies__error-message">
                                                    {formik.errors.degree}
                                                </div>
                                            )}
                                    </div>
                                    <div className="formStudies__container-profile">
                                        <input
                                            type="text"
                                            name="degree"
                                            className="formStudies__input"
                                            placeholder="Título obtenido"
                                            value={formik.values.degree}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.errors.degree &&
                                            formik.touched.degree && (
                                                <div className="formStudies__error-message">
                                                    {formik.errors.degree}
                                                </div>
                                            )}
                                    </div>
                                    
                                    <div className="formStudies__container-profile">
                                        <input
                                            type="text"
                                            name="GraduationYear"
                                            className="formStudies__input"
                                            placeholder="Ingresa el vínculo de tu cuenta en degree"
                                            value={formik.values.graduationYear}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.errors.graduationYear &&
                                            formik.touched.graduationYear && (
                                                <div className="formStudies__error-message">
                                                    {formik.errors.graduationYear}
                                                </div>
                                            )}
                                    </div>
                                    <div>
                                    <button
                                            className="formStudies__button-otther"
                                            type="button"
                                            // onClick={() => navigate("/talentDetails")}
                                        >
                                            agregar mas
                                        </button>
                                    </div>
                                    
                                    <div className="formStudies__container-custom">
                                     <button
                                            className="formStudies__button"
                                            type="button"
                                            onClick={() => navigate("/talentDetails")}
                                        >
                                            Omitir
                                        </button>
                                        <button
                                            className="formStudies__button"
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
    )
}

export default FormStudies;