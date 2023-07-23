import React, { useState } from 'react';
import "./styleLayoutTalents.scss";
import LogoMakaia from "../../assets/Logo.png";
import usuario from "../../assets/avataradmo.png";
import notification from "../../assets/notificacionespng.png";
import chatbot from "../../assets/chatbot.png";
// import down from "../../assets/chevron-down.svg"
import imgReturn from "../../assets/arrowleft.png"
import { NavLink, useNavigate } from 'react-router-dom';
import { singOutAsync } from '../../redux/actions/usersActions';
import { useDispatch } from 'react-redux';

const LayoutTalents = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showExitButton, setShowExitButton] = useState(false);

  const handleToggleExitButton = () => {
    setShowExitButton(!showExitButton);
  }

 
  // const handleExit = () => {
  //   dispatch(singOutAsync());
  // }

  const products = [
    {
      id: 1,
      name: "Home",
      path: "/",
      // img: down
    },
    {
      id: 2,
      name: "Ofertas Laborales",
      path: "/talentOfferJob",
      // img:down
    },
    {
      id: 3,
      name: "Mis Postulaciones",
      path: "/jobTalent",
      // img: down
    },
    {
      id: 4,
      name: "Blog",
      path: "/blog",
      // img: down
    }
  ];

  return (
    <>
      <header className="layoutTalent">
        <div className='layoutTalent__container-imgReturn'>
          <figure
            onClick={() => navigate("/")}
            className="layoutTalent__figure-imgReturn"
          >
            <img src={imgReturn} alt="imgReturn" />
          </figure>
        </div>
        <div className="layoutTalent__container-logo">
          <figure className="layoutTalent__figure-logo">
            <img src={LogoMakaia} alt="logo de la empresa" />
          </figure>
        </div>
        <div className="layoutTalent__container-navLink">
          <ul className='layoutTalent__navbar-ul'>
            {products.map((item) => (
              <li key={item.id}>
                
                <NavLink className={"layoutTalent__link"} to={item.path}>{item.name}</NavLink>
                {/* <img src={item.img} alt={item.name} /> */}
              </li>
              
            ))}
          </ul>
        </div>
        <div className='layoutTalent__container-login'>
          <div>
          <img  className='layoutTalent__chatbot'src={chatbot} alt="chatbot" />
          </div>
          <div>
          <img  className='layoutTalent__notification'src={notification} alt="notification" />
          </div>
          <div
            className='layoutTalent_container-imgTalent'
            onClick={handleToggleExitButton}
            onMouseEnter={() => setShowExitButton(true)}
            onMouseLeave={() => setShowExitButton(false)}
          >
            <figure className='layoutTalent__card-figure'>
              <img src={usuario} alt="imgTalent"   onClick={() => dispatch(singOutAsync())} />
            </figure>
            {/* Mostrar el botón de "Salida" (Exit) solo cuando se hace clic en la imagen de usuario */}
            {showExitButton && (
              <button
                className='layoutTalent__button-exit'
              
              >
                Salir
              </button>
            )}
          </div>
       
        </div>
      </header>
    </>
  )
}

export default LayoutTalents;
