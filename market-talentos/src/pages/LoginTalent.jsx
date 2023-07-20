import React from "react";
import "../style/styleLoginTalent.scss";
import logo from "../assets/Logo.png";
import useOnClick from "../funtions/useOnClick";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { loginProvider } from "../services/dates";
import {
  // actionLoginGoogleOrFacebook,
  actionLoginAsync,
} from "../redux/actions/usersActions";
import { useNavigate } from "react-router";
import LayoutLogin from "../components/layout/LayoutLogin";
import Footer from "../components/footer/Footer";

const schema = yup.object({
  email: yup
    .string()
    .email("Debe ingresar un email")
    .required("Por favor ingresar su email"),
  password: yup.string().required("Por favor ingresar contraseña"),
});

const LoginTalent = () => {
  const navigate = useNavigate();
  const handleClick = useOnClick();
  const talentId = useSelector((store) => store.user.selectedTalentId);
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
  const { error } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log("esta es la informacio en data: ", data);
    dispatch(actionLoginAsync(data));
    console.log("este es el error: ", error);

    if (error) {
      Swal.fire("Oops!", `Ha ocurrido un error`, "error");
    } else {
      Swal.fire(" Good job!", "se has iniciado exitosamente!", "success").then(
        () => {
          navigate("/talentDetails");
          
        }
      );
    }
  };

  console.log(error);

  const handleLoginGoogleOrFacebook = (provider) => {
    // dispatch(actionLoginGoogleOrFacebook(provider));
  };

  return (
    <>
      <section className="loginTalent">
      <LayoutLogin/>
      <form className="loginTalent__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="loginTalent__container-logo">
          <figure className="loginTalent__figure-logo">
            <img src={logo} alt="logo" />
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
                onClick={() => handleClick("checkIn", "")}
              >
                <strong>Ingresar</strong>
              </button>
            </div>
            <div className="loginTalent__container-register">
              <div className="loginTalent__container-spanRegister">
                <span className="loginTalent__span-register">
                  No tienes cuenta
                </span>
              </div>
              <span
                type="submit"
                id="btnRegister"
                value="Register"
                className="loginTalent__span-registerLink"
                onClick={() => handleClick("formRegisTalent", "")}
              >
                Regístrate
              </span>
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
            <div className="loginTalent__container-copyRight">
              <label className="loginTalent__label-footer">
                © 2023 - Bootcamp Makaia front end 4
              </label>
            </div>
          </div>
        </div>
      </form>
      <Footer/>
      </section>
    </>
  );
};

export default LoginTalent;
