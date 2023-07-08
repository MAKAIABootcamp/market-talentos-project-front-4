import React from 'react'
import "./StyleLoginAdmin.scss"
import profile from "../../assets/3135768.png"
import { Formik } from 'formik'

const LoginAdmin = () => {
  return (
    <div className='container'>
      <Formik

              initialValues={{
                usuario: "",
                contraseña: ""
              }} 
              
              onSubmit={(valores) =>{
                console.log(valores)
                console.log("Formulario enviado");
              }}
      >

        {( {values, handleSubmit, handleChange, handleBlur} ) => (
          <form className='formLogin' onSubmit={handleSubmit}>
            <div className='titleForm'>Market Talentos</div>
            <img className="profilePhoto" src={profile} alt="profile" />
            <input
            id="usuario"
            type="text" 
            placeholder='usuario' 
            value={values.usuario}
            onChange={handleChange}
            onBlur={handleBlur} />

            <input 
            id='contraseña'
            type="text" 
            placeholder='contraseña' 
            value={values.contraseña}
            onChange={handleChange}
            onBlur={handleBlur}/>
            <button type='submit'>Ingresar</button>
            <span>crear una cuenta</span>
          </form>

        )}

      </Formik>

    </div>
  )
}

export default LoginAdmin