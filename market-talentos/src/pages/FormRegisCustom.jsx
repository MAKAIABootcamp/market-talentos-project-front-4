import React from 'react';
import { useFormik } from "formik";
import * as Yup from "yup";
import fileUpLoad from "../services/fileUpload";
import "../style/styleFormRegisCustom.scss";
import logoUser from "../assets/icon/logoUser.png";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  registerActionAsync,
  singOutAsync,
} from "../redux/actions/usersActions";
import LayoutTalents from "../components/layout/LayoutTalents";
import Footer from "../components/footer/Footer";
import { TiposDeUsuarios, roles } from "../services/dates";

const FormRegisCustom = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      phone: "",
      user: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("El nombre de la empresa es requerido"),
      email: Yup.string()
        .email("Correo electrónico inválido")
        .required("El correo electrónico es requerido"),
      phone: Yup.string().required("El número de celular es requerido"),
      user: Yup.string().required("El user es requerido"),
      password: Yup.string()
        .required("La contraseña es requerida")
        .min(3, "La contraseña debe contener al menos 3 caracteres.")
        .max(8, "La contraseña no puede contener más de 8 caracteres"),
      
    }),

    onSubmit: async (values) => {
      console.log(values);

      // Enviar la imagen a Cloudinary utilizando fileUpLoad
      const avatar = await fileUpLoad(values.photoURL[0]);

      const newUser = {
        ...values,
        type: TiposDeUsuarios.EMPRESA,
        validateUser: false,
      };
      dispatch(registerActionAsync(newUser));
      Swal.fire({
        icon: "success",
        title:
          "Su solicitud fue enviada, debe esperar aprobación del administrador",
        showConfirmButton: false,
        timer: 1500,
      })
        .then(() => {
          dispatch(singOutAsync());
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });
  return (
    <>
    <section className="registerCompany">
      <LayoutTalents />
      <div className="registerCompany__contenedorForm">
        <div className="registerCompany__container">
          {/* <figure className="registerCompany__fondo-figure">
            <img src={fondoImg} alt="fondoImg" />
          </figure> */}

          <div className="registerCompany__form">

            <div className="registerCompany__container-tittle">
              <button className="registerCompany__button-tittle">
                Formulario de Registro
              </button>
            </div>

            <form onSubmit={formik.handleSubmit}>
              <div className="registerCompany__container-infoRegister">
                <div className="registerCompany__input-regist">
                  <input
                    name="firstName"
                    placeholder="Nombre completo"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.firstName && formik.errors.firstName && (
                    <span>{formik.errors.firstName}</span>
                  )}

                  <input
                    name="email"
                    placeholder="Correo electrónico"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <span>{formik.errors.email}</span>
                  )}

                  <input
                    name="phone"
                    placeholder="Celular"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.phone && formik.errors.phone && (
                    <span>{formik.errors.phone}</span>
                  )}

                  <div className="registerCompany__ussers">
                    <input
                      name="user"
                      placeholder="correo electrónico"
                      value={formik.values.user}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.user && formik.errors.user && (
                      <span>{formik.errors.user}</span>
                    )}

                    <input
                      name="password"
                      placeholder="Contraseña"
                      type="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.password && formik.errors.password && (
                      <span>{formik.errors.password}</span>
                    )}
                  </div>
                </div>
                <div className="registerCompany__habeasdata ">
                  <input
                    id="habeasDataCheckbox"
                    name="habeasDataCheckbox"
                    type="checkbox"
                    value={formik.values.habeasDataCheckbox}
                    onChange={formik.handleChange}
                  />
                  <label className="registerCompany__habeasdata-info">
                    Habeas Data: Al completar este formulario, aceptas que tus
                    datos sean almacenados y utilizados de acuerdo con nuestra
                    política de privacidad.
                  </label>
                </div>

                <button className="registerCompany__crearCuenta" type="submit">
                  Crear cuenta
                </button>
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

export default FormRegisCustom