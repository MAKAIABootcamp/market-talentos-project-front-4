import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import profile from "../assets/3135768.png"
import "../style/styleFormRegisAdmin.scss"

const FormRegisAdmin = () => {
    return (
        <div className='containerFormRegisterAdmin'>
            <Formik

                initialValues={{
                    correo: "",
                    contraseña: ""
                }}

                validate={(valores) => {

                    //Validación del usuario
                    let errores = {};

                    if (!valores.nombre) {
                        errores.nombre = "Por favor ingresa tu nombre"
                    }

                    if (!valores.apellidos) {
                        errores.apellidos = "Por favor ingresa tus apellidos"
                    }

                    if (!valores.correo) {
                        errores.correo = "Por favor ingresa tu correo electronico"
                    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)) {
                        errores.correo = "El correo solo puede contener letras, números, puntos y guiones"
                    }

                    //Validación de la contraseña
                    if (!valores.contraseña) {
                        errores.contraseña = "Por favor ingresa la contraseña"
                    }

                    if (!valores.contraseñaConfirmacion) {
                        errores.contraseñaConfirmacion = "La contraseña no coincide"
                    } else if (valores.contraseña != valores.contraseñaConfirmacion) {
                        errores.contraseñaConfirmacion = "La contraseña no coincide"
                    }

                    return errores;
                }}

                onSubmit={(valores) => {
                    console.log(valores.correo, valores.contraseña)
                }}
            >

                {({ errors }) => (
                    <Form className='formRegisAdmin' >
                        <div className='titleFormRegisAdmin'>Market Talentos</div>
                        <img className="profilePhotoAdmin" src={profile} alt="profile" />

                        <Field
                            id="nombre"
                            name="nombre"
                            type="text"
                            placeholder='Nombre'
                        />
                        <ErrorMessage name='nombre' component={() => (
                            <div className='error'>{errors.nombre}</div>
                        )} />

                        <Field
                            id="apellidos"
                            name="apellidos"
                            type="text"
                            placeholder='Apellidos'
                        />
                        <ErrorMessage name='apellidos' component={() => (
                            <div className='error'>{errors.apellidos}</div>
                        )} />
                        <Field
                            id="correo"
                            name="correo"
                            type="text"
                            placeholder='correo'
                        />
                        <ErrorMessage name='correo' component={() => (
                            <div className='error'>{errors.correo}</div>
                        )} />

                        <Field
                            id='contraseña'
                            name="contraseña"
                            type="password"
                            placeholder='contraseña'
                        />

                        <Field
                            id='contraseñaConfirmacion'
                            name="contraseñaConfirmacion"
                            type="password"
                            placeholder='confirma tu contraseña'
                        />

                        <ErrorMessage name='contraseñaConfirmacion' component={() => (
                            <div className='error'>{errors.contraseñaConfirmacion}</div>
                        )} />

                        <button type='submit'>Registrar</button>
                    </Form>

                )}

            </Formik>

        </div>
    )
}

export default FormRegisAdmin
