import React from "react";
import LogoMakaia from "../../assets/makaia.png";
import "./styledLayout.scss";

const Layout = () => {
  const links = [
    {
      id: 1,
      name: "Somos MAKAIA",
    },
    {
      id: 2,
      name: "Contactanos",
    },
    {
      id: 3,
      name: "Experiencias",
    },
    {
      id: 4,
      name: "Nuevo Talento",
    },
    {
      id: 5,
      name: "Informacion interes",
    },
    {
      id: 6,
      name: "Blog",
    },
  ];

  return (
    <div>
        <figure className="header__logomakaia">
          <img src={LogoMakaia} alt="logo de la empresa" />
        </figure>
      <header className="header">
        <div className="header__navbar">
          <div className="header__navbarlink">
            {links.map((link) => (
              <button className="header__button" key={link.id}>
                {link.name}
              </button>
            ))}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Layout;
