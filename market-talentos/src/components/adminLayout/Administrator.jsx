import React from 'react'
import { Outlet } from 'react-router-dom'
import LogoMakaia from "../../assets/makaia.png";
import "./styleAdministrador.scss";
import logOut from "../../assets/box-arrow-right.svg"
import profilePhoto from "../../assets/3135768.png"
import dashboard from "../../assets/clipboard2-data-fill.svg"
import talentos from "../../assets/brush.svg"
import empresas from "../../assets/briefcase-fill.svg"
import mapeos from "../../assets/diagram-3.svg"
import referidos from "../../assets/chat-square-dots.svg"


const Administrator = () => {
  return (
    <>
      <div >
        <figure className="headerAdmin__logomakaia">
          <img src={LogoMakaia} alt="logo de la empresa" />
        </figure>
        <header className="headerAdmin">
          <h1 className='headerAdmin__title'>ADMINISTRADOR</h1>
          <figure className='headerAdmin__logout'>
            <img className="logoLogout" src={logOut} alt="Log out" />
            <p className='wordLogout'>Logout</p>
          </figure>
          <div className="headerAdmin__navbar">
            <div className="headerAdmin__container">
              <div className="headerAdmin__info">

              </div>
            </div>
          </div>
        </header>

        <section className='sideBar'>
          <figure className='sideBar__profile'>
            <img className="profilePhoto" src={profilePhoto} alt="profile admin" />
            <p className='nameAdmin'>Pepito Perez</p>
          </figure>
          <ul className='sideBar__items'>
            <li className='itemOption'> <img className="iconAdmin" src={dashboard} alt="dasboard" />Dashboards</li>
            <li className='itemOption'> <img className="iconAdmin" src={talentos} alt="talentos" />Talentos</li>
            <li className='itemOption'> <img className="iconAdmin" src={empresas} alt="empresas" />Empresas</li>
            <li className='itemOption'> <img className="iconAdmin" src={mapeos} alt="mapeos" />Mapeos</li>
            <li className='itemOption'> <img className="iconAdmin" src={referidos} alt="referidos" />Referidos</li>
          </ul>
        </section>

        <footer className='footerAdmin'>
          <p className='footerAdmin__parrafo'>Soporte técnico</p>
        </footer>

      </div>
      <Outlet />
    </>
  )
}

export default Administrator