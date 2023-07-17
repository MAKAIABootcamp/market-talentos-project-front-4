import React from 'react';
import LogoMakaia from "../../assets/Logo.png";
import "./styledLayoutHome.scss";
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { singOutAsync } from '../../redux/actions/usersActions';
import usuario from "../../assets/avataradmo.png"

const LayoutHome = () => {

    const products = [
        {
            id: 1,
            name: "Acerca de nosotros",
            path: "/about"
        },
        {
            id: 2,
            name: "Ofertas Laborales",
            path: "/jobOffers",
        },
        {
            id: 3,
            name: "Blog",
            path: "/blog",
        },
        ,
        {
            id: 4,
            name: "Contáctenos",
            path: "/contacts",
        }
    ]
    const dispatch = useDispatch();

    return (
        <>
            <header className="layoutHome">
                <div className="layoutHome__container-logo">
                    <figure className="layoutHome__figure-logo">
                        <img src={LogoMakaia} alt="logo de la empresa" />
                    </figure>
                </div>
                <div className="layoutHome__container-navLink">
                    <ul className='layoutHome__navbar-ul'>
                        {products.map((item) => (
                            <li key={item.id}>
                                <NavLink path={item.path} className={"layoutHome__link"} to={item.name}>{item.name}</NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='layoutHome__container-login'>
                    <div className='layoutHome__container-imgTalent'>
                        <figure className='layoutHome__card-figure'>
                            <img src={usuario} alt="imgTalent" />
                        </figure>
                    </div>
                    <div>
                        <select className='layoutHome__select'>
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

export default LayoutHome