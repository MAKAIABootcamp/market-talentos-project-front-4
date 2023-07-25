import React, { useState } from "react";
import LogoMakaia from "../../assets/Logo.png";
import "./styledLayoutHome.scss";
import { NavLink, useNavigate } from "react-router-dom";
import usuario from "../../assets/icon/usuario.png";
import { singOutAsync } from "../../redux/actions/usersActions";
import { useDispatch } from "react-redux";
import notification from "../../assets/notificacionespng.png";
import chatbot from "../../assets/chatbot.png";


const LayoutHome = () => {
  const navigate = useNavigate();
    const login = () =>{
        navigate("/login")

    } 
  const dispatch = useDispatch();
  const [showExitButton] = useState(false);

 

  const handleExit = () => {
    dispatch(singOutAsync());
  };

  const products = [
    {
      id: 1,
      name: "Acerca de nosotros",
      path: "/about",
    },

    {
      id: 2,
      name: "Blog",
      path: "/blog",
    },

    {
      id: 3,
      name: "Contáctenos",
      path: "/contacts",
    },
  ];

  return (
    <>
      <header className="layoutHome">
        <div className="layoutHome__container-logo">
          <figure className="layoutHome__figure-logo">
            <img src={LogoMakaia} alt="logo de la empresa" />
          </figure>
        </div>
        <div className="layoutHome__container-navLink">
          <ul className="layoutHome__navbar-ul">
            {products.map((item) => (
              <li key={item.id}>
                <NavLink
                  path={item.path}
                  className={"layoutHome__link"}
                  to={item.name}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="layoutHome__container-login">
          <div>
            <img className="layoutHome__chatbot" src={chatbot} alt="chatbot" />
          </div>
          <div>
            <img
              className="layoutHome__notification"
              src={notification}
              alt="notification"
            />
          </div>
          <div
            className="layoutHome_container-imgTalent"
                    >
            <figure className="layoutHome__card-figure">
              <img src={usuario} alt="imgTalent" onClick={login}  />
            </figure>
            {/* Mostrar el botón de "Salida" (Exit) solo cuando se hace clic en la imagen de usuario */}
            {showExitButton && (
              <button className="layoutHome__button-exit" onClick={handleExit}>
                Salir
              </button>
            )}
          </div>
        </div>
     
      </header>
    </>
  );
};

export default LayoutHome;
