import React, { useEffect} from "react";
import "../style/styleLoginTalent.scss";
import logo from "../assets/Logo.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { loginProvider } from "../services/dates";
import {
  // actionLoginGoogleOrFacebook,
  actionLoginAsync } from "../redux/actions/usersActions";
import { useNavigate } from "react-router-dom";
import LayoutLogin from "../components/layout/LayoutLogin";
import { getLoggedUser } from "../redux/actions/userActions";
import { setIsLogged } from "../redux/actions/appActions";
import { Spinner } from '@chakra-ui/react';


const schema = yup.object({
  email: yup
    .string()
    .email("Debe ingresar un email")
    .required("Por favor ingresar su email"),
  password: yup.string().required("Por favor ingresar contraseña"),
});

const LoginTalent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loggedUser } = useSelector((store) => store.user);
  const { isLoading, isLogged } = useSelector((store) => store.appReducer);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(()=>{
    console.log("estoy entrando al login")
  }, [])

  useEffect(() => {
    console.log("loggedUser",loggedUser)
    if (loggedUser !== undefined && loggedUser !== null && loggedUser.length > 0) {
      const user = loggedUser[0];
      if (user.validateUser === true) {
        if(String(user.type) === 'administradores') {
          dispatch(setIsLogged(true));          
          setTimeout(() => {
            navigate('/homeadmins');
          }, 1000);
        }
        if(String(user.type) === 'talentos') {          
          dispatch(setIsLogged(true));
          setTimeout(() => {            
            navigate(`/talentDetails/${user.id}`);
          }, 1000);          
        }
        if(String(user.type) === 'empresas') {
          dispatch(setIsLogged(true));
          setTimeout(() => {
            navigate('/homecompany');
          }, 1000);
        }
      } else {
        Swal.fire({
          icon: "info",
          title: "falta aprobación por el administrador",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          navigate("/");
        })
          .catch((error) => {
            // Manejar errores en caso de que ocurra un problema durante el registro del usuario
            console.log(error);
          });
      }
    }
  }, [loggedUser]) 


  const onSubmit = (data) => {
    dispatch(actionLoginAsync(data));
    dispatch(getLoggedUser(data.email));
  };

  const handleRegister = () => {
    navigate('/formRegisTalent')
  }

  return (
    <>
      <section className="loginTalent">
        <LayoutLogin />
          <form className="loginTalent__form" onSubmit={handleSubmit(onSubmit)}>
            <div className="loginTalent__container-logo">
              <figure className="loginTalent__figure-logo">
                <img src={logo} alt="logo" />
              </figure>
              <div className="loginTalent__container-validation">
                <div className="loginTalent__container-mail">
                  <div className="loginTalent__container-imgMail">
                    <span className="loginTalent__span-mail"> Usuario</span>
                  </div>
                  <input
                    type="email"
                    name="inputEmail"
                    id="inputEmail"
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
                    id="CheckboxRemember"
                  />
                  <label
                    className="loginTalent__label-remember"
                  >
                    Recuérdame
                  </label>
                </div>
                <div className="loginTalent__container-checkIn">
                  <button
                    type="submit"
                    id="btnCheIn"
                    value="checkIn"
                    className="loginTalent__button-checkIn"
                    disabled={isLoading}
                  >
                    {isLoading?<Spinner size="md" />:<strong>Ingresar</strong>}

                  </button>
                </div>
                <div className="loginTalent__provider">
                  {loginProvider.map((provider, index) => (
                    <figure key={index} className="loginTalent__figure-provider">
                      <img
                        src={provider.image}
                        alt={provider.name}
                        className="loginTalent__icon-provider"
                        onClick={() => {
                          // handleLoginGoogleOrFacebook(provider.provider);
                        }}
                      />
                    </figure>
                  ))}
                </div>

                
                  <div className="loginTalent__container-register">
                    <div className="loginTalent__container-spanRegister">
                      <span className="loginTalent__span-register">
                        ¿No tienes cuenta?. Regístrate
                      </span>
                    </div>
                    <div className="loginTalent__container-buttonRegister">
                    <button 
                      type="button"
                      id="btnRegister"
                      value="Register"
                      className="loginTalent__button-registerLink"
                      onClick={() => handleRegister()}
                    >
                      Talento
                    </button>
                    <button
                      type="button"
                      id="btnRegister"
                      value="Register"
                      className="loginTalent__button-registerLink"
                      onClick={() => navigate('/formRegisTalent')}
                    >
                      Empresa
                    </button>
                    </div>
                  </div>
                
                <div className="loginTalent__container-copyRight">
                  <label className="loginTalent__label-footer">
                    © 2023 - Bootcamp Makaia front end 4
                  </label>
                </div>
              </div>
            </div>
          </form>      
      </section>
    </>
  );
};

export default LoginTalent;