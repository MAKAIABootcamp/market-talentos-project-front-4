import React from 'react'
import "../style/StyleLoginAdmin.scss"
import profile from "../assets/3135768.png"
import { Formik, Form, Field, ErrorMessage } from 'formik'

const LoginAdmin = () => {
  return (
    <div className='container'>
      <Formik

        initialValues={{
          correo: "",
          contraseña: ""
        }}

        validate={(valores) => {

          //Validación del usuario
          let errores = {};

          if (!valores.correo) {
            errores.correo = "Por favor ingresa tu correo electronico"
          } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)) {
            errores.correo = "El correo solo puede contener letras, números, puntos y guiones"
          }

          //Validación de la contraseña
          if (!valores.contraseña) {
            errores.contraseña = "Por favor ingresa la contraseña"
          }

          return errores;
        }}

        onSubmit={(valores) => {
          console.log(valores)
          console.log("Formulario enviado");
        }}
      >

        {({ errors }) => (
          <Form className='formLogin' >
            <div className='titleForm'>Market Talentos</div>
            <img className="profilePhoto" src={profile} alt="profile" />
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
            <ErrorMessage name='contraseña' component={() => (
              <div className='error'>{errors.contraseña}</div>
            )} />
            <button type='submit'>Ingresar</button>
            <span>crear una cuenta</span>
          </Form>

        )}

      </Formik>

    </div>
  )
}

export default LoginAdmin