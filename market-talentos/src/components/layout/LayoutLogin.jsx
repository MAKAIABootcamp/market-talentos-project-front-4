import React, { useState } from "react";
import "./styleLayoutLogin.scss";
import usuario from "../../assets/icon/usuario.png";
import notification from "../../assets/notificacionespng.png";
import LogoMakaia from "../../assets/Logo.png";
import chatbot from "../../assets/chatbot.png";
import imgReturn from "../../assets/arrowleft.png";
import { NavLink, useNavigate } from "react-router-dom";
import { singOutAsync } from "../../redux/actions/usersActions";
import { useDispatch } from "react-redux";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const LayoutLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showExitButton, setShowExitButton] = useState(false);
  const [menuAbierto, setMenuAbierto] = useState(false);

  const handleToggleExitButton = () => {
    setShowExitButton(!showExitButton);
  };

  const handleExit = () => {
    dispatch(singOutAsync());
  };

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
      name: "Acerca de nosotros",
      path: "/about",
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
    },
  ];

  return (
    <>
      <header className="layoutLogin">
        <div className="__container-imgReturn">
          <figure
            onClick={() => navigate("/")}
            className="layoutLogin__figure-imgReturn"
          >
            <img src={imgReturn} alt="imgReturn" />
          </figure>
        </div>
        <div className="layoutTalent__container-logo">
        <figure className="layoutTalent__figure-logo">
          <img src={LogoMakaia} alt="logo de la empresa" />
        </figure>
      </div>

        <div className="layoutLogin__container-navLink">
          <ul className="layoutLogin__navbar-ul">
            {products.map((item) => (
              <li key={item.id}>
                <NavLink className={"layoutLogin__link"} to={item.path}>
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="layoutLogin__container-logins">
          <div>
            <img className="layoutLogin__chatbot" src={chatbot} alt="chatbot" />
          </div>
          <div>
            <img
              className="layoutLogin__notification"
              src={notification}
              alt="notification"
            />
          </div>
          <div
            className="layoutLogin_container-imgTalent"
            onClick={handleToggleExitButton}
          
          >
            <figure className="layoutLogin__card-figure"onClick={handleExit}>
              <img src={usuario} alt="imgTalent" />
            </figure>
            {/* Mostrar el botón de "Salida" (Exit) solo cuando se hace clic en la imagen de usuario */}
        
          
          </div>
        </div>
        <div className="layoutLogin__container-navLinks">
          {/* Mostrar el menú hamburguesa solo en pantallas pequeñas */}
          <IconButton
            edge="right"
            color="inherit"
            aria-label="menu"
            onClick={toggleMenu}
            className="layoutLogin__hamburger-icon" // Estilo para el ícono de hamburguesa
          >
            {menuAbierto ? (
              <MenuIcon onClick={toggleMenu} />
            ) : (
              <MenuIcon onClick={toggleMenu} />
            )}
          </IconButton>
        </div>
      </header>
      {/* Contenido del menú hamburguesa */}
    <Drawer
      anchor="right"
      open={menuAbierto}
      onClose={toggleMenu}
    >
        {menuAbierto ? <CloseIcon onClick={toggleMenu}  /> : <MenuIcon onClick={toggleMenu} />}
      <List>
        {products.map((item) => (
          <ListItem key={item.id} component={NavLink} to={item.path} onClick={toggleMenu}>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
      <div className='layoutLogin__container-login'>
        <div>
          <img className='layoutLogin__chatbot' src={chatbot} alt="chatbot" />
        </div>
        <div>
          <img className='layoutLogin__notification' src={notification} alt="notification" />
        </div>
        <div
          className='layoutLogin_container-imgTalent'
          onClick={handleToggleExitButton}
          
        >
          <figure className='layoutLogin__card-figure'>
            <img src={usuario} alt="imgTalent" onClick={() => dispatch(singOutAsync())} />
          </figure>
       
       
        </div>
      </div>
    </Drawer>
    </>
  );
};

export default LayoutLogin;
