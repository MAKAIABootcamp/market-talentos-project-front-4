import React from "react";
import Footer from "../components/footer/Footer";
import '../style/styleHome.scss'
import LayoutHome from "../components/layout/LayoutHome";
import TalentsAll from "../components/cardTalent/TalentsAll";

const Home = () => {

    return (
    <>
    <section>
      <LayoutHome />

       <p>¡Bienvenidos a nuestra plataforma de <span>Talentos</span>! <br />
        Encuentra aquí a los próximos <span>desarrolladores</span> que conformarán tu equipo de trabajo.</p>

      <div className="info__container">
        <div className="info__search">
          <form className="info__form">
            <div>
              <label className="info__form1">
                <input type="text" placeholder="Buscar Talento" />
              </label>
            </div>
            <div>
              <label className="info__form2">
                <input type="select" placeholder="Front End" />
              </label>
            </div>
            <div>
              <label className="info__form3">
                <button>Search</button>
              </label>
            </div>
          </form>
        </div>
      </div>
      <div className="info__grid2">
        <TalentsAll/>
      </div>            
      <Footer />
      </section>
    </>
  );
};

export default Home;