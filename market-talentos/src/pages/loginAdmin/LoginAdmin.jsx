import React from 'react'
import "./StyleLoginAdmin.scss"
import profile from "../../assets/3135768.png"
import { Formik } from 'formik'

const LoginAdmin = () => {
  return (
    <div className='container'>
      <Formik

              initialValues={{
                usuario: "admin",
                contraseña: "admin"
              }} 
              
              onSubmit={() =>{
                console.log("Formulario enviado");
              }}
      >

        {( {handleSubmit} ) => (
          <form className='formLogin' onSubmit={handleSubmit}>
            <div className='titleForm'>Market Talentos</div>
            <img className="profilePhoto" src={profile} alt="profile" />
            <input type="text" placeholder='usuario' />
            <input type="text" placeholder='contraseña' />
            <button type='submit'>Ingresar</button>
            <span>crear una cuenta</span>
          </form>

        )}

      </Formik>

    </div>
  )
}

export default LoginAdmin