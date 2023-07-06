import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import fileUpload from '../services/fileUpload';
import "../style/styleFormRegisTalent.scss";
import fondoImg from "../assets/fondoregist.jpg";
import logoUser from "../assets/icon/logoUser.png";

const FormRegisTalent = () => {
  const formik = useFormik({
    initialValues: {
      FirstName: "",
      lastName: "",
      role: "",
      cohorte: "",
      EnglishLevel: "",
      correoElectronico: "",
      celular: "",
      user: "",
      contrasenia: "",
      avatar: null,
    },
    validationSchema: Yup.object({
      FirstName: Yup.string().required("El nombre es requerido"),
      lastName: Yup.string().required("Los apellidos son requeridos"),
      role: Yup.string().required("Selecciona un tipo de talento"),
      cohorte: Yup.string().required("La cohorte es requerida"),
      EnglishLevel: Yup.string().required("El nivel de inglés es requerido"),
      correoElectronico: Yup.string()
        .email("Correo electrónico inválido")
        .required("El correo electrónico es requerido"),
      celular: Yup.string().required("El número de celular es requerido"),
      user: Yup.string().required("El user es requerido"),
      contrasenia: Yup.string()
        .required("La contraseña es requerida")
        .min(3, "La contraseña debe contener al menos 3 caracteres.")
        .max(8, "La contraseña no puede contener más de 8 caracteres"),
      avatar: Yup.mixed().required("La foto de perfil es requerida"),
    }),
    
    onSubmit: async (values) => {
      const { avatar } = values;

      try {
        const avatarUrl = await fileUpload(avatar);
        console.log("Avatar URL:", avatarUrl);
        // Aquí puedes hacer lo que necesites con el URL del avatar, como guardarlo en una base de datos o enviarlo a un servidor
      } catch (error) {
        console.error("Error uploading avatar to Cloudinary:", error);
      }

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
                    {/* Label asociado al input de tipo file */}
                    <label
                      htmlFor="avatarInput"
                      className="register__file-input-label"
                    >
                      <img src={logoUser} alt="logoUser" />
                    </label>
                    <h5>Subir foto de perfil</h5>
                    {/* Input de tipo file oculto */}
                    <input
                      id="avatarInput"
                      className="register__select"
                      name="avatar"
                      type="file"
                      accept="image/*"
                      onChange={(event) => {
                        formik.setFieldValue(
                          "avatar",
                          event.currentTarget.files[0]
                        );
                      }}
                    />
                    {formik.touched.avatar && formik.errors.avatar && (
                      <span>{formik.errors.avatar}</span>
                    )}
                  </div>

                  <input
                    name="FirstName"
                    placeholder="Nombre completo"
                    value={formik.values.FirstName}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.FirstName && formik.errors.FirstName && (
                    <span>{formik.errors.FirstName}</span>
                  )}

                  <input
                    name="lastName"
                    placeholder="Apellidos"
                    value={formik.values.apellidos}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.lastName && formik.errors.lastName && (
                    <span>{formik.errors.lastName}</span>
                  )}

                  <select
                    name="role"
                    value={formik.values.tipoTalento}
                    onChange={formik.handleChange}
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="FrontEnd">FrontEnd</option>
                    <option value="BackEnd">BackEnd</option>
                    <option value="FullStack">FullStack</option>
                  </select>
                  {formik.touched.role && formik.errors.role && (
                    <span>{formik.errors.role}</span>
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
                    name="EnglishLevel"
                    placeholder="Nivel de inglés"
                    value={formik.values.EnglishLevel}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.EnglishLevel &&
                    formik.errors.EnglishLevel && (
                      <span>{formik.errors.EnglishLevel}</span>
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
                  <div className="register__habeasdata ">
                    <input
                      id="habeasDataCheckbox"
                      name="habeasDataCheckbox"
                      type="checkbox"
                      value={formik.values.habeasDataCheckbox}
                      onChange={formik.handleChange}
                    />
                    <label className="register__habeasdata-info">
                       Habeas Data: Al completar este formulario, aceptas que tus
                      datos sean almacenados y utilizados de acuerdo con nuestra
                      política de privacidad.
                    </label>
                  </div>

                  <div className="register__ussers">
                    <input
                      name="user"
                      placeholder="Usuario"
                      value={formik.values.user}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.user && formik.errors.user && (
                      <span>{formik.errors.user}</span>
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
