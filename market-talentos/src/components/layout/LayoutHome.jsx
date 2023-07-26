import React, { useState } from "react";
import LogoMakaia from "../../assets/Logo.png";
import "./styledLayoutHome.scss";
import { NavLink, useNavigate } from "react-router-dom";
import usuario from "../../assets/icon/usuario.png";
import { singOutAsync } from "../../redux/actions/usersActions";
import { useDispatch } from "react-redux";
import notification from "../../assets/notificacionespng.png";
import chatbot from "../../assets/chatbot.png";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material';



const LayoutHome = () => {
  const navigate = useNavigate();
  const [menuAbierto, setMenuAbierto] = useState(false);
  
  
  const login = () => {
    navigate("/login");
  };
  const dispatch = useDispatch();
  const [showExitButton] = useState(false);

  const handleExit = () => {
    dispatch(singOutAsync());
  };


  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
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
                  to={item.path}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="layoutHome__container-logins">
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
          <div className="layoutHome_container-imgTalent">
            <figure className="layoutHome__card-figure">
              <img src={usuario} alt="imgTalent" onClick={login} />
            </figure>
            {/* Mostrar el botón de "Salida" (Exit) solo cuando se hace clic en la imagen de usuario */}
            {showExitButton && (
              <button className="layoutHome__button-exit" onClick={handleExit}>
                Salir
              </button>
            )}
          </div>
        </div>
        <div className="layoutHome__container-navLinks">
        {/* Mostrar el menú hamburguesa solo en pantallas pequeñas */}

        <IconButton 
          edge="right"
          color="inherit"
          aria-label="menu"
          onClick={toggleMenu}
          className="LayoutHome__hamburger-icon" // Estilo para el ícono de hamburguesa
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
        {menuAbierto ? <CloseIcon onClick={toggleMenu} style={{ color: '#25ABBC', marginLeft: '10px', marginTop:'10px' }}  /> : <MenuIcon onClick={toggleMenu} />}

        <List>
        {products.map((item) => (
          <ListItem key={item.id} component={NavLink} to={item.path} onClick={toggleMenu}>
            <ListItemText primary={item.name}  style={{ color: '#25ABBC' }}/>
          </ListItem>
        ))}
      </List>
       
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
          <div className="layoutHome_container-imgTalent">
            <figure className="layoutHome__card-figure">
              <img src={usuario} alt="imgTalent" onClick={login} />
            </figure>
            {/* Mostrar el botón de "Salida" (Exit) solo cuando se hace clic en la imagen de usuario */}
            {showExitButton && (
              <button className="layoutHome__button-exit" onClick={handleExit}>
                Salir
              </button>
            )}
          </div>
        </div>
      
      </Drawer>

    </>
  );
};

export default LayoutHome;
