import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../style/styleFormRegisTalent.scss";
import fondoImg from "../assets/fondoregist.jpg";
import logoUser from "../assets/icon/logoUser.png";

const FormRegisTalent = () => {
  const formik = useFormik({
    initialValues: {
      nombreCompleto: "",
      apellidos: "",
      tipoTalento: "",
      cohorte: "",
      nivelIngles: "",
      correoElectronico: "",
      celular: "",
      usuario: "",
      contrasenia: "",
    },
    validationSchema: Yup.object({
      nombreCompleto: Yup.string().required("El nombre es requerido"),
      apellidos: Yup.string().required("Los apellidos son requeridos"),
      tipoTalento: Yup.string().required("Selecciona un tipo de talento"),
      cohorte: Yup.string().required("La cohorte es requerida"),
      nivelIngles: Yup.string().required("El nivel de inglés es requerido"),
      correoElectronico: Yup.string()
        .email("Correo electrónico inválido")
        .required("El correo electrónico es requerido"),
      celular: Yup.string().required("El número de celular es requerido"),
      usuario: Yup.string().required("El usuario es requerido"),
      contrasenia: Yup.string()
        .required("La contraseña es requerida")
        .min(3, "La contraseña debe contener al menos 3 caracteres.")
        .max(8, "La contraseña no puede contener más de 8 caracteres"),
      userPhoto: Yup.mixed().required("La foto de perfil es requerida"),
    }),
    onSubmit: (values) => {
      console.log(values); // Aquí puedes hacer lo que necesites con los datos del formulario
    },
  });

  return (
    <section className="register">
      <div className="register__container">
        <figure className="register__fondo-figure">
          <img src={fondoImg} alt="fondoImg" />
        </figure>

        <section className="register__section-form">
          <div className="register__form">
            <div className="register__container-tittle">
              <button className="register__button-tittle">
                Formulario de Registro
              </button>
            </div>

            <form onSubmit={formik.handleSubmit}>
              <div className="register__container-infoRegister">
                <div className="register__input-regist">
                  <div className="register__user-photo">
                    <label
                      htmlFor="userPhotoInput"
                      className="register__file-input-label"
                    >
                      <img src={logoUser} alt="logoUser" />
                    </label>
                    <h5>Subir foto de perfil</h5>
                    <input
                      className="register__select"
                      id="userPhotoInput"
                      name="userPhoto"
                      type="file"
                      accept="image/*"
                      onChange={(event) => {
                        formik.setFieldValue(
                          "userPhoto",
                          event.currentTarget.files[0]
                        );
                      }}
                    />
                    {formik.touched.userPhoto && formik.errors.userPhoto && (
                      <span>{formik.errors.userPhoto}</span>
                    )}
                  </div>

                  <input
                    name="nombreCompleto"
                    placeholder="Nombre completo"
                    value={formik.values.nombreCompleto}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.nombreCompleto &&
                    formik.errors.nombreCompleto && (
                      <span>{formik.errors.nombreCompleto}</span>
                    )}

                  <input
                    name="apellidos"
                    placeholder="Apellidos"
                    value={formik.values.apellidos}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.apellidos && formik.errors.apellidos && (
                    <span>{formik.errors.apellidos}</span>
                  )}

                  <select
                    name="tipoTalento"
                    value={formik.values.tipoTalento}
                    onChange={formik.handleChange}
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="FrontEnd">FrontEnd</option>
                    <option value="BackEnd">BackEnd</option>
                    <option value="FullStack">FullStack</option>
                  </select>
                  {formik.touched.tipoTalento && formik.errors.tipoTalento && (
                    <span>{formik.errors.tipoTalento}</span>
                  )}

                  <input
                    name="cohorte"
                    placeholder="Cohorte"
                    value={formik.values.cohorte}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.cohorte && formik.errors.cohorte && (
                    <span>{formik.errors.cohorte}</span>
                  )}

                  <input
                    name="nivelIngles"
                    placeholder="Nivel de inglés"
                    value={formik.values.nivelIngles}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.nivelIngles && formik.errors.nivelIngles && (
                    <span>{formik.errors.nivelIngles}</span>
                  )}

                  <input
                    name="correoElectronico"
                    placeholder="Correo electrónico"
                    value={formik.values.correoElectronico}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.correoElectronico &&
                    formik.errors.correoElectronico && (
                      <span>{formik.errors.correoElectronico}</span>
                    )}

                  <input
                    name="celular"
                    placeholder="Celular"
                    value={formik.values.celular}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.celular && formik.errors.celular && (
                    <span>{formik.errors.celular}</span>
                  )}

                  <div className="register__ussers">
                    <input
                      name="usuario"
                      placeholder="Usuario"
                      value={formik.values.usuario}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.usuario && formik.errors.usuario && (
                      <span>{formik.errors.usuario}</span>
                    )}

                    <input
                      name="contrasenia"
                      placeholder="Contraseña"
                      type="password"
                      value={formik.values.contrasenia}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.contrasenia &&
                      formik.errors.contrasenia && (
                        <span>{formik.errors.contrasenia}</span>
                      )}
                  </div>
                </div>

                <button className="register__crearCuenta" type="submit">
                  Crear cuenta
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </section>
  );
};

export default FormRegisTalent;
