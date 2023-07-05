import React from "react";
import "./styledFooter.scss";
import Facebook from "../../assets/logo_facebook.png";
import Instagram from "../../assets/logo_instagram.png";
import Twitter from "../../assets/logo_twiter.png";
import Whatsapp from "../../assets/logo_whatsapp.png";

const Footer = () => {
  const RedSocials = [
    {
      id: 1,
      image: Facebook,
    },
    {
      id: 2,
      image: Instagram,
    },
    {
      id: 3,
      image: Twitter,
    },
    {
      id: 4,
      image: Whatsapp,
    },
  ];

  return (
    <footer className="footer">
      <div className="footer_redsocial">
        <figure>
          {RedSocials.map((redSocial) => (
            <img key={redSocial.id} src={redSocial.image} alt="Red Social" />
          ))}
        </figure>
      </div>
    </footer>
  );
};

export default Footer;
