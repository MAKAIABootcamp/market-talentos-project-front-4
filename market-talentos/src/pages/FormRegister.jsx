import React from 'react';
import { useFormik } from "formik";
import * as Yup from "yup";
import fileUpLoad from "../services/fileUpload";
import "../style/styleFormRegister.scss";
import fondoImg from "../assets/fondoregist.jpg";
import logoUser from "../assets/icon/logoUser.png";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerActionAsync } from "../redux/actions/usersActions";
import LayoutTalents from "../components/layout/LayoutTalents";
import Footer from "../components/footer/Footer";
import { TiposDeUsuarios, typesUsers } from "../services/dates";


const FormRegister = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            photoURL: null,
            firstName: "",
            lastName: "",
            typeUser: "",
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            // photoURL: Yup.mixed().required("La foto de perfil es requerida"),
            firstName: Yup.string().required("El nombre es requerido"),
            // lastName: Yup.string().required("Los apellidos son requeridos"),
            typeUser: Yup.string().required("Selecciona un tipo de usuario"),
            email: Yup.string()
                .email("Correo electrónico inválido")
                .required("El correo electrónico es requerido"),

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
        <>
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
                                            placeholder="Nombre completo o nombre de la empresa"
                                            value={formik.values.firstName}
                                            onChange={formik.handleChange}
                                        />
                                        {formik.touched.firstName && formik.errors.firstName && (
                                            <span>{formik.errors.firstName}</span>
                                        )}

                                        <input
                                            name="lastName"
                                            placeholder="Apellidos omitir si es empresa"
                                            value={formik.values.apellidos}
                                            onChange={formik.handleChange}
                                        />
                                        {formik.touched.lastName && formik.errors.lastName && (
                                            <span>{formik.errors.lastName}</span>
                                        )}

                                        <select
                                            name="typeUser"
                                            value={formik.values.tipoTalento}
                                            onChange={formik.handleChange}
                                        >
                                            <option value="">Selecciona tipo de usuario</option>
                                            {typesUsers.map((typeUser) => (
                                                <option key={typeUser.id} value={typeUser.name}>{typeUser.name}</option>
                                            ))}
                                        </select>
                                        {formik.touched.typeUser && formik.errors.typeUser && (
                                            <span>{formik.errors.typeUser}</span>
                                        )}



                                        <div className="register__ussers">
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

        </>
    )
}

export default FormRegister