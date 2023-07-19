import React from "react";
import "./styledFooter.scss";
import { NavLink } from "react-bootstrap";
import makaia from "../../assets/makaia.png";
import facebook from "../../assets/facebook.png";
import twiter from "../../assets/twiter.png";
import whatsapp from "../../assets/whatsap.png";
import linkedin from "../../assets/linkend.png";
import ImagEmail from "../../assets/email.png"

const Footer = () => {

  const products = [
    {
      id: 1,
      name: 'talentos',
      path: '/home',
    },
    {
      id: 2,
      name: 'Ofertas Laborales',
      path: '/jobOffers',
    },
    {
      id: 3,
      name: 'Clientes',
      path: '/Customer',
    }

  ]

  const resource = [
    {
      id: 1,
      name: 'Blog',
      path: '/blog',
    },
    {
      id: 2,
      name: 'Seminarios Web',
      path: '/webinars',
    }
  ]
  const company = [
    {
      id: 1,
      name: 'Acerca de nosotros',
      path: '/about',
    },
    {
      id: 2,
      name: 'Únete a nosotros',
      path: '/joinUs',
    }
  ]

  const networks = [
    {
      id: 1,
      image: facebook,
    },
    {
      id: 2,
      image: twiter,
    },
    {
      id: 3,
      image: whatsapp,
    },
    {
      id: 4,
      image: linkedin,
    },
  ];

  return (
    <footer className="footer">
      <div className="footer__information">
        <div className="footer__logo">
          <figure className="footer__figure-logo">
            <img src={makaia} alt="logo" />
          </figure>
        </div>
        <div className="footer__infoProducts">
          <span>Productos</span>
          <ul className='footer__ul'>
            {products.map((item) => (
              <li key={item.id}>
                <NavLink path={item.path} className={"footer__link"} to={item.name}>{item.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__infoProducts">
          <span>Recursos</span>
          <ul className='footer__ul'>
            {resource.map((item) => (
              <li key={item.id}>
                <NavLink path={item.path} className={"footer__link"} to={item.name}>{item.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__infoProducts">
          <span>Compañia</span>
          <ul className='footer__ul'>
            {company.map((item) => (
              <li key={item.id}>
                <NavLink path={item.path} className={"footer__link"} to={item.name}>{item.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__infoSubscription">
          <span className="footer__span-title">Suscríbete a nuestro boletín</span>
          <span className="footer__span-subTitle">Para anuncios de productos e información exclusiva</span>
          <div className="footer__container-subscription">
            <img src={ImagEmail} alt="mail" />
            <span>Ingrese su correo electrónico</span>
            <button>suscribir</button>
          </div>
        </div>
      </div>
      <div className="footer__container-networks">
        <div className="footer__language">
          <button>ingles</button>
        </div>
        <div className="footer__copyRight">
          <span>© 2023 - Bootcamp Makaia - Cuarta Cohorte </span>
          <span>| Elisabeth Ospina | Diana Pinzon | Gesiel Gimenez | Santiago Gómez | Diego Meriño |.</span>
        </div>
        <div className="footer__icon-networks">
          {networks.map((redSocial) => (
            <figure className="footer__figure" key={redSocial.id}>
              <img src={redSocial.image} alt="Red Social" />
            </figure>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
