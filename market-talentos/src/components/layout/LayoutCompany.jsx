import React, { useState } from 'react';
import "./styleLayoutCompany.scss";
import LogoMakaia from "../../assets/Logo.png";
import usuario from "../../assets/icon/usuario.png";
import notification from "../../assets/notificacionespng.png";
import chatbot from "../../assets/chatbot.png";
import imgReturn from "../../assets/arrowleft.png";
import { NavLink, useNavigate } from 'react-router-dom';
import { singOutAsync } from '../../redux/actions/usersActions';
import { useDispatch } from 'react-redux';
import { Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const LayoutCompany = () => {
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
      name: "Blog",
      path: "/blog",
    },
    {
      id: 3,
      name: "contáctenos",
      path: "/contacts",
    },
    
  ];
  const handleExit = () =>{
    dispatch(singOutAsync());
    navigate("/");
  }
  return (
    <>
    <header className="layoutCompany">
      <div className='layoutCompany__container-imgReturn'>
        <figure onClick={() => navigate("/")} className="layoutCompany__figure-imgReturn">
          <img src={imgReturn} alt="imgReturn" />
        </figure>
      </div>
      <div className="layoutCompany__container-logo">
        <figure className="layoutCompany__figure-logo">
          <img src={LogoMakaia} alt="logo de la empresa" />
        </figure>
      </div>

      <div className="layoutCompany__container-navLink">
        <ul className='layoutCompany__navbar-ul'>
          {products.map((item) => (
            <li key={item.id}>
              <NavLink className={"layoutCompany__link"} to={item.path}>{item.name}</NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className='layoutCompany__container-logins'>
        <div>
          <img className='layoutCompany__chatbot' src={chatbot} alt="chatbot" />
        </div>
        <div>
          <img className='layoutCompany__notification' src={notification} alt="notification" />
        </div>
        <div
          className='layoutCompany_container-imgTalent'
          onClick={handleToggleExitButton}
          onMouseEnter={() => setShowExitButton(true)}
          onMouseLeave={() => setShowExitButton(false)}
        >
          <figure className='layoutCompany__card-figure'>
            <img src={usuario} alt="imgTalent" onClick={() => dispatch(singOutAsync())} />
          </figure>
          {showExitButton && (
            <button className='layoutCompany__button-exit'
            onClick={() => dispatch(singOutAsync())}
            >
              Salir
              
            </button>
          )}
        </div>
      </div>

      <div className="layoutCompany__container-navLinks">
        {/* Mostrar el menú hamburguesa solo en pantallas pequeñas */}
        <IconButton 
          edge="right"
          color="inherit"
          aria-label="menu"
          onClick={toggleMenu}
          className="layoutCompany__hamburger-icon" // Estilo para el ícono de hamburguesa
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
            <ListItemText primary={item.name} style={{ color: '#25ABBC' }} />
          </ListItem>
        ))}
      </List>
      <div className='layoutCompany__container-login'>
        <div>
          <img className='layoutCompany__chatbot' src={chatbot} alt="chatbot" />
        </div>
        <div>
          <img className='layoutCompany__notification' src={notification} alt="notification" />
        </div>
        <div
          className='layoutCompany_container-imgTalent'
          onClick={handleToggleExitButton}
          onMouseEnter={() => setShowExitButton(true)}
          onMouseLeave={() => setShowExitButton(false)}
        >
          <figure className='layoutCompany__card-figure'>
            <img src={usuario} alt="imgTalent" onClick={handleExit} />
          </figure>
          {showExitButton && (
            <button className='layoutCompany__button-exit'>
              Salir
            </button>
          )}
        </div>
      </div>
    </Drawer>

    </>
  )
}

export default LayoutCompany