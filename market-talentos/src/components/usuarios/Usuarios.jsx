import React from "react";
import UsuarioEmpresa from "../../assets/empresario.png";
import UsuarioTalento from "../../assets/usuario.png";
import UsuarioAdministrador from "../../assets/avataradmo.png";
import "./styledUsuarios.scss";
import { NavLink } from "react-router-dom";

const Usuarios = () => {
  return (
    <main className="main">
      <div className="main__containercolor">
        <div className="main__empresa">
          <img src={UsuarioEmpresa} alt="persona empresaria" />
          <h1>Usuario Empresa</h1>
          <p>Si no tienes cuenta</p>
          <NavLink to="/customer" activeClassName="active">
            <button className="main__button">Registrate</button>
          </NavLink>
        </div>
      </div>
      <div className="main__containertalentos">
        <div className="main__containercolor">
          <div className="main__talentos">
            <img src={UsuarioTalento} alt="persona empresaria" />
            <h1>Usuario Talento</h1>
            <p>Si no tienes cuenta</p>
            <NavLink to="/talents" activeClassName="active">
              <button className="main__button">Registrate</button>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="main__containeradministrador">
        <div className="main__containercolor">
          <div className="main__administrador">
            <img src={UsuarioAdministrador} alt="persona empresaria" />
            <h1>Administrador</h1>
            <NavLink to="/loginAdmin" activeClassName="active">
              <button className="main__button">Iniciar session</button>
            </NavLink>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Usuarios;
