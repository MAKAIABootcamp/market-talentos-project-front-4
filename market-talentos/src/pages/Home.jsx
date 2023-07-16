import React from "react";
import Layout from "../components/layout/Layout";
import Footer from "../components/footer/Footer";
import Usuarios from "../components/usuarios/Usuarios";
import '../style/styleHome.scss'
import TalentsAll from "./TalentsAll";
import LayoutHome from "../components/layout/LayoutHome";

const Home = () => {
  return (
    <div>
      <LayoutHome/>
      <TalentsAll/> 
      <Footer />
    </div>
  );
};

export default Home;
