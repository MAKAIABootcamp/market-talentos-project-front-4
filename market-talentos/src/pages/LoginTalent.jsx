import React from 'react';
import '../style/styleLoginTalent.scss';
import logoBootcamp from '../assets/makaia.png';
import useOnClick from '../funtions/useOnClick';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Swal from "sweetalert2";
import { useDispatch, useSelector } from 'react-redux';
import { loginProvider } from '../services/dates';
import {
  actionLoginAsync,
  actionLoginGoogleOrFacebook,
} from "../redux/actions/talent";
import { useNavigate } from 'react-router';

const schema = yup.object({
  email: yup
    .string()
    .email("Debe ingresar un email")
    .required("Por favor ingresar su email"),
  password: yup.string().required("Por favor ingresar contraseña"),
});

const LoginTalent = () => {

  const navigate = useNavigate()
  const handleClick = useOnClick();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },

  });
  const { error, errorMessage } = useSelector((store) => store.talentsStore);
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(actionLoginAsync(data));
    if (error) {
      Swal.fire("Oops!", `Ha ocurrido un error: ${errorMessage}`, "error");
    } else {
      Swal.fire(" Good job!", "se ha registrado exitosamente!", "success");
      navigate('talents');
    }
  };


  
  const handleLoginGoogleOrFacebook = (provider) => {
    dispatch(actionLoginGoogleOrFacebook(provider));
  };

  return (
    <>
      <form className='loginTalent' onSubmit={handleSubmit(onSubmit)}>
        <div className="loginTalent__container-logo">
          <figure className="loginTalent__figure-logo">
            <img src={logoBootcamp} alt="l" />
          </figure>
          <div className="loginTalent__container-validation">
            <div className="loginTalent__container-title">
              <h3>Por Favor, Registrarse</h3>
            </div>
            <div className="loginTalent__container-mail">
              <div className="loginTalent__container-imgMail">
                <span className="loginTalent__span-mail"> Usuario</span>
              </div>
              <input
                type="email"
                name="inputEmail" id="inputEmail"
                className="loginTalent__input-login"
                autoComplete="off"
                placeholder="name@example.com"
                {...register("email")}
              />
              <p>{errors.email?.message}</p>
            </div>
            <div className="loginTalent__container-password">
              <div className="loginTalent__container-imgPassword">
                <span className="loginTalent__span-mail">Contraseña</span>
              </div>
              <input
                type="password"
                name="inputPassword"
                id="inputPassword"
                className="loginTalent__input-login"
                autoComplete="off"
                placeholder="Contraseña"
                {...register("password")}
              />
              <p>{errors.password?.message}</p>
            </div>
            <div className="loginTalent__container-checkRecord">
              <input
                type="checkbox"
                className="loginTalent__input-checkRemember"
                id="CheckboxRemember" />
              <label className="loginTalent__label-remember" for="CheckboxRemember">Recuérdame</label>
            </div>
            <div className="loginTalent__container-checkIn">
              <button type="submit" id="btnCheIn" value="checkIn"
                className="loginTalent__input-checkIn"
                onClick={() => handleClick("checkIn", "")}>
                <strong>Ingresar</strong>
              </button>
            </div>
            <div className="loginTalent__container-register">
              <div className="loginTalent__container-spanRegister">
                <span className="loginTalent__span-register">No tienes cuenta</span>
              </div>
              <span type="submit" id="btnRegister" value="Register"
                className="loginTalent__span-registerLink"
                onClick={() => handleClick("registerTalent", "")}>
                Regístrate
              </span>
            </div>
            <div className='loginTalent__provider'>
              {loginProvider.map((provider, index) => (
                <figure className='loginTalent__figure-provider'>
                  <img
                    key={index}
                    src={provider.image}
                    alt={provider.name}
                    className='loginTalent__icon-provider'
                    onClick={() => {
                      handleLoginGoogleOrFacebook(provider.provider);
                    }}
                  />
                </figure>
              ))}
            </div>
            <div className="loginTalent__container-">
              <label className="loginTalent__label-footer" >© 2023 - Bootcamp Makaia front end 4</label>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default LoginTalent;