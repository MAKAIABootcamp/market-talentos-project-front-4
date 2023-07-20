import React from "react";
import "./styleLayoutHomeCompany.scss";
import LogoMakaia from "../../assets/Logo.png";
import usuario from "../../assets/avataradmo.png";
import imgReturn from "../../assets/arrowleft.png";
import { NavLink, useNavigate } from "react-router-dom";
import { singOutAsync } from "../../redux/actions/usersActions";
import { useDispatch } from "react-redux";
import imgExit from "../../assets/icon/exit.jpg";
const LayoutHomeCompany = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const products = [
    {
      id: 1,
      name: "Talentos",
      path: "/talentos",
    },
    {
      id: 2,
      name: "Vacantes",
      path: "/publicarofertas",
    },
    {
      id: 3,
      name: "DashBoards",
      path: "/dash",
    },
  ];
  return (
    <>
      <header className="layoutHomeCompany">
        <div className="layoutHomeCompany__container-imgReturn">
          <figure
            onClick={() => navigate("/")}
            className="layoutHomeCompany__figure-imgReturn"
          >
            <img src={imgReturn} alt="imgReturn" />
          </figure>
        </div>
        <div className="layoutHomeCompany__container-logo">
          <figure className="layoutHomeCompany__figure-logo">
            <img src={LogoMakaia} alt="logo de la empresa" />
          </figure>
        </div>
        <div className="layoutHomeCompany__container-navLink">
          <ul className="layoutHomeCompany__navbar-ul">
            {products.map((item) => (
              <li key={item.id}>
                <NavLink
                  className={"layoutHome__link"}
                  to={item.path}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="layoutHomeCompany__container-login">
          <div className="layoutHomeCompany__container-imgHomeCompany">
            <figure className="layoutHomeCompany__card-figure">
              <img src={usuario} alt="imgHomeCompany" />
            </figure>
          </div>
          <div>
            <button
              className="layoutHomeCompany__figure-exit"
              onClick={() => dispatch(singOutAsync())}
            >
              <img src={imgExit} alt="exit" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default LayoutHomeCompany;
