import React, { useState } from 'react';
import "./styleLayoutTalents.scss";
import LogoMakaia from "../../assets/Logo.png";
import usuario from "../../assets/icon/usuario.png";
import notification from "../../assets/notificacionespng.png";
import chatbot from "../../assets/chatbot.png";
import imgReturn from "../../assets/arrowleft.png"
import { NavLink, useNavigate } from 'react-router-dom';
import { singOutAsync } from '../../redux/actions/usersActions';
import { useDispatch } from 'react-redux';
import { Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const LayoutTalents = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showExitButton, setShowExitButton] = useState(false);
  const [menuAbierto, setMenuAbierto] = useState(false);

  const handleToggleExitButton = () => {
    setShowExitButton(!showExitButton);
  }

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  const products = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Ofertas Laborales",
      path: "/talentOfferJob",
    },
    {
      id: 3,
      name: "Mis Postulaciones",
      path: "/jobTalent",
    },
    {
      id: 4,
      name: "Blog",
      path: "/blog",
    }
  ];

  return (
    <>
    <header className="layoutTalent">
      <div className='layoutTalent__container-imgReturn'>
        <figure onClick={() => navigate("/")} className="layoutTalent__figure-imgReturn">
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
            </li>
          ))}
        </ul>
      </div>

      <div className='layoutTalent__container-logins'>
        <div>
          <img className='layoutTalent__chatbot' src={chatbot} alt="chatbot" />
        </div>
        <div>
          <img className='layoutTalent__notification' src={notification} alt="notification" />
        </div>
        <div
          className='layoutTalent_container-imgTalent'
          onClick={handleToggleExitButton}
          onMouseEnter={() => setShowExitButton(true)}
          onMouseLeave={() => setShowExitButton(false)}
        >
          <figure className='layoutTalent__card-figure'>
            <img src={usuario} alt="imgTalent" onClick={() => dispatch(singOutAsync())} />
          </figure>
          {showExitButton && (
            <button className='layoutTalent__button-exit'>
              Salir
            </button>
          )}
        </div>
      </div>

      <div className="layoutTalent__container-navLinks">
        {/* Mostrar el menú hamburguesa solo en pantallas pequeñas */}
        <IconButton 
          edge="right"
          color="inherit"
          aria-label="menu"
          onClick={toggleMenu}
          className="layoutTalent__hamburger-icon" // Estilo para el ícono de hamburguesa
        >
          {menuAbierto ? <MenuIcon onClick={toggleMenu} /> : <MenuIcon onClick={toggleMenu} />}
        </IconButton>
      </div>
    </header>

    {/* Contenido del menú hamburguesa */}


    <Drawer
      anchor="right"
      open={menuAbierto}
      onClose={toggleMenu}
      
      
    >
        {menuAbierto ? <CloseIcon onClick={toggleMenu} className="layoutTalent__close-icon" /> : <MenuIcon onClick={toggleMenu} />}
      <List>
        {products.map((item) => (
          <ListItem key={item.id} component={NavLink} to={item.path} onClick={toggleMenu}>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
      <div className='layoutTalent__container-login'>
        <div>
          <img className='layoutTalent__chatbot' src={chatbot} alt="chatbot" />
        </div>
        <div>
          <img className='layoutTalent__notification' src={notification} alt="notification" />
        </div>
        <div
          className='layoutTalent_container-imgTalent'
          onClick={handleToggleExitButton}
          onMouseEnter={() => setShowExitButton(true)}
          onMouseLeave={() => setShowExitButton(false)}
        >
          <figure className='layoutTalent__card-figure'>
            <img src={usuario} alt="imgTalent" onClick={() => dispatch(singOutAsync())} />
          </figure>
          {showExitButton && (
            <button className='layoutTalent__button-exit'>
              Salir
            </button>
          )}
        </div>
      </div>
    </Drawer>
  </>
  );
}

export default LayoutTalents;


