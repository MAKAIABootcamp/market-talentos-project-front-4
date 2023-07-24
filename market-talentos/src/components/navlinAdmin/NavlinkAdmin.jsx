import React from "react";
import FotoEmpresa from "../../assets/logo admin 2.jpeg";
import LogoMakaia from "../../assets/Logo.png";
import { NavLink } from "react-router-dom";


const NavlinkAdminHome = () => {
  return (
    <div className="section__contenedor1">
      <figure className="section__logomakaia">
        <img src={LogoMakaia} alt="Logo de makaia" />
      </figure>
      <h3>Bienvenido (namecompany)</h3>
      <div className="section__infocompany">
        <figure className="section__logoadmin">
          <img src={FotoEmpresa} alt="" />
        </figure>
        <h3>Andres Martinez</h3>
        <h4>Company</h4>
      </div>
      <div className="section__containerbutton">
        <NavLink
          to="/buscarpizza"
          activeClassName="active"
          className="link-style"
        >
          <button>Dashboards</button>
        </NavLink>
        <NavLink
          to="/buscarpizza"
          activeClassName="active"
          className="link-style"
        >
          <button>Talentos</button>
        </NavLink>
        <NavLink
          to="/buscarpizza"
          activeClassName="active"
          className="link-style"
        >
          <button>Empresas</button>
        </NavLink>
        <NavLink
          to="/buscarpizza"
          activeClassName="active"
          className="link-style"
        >
          <button>Mapeos</button>
        </NavLink>
        <NavLink
          to="/buscarpizza"
          activeClassName="active"
          className="link-style"
        >
          <button>Referidos</button>
        </NavLink>
      </div>
    </div>
  );
};

export default NavlinkAdminHome;
