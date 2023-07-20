import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import fileUpLoad from "../services/fileUpload";
import "../style/styleFormRegisTalent.scss";
import fondoImg from "../assets/fondoregist.jpg";
import logoUser from "../assets/icon/logoUser.png";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerActionAsync } from "../redux/actions/usersActions";
import LayoutTalents from "../components/layout/LayoutTalents";
import Footer from "../components/footer/Footer";
import { TiposDeUsuarios, roles } from "../services/dates";

const FormRegisTalent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      rol: "",
      cohorte: "",
      // englishLevel: "",
      email: "",
      phone: "",
      // user: "",
      password: "",
      photoURL: null,
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("El nombre es requerido"),
      lastName: Yup.string().required("Los apellidos son requeridos"),
      rol: Yup.string().required("Selecciona un tipo de talento"),
      cohorte: Yup.string().required("La cohorte es requerida"),
      // englishLevel: Yup.string().required("El nivel de inglés es requerido"),
      email: Yup.string()
        .email("Correo electrónico inválido")
        .required("El correo electrónico es requerido"),
      phone: Yup.string().required("El número de celular es requerido"),
      // user: Yup.string().required("El user es requerido"),
      password: Yup.string()
        .required("La contraseña es requerida")
        .min(3, "La contraseña debe contener al menos 3 caracteres.")
        .max(8, "La contraseña no puede contener más de 8 caracteres"),
      photoURL: Yup.mixed().required("La foto de perfil es requerida"),
    }),

    onSubmit: async (values) => {
      //  console.log(values);

      // Enviar la imagen a Cloudinary utilizando fileUpLoad
      const avatar = await fileUpLoad(values.photoURL[0]);

      const newUser = {
        ...values,
        photoURL: avatar,
        displayName: `${values.firstName} ${values.lastName}`,
        type: TiposDeUsuarios.TALENTO
      };
      console.log("New User:", newUser);
      Swal.fire({
        icon: "success",
        title: "Usuario creado exitosamente",
        showConfirmButton: false,
        timer: 1500,
      })
        .then(() => {
          navigate("/editProfile");
        })
        .catch((error) => {
          // Manejar errores en caso de que ocurra un problema durante el registro del usuario
          console.log(error);
        });
      // dispatch(registerActionAsync(newUser));
      // dispatch(actionAddTalentsAsync(newUser)); // Agregar esta línea para enviar los datos a Firebase
      dispatch(registerActionAsync(newUser));
    },
  });

  return (
    <section className="register">
      <LayoutTalents />
      <div className="register__contenedorForm">
        <div className="register__container">
          <figure className="register__fondo-figure">
            <img src={fondoImg} alt="fondoImg" />
          </figure>

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
                      <span className="register__span">
                        {formik.errors.avatar}
                      </span>
                    )}
                  </div>

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
                    name="lastName"
                    placeholder="Apellidos"
                    value={formik.values.apellidos}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.lastName && formik.errors.lastName && (
                    <span>{formik.errors.lastName}</span>
                  )}

                  <select
                    name="rol"
                    value={formik.values.tipoTalento}
                    onChange={formik.handleChange}
                  >
                    <option value="">Selecciona una opción</option>
                    {roles.map((rol) => (
                      <option key={rol.id} value={rol.name}>{rol.name}</option>
                    ))}                    
                  </select>
                  {formik.touched.rol && formik.errors.rol && (
                    <span>{formik.errors.rol}</span>
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
                    name="englishLevel"
                    placeholder="Nivel de inglés"
                    value={formik.values.englishLevel}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.englishLevel &&
                    formik.errors.englishLevel && (
                      <span>{formik.errors.englishLevel}</span>
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

                <button className="register__crearCuenta" type="submit">
                  Crear cuenta
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
     
        <Footer />
      
    </section>
  );
};

export default FormRegisTalent;