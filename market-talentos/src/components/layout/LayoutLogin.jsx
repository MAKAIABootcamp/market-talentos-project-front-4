import React from 'react';
import "./styleLayoutLogin.scss";
// import logo from "../../assets/Logo.png";
import imgReturn from "../../assets/arrowleft.png";
import { NavLink, useNavigate } from 'react-router-dom';
import { singOutAsync } from '../../redux/actions/usersActions';
import { useDispatch } from 'react-redux';
import imgExit from '../../assets/exit.png';

const LayoutLogin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const products = [
        {
            id: 1,
            name: "Home",
            path: "/"
        },
        {
            id: 2,
            name: "Acerca de nosotros",
            path: "/about"
        },

        {
            id: 3,
            name: "Blog",
            path: "/blog",
        },
        {
            id: 4,
            name: "Contáctenos",
            path: "/contacts",
        }
    ]

    return (
        <>
            <header className="layoutLogin">
                <div className='__container-imgReturn'>
                    <figure
                        onClick={() => navigate("/")}
                        className="layoutLogin__figure-imgReturn">
                        <img src={imgReturn} alt="imgReturn" />
                    </figure>
                </div>
                
                <div className="layoutLogin__container-navLink">
                    <ul className='layoutLogin__navbar-ul'>
                        {products.map((item) => (
                            <li key={item.id}>
                                <NavLink  className={"layoutHome__link"} to={item.path}>{item.name}</NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='layoutLogin__container-login'>
                    <div>
                        <button
                            className='layoutHome__button-exit'
                            onClick={() => dispatch(singOutAsync())}>
                            <figure className='layoutHome__figure-exit'>
                                <img src={imgExit} alt="exit" />
                            </figure>
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default LayoutLogin