import React from "react";
import "../style/styleJobApplicatioTalent.scss";
import imgTalent from "../assets/elisa.jpeg";

const JobApplicatioTalent = () => {
  const costumerButtons = [
  
      { id: 1, name: "Magenta Developer", status: "Entrevista", changeStatus: "Cambiar estado" },
      { id: 2, name: "Soluciones web S.A", status: "Inactivo", changeStatus: "Cambiar estado" },
      { id: 3, name: "Desing Red", status: "Pendiente", changeStatus: "Cambiar estado" },
      { id: 4, name: "Develop Juniors", status: "En proceso", changeStatus: "Cambiar estado" },
      { id: 5, name: "Ingeniers web", status: "Inactivo", changeStatus: "Cambiar estado" },

    ];
  

  return (
    <section className="jobtalent">
      <div className="jobtalent__container">
        <div className="jobtalent__container-infojob">
          <div className="jobtalent__container-infoContacts">
            <div className="jobtalent__container-imgTalent">
              <figure className="jobtalent__card-figure">
                <img src={imgTalent} alt="imgTalent" />
              </figure>
              <div className="jobtalent__line"></div>
              <div className="jobtalent__container-infoPnal">
                <span className="jobtalent__name">
                  <strong>Elisabeth Cristina</strong>
                </span>
                <span className="jobtalent__lastName">
                  <strong>Ospina Graciano</strong>
                </span>
                <span className="jobtalent__know">FrontEnd developer</span>
              </div>
            </div>
          </div>
          
            <div className="jobtalent__container-costumer">
              {costumerButtons.map((button, index) => (
                <button className="jobtalent__button-costumer" key={index}>
                  {button.name}
                  
                  <span className="jobtalent__button-status">{button.status}</span>
                  
                  <span className="jobtalent__button-changeStatus">
                    {button.changeStatus}
                  </span>
                </button>
              ))}
            </div>
            

            <button className="jobtalent__button-otherjobs">Añadir Postulación</button>
            <div className="jobtalent__container-other">
                <form action="">
                    <input className="jobtalent__button-other"  type="text" />
                    <button className="jobtalent__button-aceptar"> Aceptar</button>
                </form>
            </div>
            <button className="jobtalent__button-otherjobs">Ver Ofertas Laborales</button>
        </div>
      </div>
    </section>
  );
};

export default JobApplicatioTalent;
