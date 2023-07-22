import React from 'react';
import "./styledLayoutAdmin.scss";
import LogoMakaia from "../../assets/Logo.png";
import usuario from "../../assets/avataradmo.png";
import imgReturn from "../../assets/arrowleft.png"
import { NavLink, useNavigate } from 'react-router-dom';
import { singOutAsync } from '../../redux/actions/usersActions';
import { useDispatch } from 'react-redux';
import imgExit from '../../assets/exit.png';


const LayoutAdmin = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const products = [
    {
      id: 1,
      name: "Home",
      path: "/homeadmins"
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
  
  return (
    <>
      <header className="layoutTalent">
        <div className='layoutTalent__container-imgReturn'>

          <figure
            onClick={() => navigate("/")}
            className="layoutTalent__figure-imgReturn">
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
                <NavLink  className={"layoutTalent__link"} to={item.path}>{item.name}</NavLink>
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

export default LayoutAdmin;