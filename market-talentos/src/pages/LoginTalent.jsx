import React from 'react'
import useOnClick from '../funtions/useOnClick';

const LoginTalent = () => {
  const handleClick = useOnClick();
  return (
    <>
      <section className='loginTalent'>
        <div className="loginTalent__container-logo">
          <figure className="container mb-4">
           <img src="" alt="" />
          </figure>
        </div>
        <div className="loginTalent__container-validation">
          <div className="loginTalent__container-title">
            <h3>Por Favor, Registrarse</h3>
          </div>
          <div className="loginTalent__container-mail">
            <div className="loginTalent__container-imgMail">
              <img src="" alt="" />
            </div>
            <input type="email" name="inputEmail" id="inputEmail" className="loginTalent__input-mail"
              placeholder="Dirección de correo electrónico"/>
          </div>
          <div class="loginTalent__container-password">
            <div class="loginTalent__container-imgPassword">
              <img src="" alt="" />
            </div>
            <input type="password" name="inputPassword" id="inputPassword" className="loginTalent__input-password"
              placeholder="Contraseña" />
          </div>
          <div class="loginTalent__container-checkRecord">
            <input type="checkbox" className="loginTalent__input-checkRemember" id="CheckboxRemember" />
            <label class="loginTalent__label-remember" for="CheckboxRemember">Recuérdame</label>
          </div>
          <div className="loginTalent__container-checkIn">
            <input type="button" id="btnRegistrarse" value="Registrarse" 
            className="loginTalent__input-checkRemember" 
            onClick={()=>handleClick("checkIn", "")} />
          </div>
          <div class="loginTalent__container-">
            <label className="loginTalent__label-footer" >© 2023 - Bootcamp Makaia front end 4</label>
          </div>
        </div>
      </section>
    </>
  )
}

export default LoginTalent