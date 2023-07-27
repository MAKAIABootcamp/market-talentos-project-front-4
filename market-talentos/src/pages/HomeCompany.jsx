import React from 'react';
import Footer from "../components/footer/Footer";
import "../style/styleHomeCustom.scss";
import ButtonsFilter from '../components/buttonsFilter/ButtonsFilter';
import TalentsAllCompany from '../components/cardTalent/TalentsAllCompany';
import CardCompany from '../components/cardTalent/CardCompany';
import LayoutCompany from '../components/layout/LayoutCompany';

const HomeCompany = () => {
  
  return (
    <>
        <div className="company__layout">
        <LayoutCompany/>
      </div>
      <div className="company__container">
        <div className="company__container-cardCompany">
          <CardCompany />
          <div className="container__options"></div>
        </div>
        <div className="container2">
            <div className="talents__button-offert">
              <button>Agregar Oferta Laboral</button>
            {/* </div>
            <h1>Progreso</h1>
            <div className="companny__dashboard"> */}
          {/* <div className="company__progresocontainer">
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
          </div> */}
          </div>
          <div className="company__button">
            <ButtonsFilter/>
          </div>
          <div className="company__talentsall">
            <TalentsAllCompany/>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default HomeCompany