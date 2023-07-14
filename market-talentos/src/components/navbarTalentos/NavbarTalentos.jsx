import React from "react";
import "./styledNavbarTalentos.scss";
import LogoMakaia from "../../assets/Logo.png";
import { singOutAsync } from "../../redux/actions/usersActions";
import { useDispatch } from "react-redux";


const NavbarTalentos = () => {
  const dispatch = useDispatch();

  return (
    <section className="navbarTalentos">
      <figure className="navbarTalentos__logo">
        <img src={LogoMakaia} alt="logo de la empresa" />
      </figure>
      <div className="navbarTalentos__container">
      <button className="navbarTalentos__logout" 
      onClick={() => dispatch(singOutAsync())}>salir</button>
      </div>
    </section>
  );
};

export default NavbarTalentos;
