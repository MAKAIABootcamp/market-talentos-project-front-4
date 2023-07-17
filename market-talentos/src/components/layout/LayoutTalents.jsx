import React from 'react';
import "./styleLayoutTalents.scss";
import LogoMakaia from "../../assets/Logo.png";
import usuario from "../../assets/avataradmo.png";
import imgReturn from "../../assets/arrowleft.png"
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { singOutAsync } from '../../redux/actions/usersActions';

const LayoutTalents = () => {

  const products = [
    {
      id: 1,
      name: "Home",
      path: "/"
    },
    {
      id: 2,
      name: "Ofertas Laborales",
      path: "/jobOffers",
    },
    {
      id: 4,
      name: "Mis Postulaciones",
      path: "/contacts",
    },
    {
      id: 5,
      name: "Blog",
      path: "/contacts",
    }
  ]
  const dispatch = useDispatch();
  return (
    <>
      <header className="layoutTalent">
        <div className='layoutTalent__container-imgReturn'>
          <figure className="layoutTalent__figure-imgReturn">
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
                <NavLink path={item.path} className={"layoutHome__link"} to={item.name}>{item.name}</NavLink>
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
            <select className='layoutTalent__select'>
              <option value=""></option>
              <option value="iniciar sesion">Iniciar Sesion</option>
              <option
                value="iniciar sesion"
                onClick={() => dispatch(singOutAsync())}
              >Cerrar Sesion</option>
            </select>
          </div>
        </div>
      </header>
    </>
  )
}

export default LayoutTalents;