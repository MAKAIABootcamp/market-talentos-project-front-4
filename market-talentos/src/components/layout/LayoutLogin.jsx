import React, { useState } from 'react';
import "./styleLayoutLogin.scss";
// import logo from "../../assets/Logo.png";
import imgReturn from "../../assets/arrowleft.png";
import { NavLink, useNavigate } from 'react-router-dom';
import { singOutAsync } from '../../redux/actions/usersActions';
import usuario from "../../assets/avataradmo.png";
import { useDispatch } from 'react-redux';
// import imgExit from '../../assets/exit.png';
import notification from "../../assets/notificacionespng.png";
import chatbot from "../../assets/chatbot.png";


const LayoutLogin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [showExitButton, setShowExitButton] = useState(false);
  
    const handleToggleExitButton = () => {
      setShowExitButton(!showExitButton);
    }
  
    const handleExit = () => {
      dispatch(singOutAsync());
    }
    const products = [
        {
            id: 1,
            name: "Home",
            path: "/"
        },
        {
            id: 2,
            name: "Acerca de nosotros",
            path: "/about"
        },

        {
            id: 3,
            name: "Blog",
            path: "/blog",
        },
        {
            id: 4,
            name: "Contáctenos",
            path: "/contacts",
        }
    ]

 

    return (
        <>
            <header className="layoutLogin">
                <div className='__container-imgReturn'>
                    <figure
                        onClick={() => navigate("/")}
                        className="layoutLogin__figure-imgReturn">
                        <img src={imgReturn} alt="imgReturn" />
                    </figure>
                </div>
                
                <div className="layoutLogin__container-navLink">
                    <ul className='layoutLogin__navbar-ul'>
                        {products.map((item) => (
                            <li key={item.id}>
                                <NavLink  className={"layoutHome__link"} to={item.path}>{item.name}</NavLink>
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
            onClick={handleToggleExitButton}
            onMouseEnter={() => setShowExitButton(true)}
            onMouseLeave={() => setShowExitButton(false)}
          >
            <figure className="layoutHome__card-figure">
              <img src={usuario} alt="imgTalent" />
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
    )
}

export default LayoutLogin