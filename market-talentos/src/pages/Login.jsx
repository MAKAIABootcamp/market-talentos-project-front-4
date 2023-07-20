import React from 'react';
import "../style/styleLogin.scss";
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

const Login = () => {

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
            Swal.fire(" Good job!", "ha iniciado exitosamente!", "success").then(
                () => {
                    console.log(uid);
                    if (TiposDeUsuarios == TALENTO) {
                        navigate("/talentDetails/" + uid);
                    } else {
                        navigate("/");

                    }
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
            <section className="login">
                <LayoutLogin />
                <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="login__container-logo">
                        <figure className="login__figure-logo">
                            <img src={logo} alt="logo" />
                        </figure>
                        <div className="login__container-validation">
                            
                            <div className="login__container-mail">
                                <div className="login__container-imgMail">
                                    <span className="login__span-mail"> Usuario</span>
                                </div>
                                <input
                                    type="email"
                                    name="inputEmail"
                                    id="inputEmail"
                                    className="login__input-login"
                                    autoComplete="off"
                                    placeholder="name@example.com"
                                    {...register("email")}
                                />
                                <p>{errors.email?.message}</p>
                            </div>
                            <div className="login__container-password">
                                <div className="login__container-imgPassword">
                                    <span className="login__span-mail">Contraseña</span>
                                </div>
                                <input
                                    type="password"
                                    name="inputPassword"
                                    id="inputPassword"
                                    className="login__input-login"
                                    autoComplete="off"
                                    placeholder="Contraseña"
                                    {...register("password")}
                                />
                                <p>{errors.password?.message}</p>
                            </div>
                            <div className="login__container-checkRecord">
                                <input
                                    type="checkbox"
                                    className="login__input-checkRemember"
                                    id="CheckboxRemember"
                                />
                                <label
                                    className="login__label-remember"

                                >
                                    Recuérdame
                                </label>
                            </div>
                            <div className="login__container-checkIn">
                                <button
                                    type="submit"
                                    id="btnCheIn"
                                    value="checkIn"
                                    className="login__button-checkIn"
                                    
                                >
                                    <strong>Ingresar</strong>
                                </button>
                            </div>
                            <div className="login__container-register">
                                <div className="login__container-spanRegister">
                                    <span className="login__span-register">
                                        No tienes cuenta
                                    </span>
                                </div>
                                <span
                                    type="submit"
                                    id="btnRegister"
                                    value="Register"
                                    className="login__span-registerLink"
                                    onClick={() => navigate("/formRegister")}
                                >
                                    Regístrate
                                </span>
                            </div>
                            <div className="login__provider">
                                {loginProvider.map((provider, index) => (
                                    <figure key={index} className="login__figure-provider">
                                        <img
                                            src={provider.image}
                                            alt={provider.name}
                                            className="login__icon-provider"
                                            onClick={() => {
                                                // handleLoginGoogleOrFacebook(provider.provider);
                                            }}
                                        />
                                    </figure>
                                ))}
                            </div>
                            <div className="login__container-copyRight">
                                <label className="login__label-footer">
                                    © 2023 - Bootcamp Makaia front end 4
                                </label>
                            </div>
                        </div>
                    </div>
                </form>
                <Footer />
            </section>
        </>
    )
}

export default Login