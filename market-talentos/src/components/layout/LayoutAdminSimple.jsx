import React from 'react';
import "./styledLayoutAdmin.scss";
import LogoMakaia from "../../assets/Logo.png";
import usuario from "../../assets/avataradmo.png";
import imgReturn from "../../assets/arrowleft.png"
import { NavLink, useNavigate } from 'react-router-dom';
import { singOutAsync } from '../../redux/actions/usersActions';
import { useDispatch } from 'react-redux';
import imgExit from '../../assets/exit.png';
import hamburguer from "../../assets/list.svg"


const LayoutAdminS = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const products = [
    {
      id: 1,
      name: "Talentos",
      path: "/adminsT"
    },
    {
      id: 2,
      name: "Vacantes",
      path: "/jobOffers",
    },
    {
      id: 4,
      name: "Mis Dashboards",
      path: "/dash",
    }
  ]

  return (
    <>
      <header className="layoutAdmin">
        <div className='layoutAdmin__container-imgReturn'>

          <figure
            onClick={() => navigate("/")}
            className="layoutTalent__figure-imgReturn">
            <img src={imgReturn} alt="imgReturn" />
          </figure>
        </div>
        <div className="layoutAdmin__container-logo">
          <figure className="layoutTalent__figure-logo">
            <img src={LogoMakaia} alt="logo de la empresa" />
          </figure>
        </div>
        <div className="layoutAdmin__container-navLink">
          <input type="checkbox" id='check' />
          <label for="check">
            <img src={hamburguer} alt="hamburger" className='hamburguer' />
          </label>

          <ul className='layoutAdmin__navbar-ul'>
            {products.map((item) => (
              <li key={item.id}>
                <NavLink className="layoutAdmin__link" to={item.path}>{item.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className='layoutTalent__container-login'>
          <div className='layoutTalent__container-imgTalent'>
            <figure className='layoutTalent__card-figure'>
              <img src={usuario} alt="imgTalent" />
            </figure>
          </div>
          <div>
            <button
              className='layoutTalent__button-exit'
              onClick={() => dispatch(singOutAsync())}>
              <figure className='layoutTalent__figure-exit'>
                <img src={imgExit} alt="exit" />
              </figure>
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default LayoutAdminS;