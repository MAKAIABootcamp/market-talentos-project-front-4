import React from 'react';
import "./styledLayoutAdmin.scss";
import LogoMakaia from "../../assets/Logo.png";
import usuario from "../../assets/avataradmo.png";
import imgReturn from "../../assets/arrowleft.png"
import { NavLink, useNavigate } from 'react-router-dom';
import { singOutAsync } from '../../redux/actions/usersActions';
import { useDispatch } from 'react-redux';
import imgExit from '../../assets/exit.png';


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

            {/* <span className='layoutTalent__container-message'>Bienvenido Administrador</span> */}



          <ul className='layoutTalent__navbar-ulAd'>
            {products.map((item) => (
              <li key={item.id}>
                <NavLink  className={"layoutTalent__linkAd"} to={item.path}>{item.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className='layoutTalent__container-login'>
          <div className='layoutTalent__container-imgTalentAd'>
            <figure className='layoutTalent__card-figure'>
              <img src={usuario} alt="imgTalent" />
            </figure>
          </div>
          <div>
            <button
              className='layoutTalent__button-exitAd'
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