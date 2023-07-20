import React from "react";
import "./styleAdministrador.scss";
import LayoutHomeCompany from "../layouthomeCompany/LayoutHomeCompany";
import Footer from "../../components/footer/Footer";

const Administrator = () => {

  return (
    
    <>
      <LayoutHomeCompany />
      <main className="main">
        <section className="main__containerDasboard">
          <div className="main__containerToday">contenedor 1</div>
          <div className="main__containerBalance">contenedor 2</div>
        </section>
        <section className="main__containerOrders">
          <div className="main__containerRecent">container 3</div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Administrator;
