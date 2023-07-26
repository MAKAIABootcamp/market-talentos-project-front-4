import React from "react";
import Footer from "../components/footer/Footer";
import "../style/styleHome.scss";
import LayoutHome from "../components/layout/LayoutHome";
import TalentsAll from "../components/cardTalent/TalentsAll";

const Home = () => {
  return (
    <>
      <section className="home">
        <LayoutHome />

        <div className="home__container">
          <div className="home__title-container"> 
            <p className="home__title">
              ¡Bienvenidos a nuestra plataforma de <span>Talentos</span>! <br />
              Encuentra aquí a los próximos <span>desarrolladores</span> que
              conformarán tu equipo de trabajo.
            </p>
          </div>
          <div className="home__info-container">
            <div className="home__info-search">
              <form className="home__info-form">
                <div>
                  <label className="home__info-form1">
                    <input type="text" placeholder="Buscar Talento" />
                  </label>
                </div>
                <div>
                  <label className="home__info-form2">
                    <input type="select" placeholder="Front End" />
                  </label>
                </div>
                <div>
                  <label className="home__info-form3">
                    <button>Search</button>
                  </label>
                </div>
              </form>
            </div>
          </div>

          
          <div className="home__info-grid3">
            <TalentsAll />
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Home;
