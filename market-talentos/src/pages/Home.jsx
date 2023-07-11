import React from "react";
import Layout from "../components/layout/Layout";
import bgHome from "../assets/bg-home.png"
import dev from "../assets/iconDev.png.png"
import Footer from "../components/footer/Footer";
import '../style/styleHome.scss'
// import TalentsAll2 from "../../src/pages/TalentsAll2";
// import TalentsAll from "./TalentsAll";

const Home = () => {
  return (
    <div>
      <Layout />

      {/* <TalentsAll/>  */}

      <p>¡Bienvenidos a nuestra plataforma de Talentos! <br />
        Encuentra aquí a los proximos desarrolladores que conformarán tu equipo de trabajo.</p>

      <div className="info__container">

        <div className="info__talents">
        
       {/* <TalentsAll2/> */}

        </div>

        <div className="info__bg">
          <img src={bgHome} alt="imagen_background" width={400} />
        </div>

        <div className="info__company">

          <div className="info__text">
          <p>Conectamos a nuestros Talentos con futuros empleadores</p>
          <img src={dev} alt="icon_dev" width={150} />
          </div>
       

        </div>

      </div>



      <Footer />
    </div>
  );
};

export default Home;
