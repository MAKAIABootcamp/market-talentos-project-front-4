import React from "react";
import UsuarioEmpresa from "../../assets/empresario.png";
import UsuarioTalento from "../../assets/usuario.png";
import UsuarioAdministrador from "../../assets/avataradmo.png";
import "./styledUsuarios.scss";
import { NavLink } from "react-router-dom";

const Usuarios = () => {
  return (
    <main className="main">
      <NavLink to="/customer" activeClassName="active">
        <div className="main__empresa">
          <img src={UsuarioEmpresa} alt="persona empresaria" />
          <h1>Usuario Empresa</h1>
        </div>
      </NavLink>

      <NavLink to="/talents" activeClassName="active">
        <div className="main__talentos">
          <img src={UsuarioTalento} alt="persona empresaria" />
          <h1>Usuario Talento</h1>
        </div>
      </NavLink>

      <NavLink to="/loginAdmin" activeClassName="active">
        <div className="main__administrador">
          <img src={UsuarioAdministrador} alt="persona empresaria" />
          <h1>Administrador</h1>
        </div>
      </NavLink>
    </main>
  );
};

export default Usuarios;
