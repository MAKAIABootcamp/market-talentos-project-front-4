import React from "react";
import LayoutHome from "../components/layout/LayoutHome";
import Footer from "../components/footer/Footer";
import "../style/styleAbout.scss";
const About = () => {
  return (
    <>
      <LayoutHome />
      <section className="section">
        <div className="section-content">
          <h2 className="section-title">Qué es Lorem Ipsum</h2>
          <p className="section-paragraph">
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde el año 1500, cuando un impresor (N. del T.
            persona que se dedica a la imprenta) desconocido usó una galería de
            textos y los mezcló de tal manera que logró hacer un libro de textos
            especimen. 
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
