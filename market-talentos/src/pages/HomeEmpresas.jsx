import React from "react";
import Footer from "../components/footer/Footer";
import "../style/stylehomecompany.scss";
import TalentAllCompany from "../components/talentallcompany/TalentAllCompany";
import CardTalentCompany from "../components/cardTalentCompany/CardTalentCompany";
import LayoutHomeCompany from "../components/layouthomeCompany/LayoutHomeCompany";

const HomeEmpresas = () => {
  return (
    <>
      <div className="company__layout">
        <LayoutHomeCompany />
      </div>
      <div className="company__container">
        <div>
          <CardTalentCompany />
          <div className="container__options"></div>
        </div>
        <div className="container2">
          <div className="talents__button-offert">
            <button>Agregar Oferta Laboral</button>
          </div>
          <h1>Progreso</h1>
          <div className="companny__dashboard">
            <div className="company__bitacora">
              <h3>Bitacora</h3>
            </div>
            <div className="company__postulaciones">
              <h3>Postulaciones</h3>
            </div>
            <div className="company__progreso">
              <h3>Progreso</h3>
            </div>
            <div className="company__search">
              <h3>Search</h3>
            </div>
          </div>
          <div className="company__button">
            <button>TODOS</button>
            <button>FRONT END</button>
            <button>BACK END</button>
            <button>FULL STACK</button>
          </div>
          <div className="company__talentsall">
            <TalentAllCompany />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomeEmpresas;
