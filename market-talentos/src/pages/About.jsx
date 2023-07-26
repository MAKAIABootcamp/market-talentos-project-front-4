import React from "react";
import LayoutHome from "../components/layout/LayoutHome";
import Footer from "../components/footer/Footer";
import "../style/styleAbout.scss";
import BackgroundImage1 from "../assets/pexels-fauxels-3184430.jpg";
import BackgroundImage2 from "../assets/meeting-594091.jpg";
import BackgroundImage3 from "../assets/pexels-fauxels-3184428.jpg";

const About = () => {
  const ValoresCoperativos = [
    {
      id: 1,
      imagen: BackgroundImage1,
      title: "Proposito",
      information:
        "En MAKAIA potenciamos capacidades para el desarrollo social desde la movilización de recursos, la innovación y la tecnología.",
    },
    {
      id: 2,
      imagen: BackgroundImage2,
      title: "Vision",
      information:
        "Cada persona y organización cuenta con la información y el conocimiento para aumentar oportunidades que les permitan transformarse integralmente y transformar su entorno.",
    },
    {
      id: 3,
      imagen: BackgroundImage3,
      title: "Valores",
      lista1: "1. Compromiso Social.",
      lista2: "2. Vanguardia e Innovación.",
      lista3: "3. Inclusión y Diversidad.",
      lista4: "4. Pensamiento Global.",
      lista5: "5. Integridad y Transparencia",
    },
  ];

  return (
    <>
      <LayoutHome />
      {ValoresCoperativos.map((item) => (
        <div
          className="container"
          key={item.id}
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}${item.imagen})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "700px",
            filter: "brightness(0.6)",
          }}
        >
          <div className="informacion">
            <h1>{item.title}</h1>
            <p>{item.information}</p>
            <p>
              <ul>
                <li>{item.lista1}</li>
                <li>{item.lista2}</li>
                <li>{item.lista3}</li>
                <li>{item.lista4}</li>
                <li>{item.lista5}</li>
              </ul>
            </p>
          </div>
        </div>
      ))}
      <Footer />
    </>
  );
};

export default About;
