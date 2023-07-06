import React from "react";
import "../style/styleTalentOfferJob.scss";
import logoMakaia from "../assets/icon/logoMakaia.png"

const TalentOfferJob = () => {
  const jobsButtons = [
    {
      id: 1,
      name: "Magenta Developer",
      cargo: "FrontEnd",
      changeStatus: "Más Información",
    },
    {
      id: 2,
      name: "Soluciones web S.A",
      cargo: "BackEnd",
      changeStatus: "Más Información",
    },
    {
      id: 3,
      name: "Desing Red",
      cargo: "FullStack",
      changeStatus: "Más Información",
    },
    {
      id: 4,
      name: "Develop Juniors",
      cargo: "BackEnd ",
      changeStatus: "Más Información",
    },
    {
      id: 5,
      name: "Ingeniers web",
      cargo: "FrontEnd ",
      changeStatus: "Más Información",
    },
  ];

  return (
    <section className="talentOffer">
        
      <div className="talentOffer__container">
       <img src={logoMakaia} alt="logoMakaia" />
       
        <div className="talentOffer__container-infojob">
          <button className="talentOffer__button-otherjobs">
            Ofertas Laborales
          </button>
          {/* <div className="talentOffer__container-other"> </div> */}

          <div className="talentOffer__container-infojobs">
            {jobsButtons.map((button, index) => (
              <button className="talentOffer__button-costumer" key={index}>
                {button.name}

                <span className="talentOffer__button-job">{button.cargo}</span>

                <span className="talentOffer__button-changeinfo">
                  {button.changeStatus}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="talentOffer__aplicattionJob">
          <button className="talentOffer__button-offer">
            Fecha de Convocatoria: 24 - julio- 2023
          </button>
          <button className="talentOffer__button-offer">
            Cargo: Front End Developer Junior
          </button>
          <button className="talentOffer__button-requ">
            Requerimientos: Desarrollar la parte visual de la aplicación web
            Diseñar interfaces con foco en UX/UI Conectar interfaces con los
            servicios de backend Brindar soporte al software de producción
          </button>
          <button className="talentOffer__button-offer">
            Salario: 2´000.000
          </button>
          <button className="talentOffer__button-offer">
            Ciudad: Medellín
          </button>
          <button className="talentOffer__button-talentOffer">
            Aplicar
          </button>
        </div>
      </div>
    </section>
  );
};
//cambio pequeño//
export default TalentOfferJob;
