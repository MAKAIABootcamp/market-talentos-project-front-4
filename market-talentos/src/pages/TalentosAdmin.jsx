import React from "react";
import "../style/styleDashboard.scss";
import NavlinkAdmin from "../components/navlinAdmin/NavlinkAdmin";

const TalentosAdmin = () => {
  return (
    <section className="section">
      <NavlinkAdmin />
      <div className="section__container2">
        <div className="section__textdashboard">
          <h1>Dashboards</h1>
          <p>
            En éste sección podrás encontrar los indicadores basados en KPI's de
            la empresa gestora
          </p>
        </div>
        <div className="section__containerinfo">
          <div className="section__information1">INFORMACION 1</div>
          <div className="section__information2">INFORMACION 2</div>
          <div className="section__information3">INFORMACION 3</div>
        </div>
        <div>
          <h3>Talentos</h3>
        </div>
        <div>
          <table className="custom-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Cedula</th>
                <th>Fecha</th>
                <th>Estado</th>
                <th>Título 5</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dato 1</td>
                <td>Dato 2</td>
                <td>Dato 3</td>
                <td>Dato 4</td>
                <td>Dato 5</td>
              </tr>
              <tr>
                <td>Dato 6</td>
                <td>Dato 7</td>
                <td>Dato 8</td>
                <td>Dato 9</td>
                <td>Dato 10</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="section__container3">
        <div>
          <div>
            <h2>Updates</h2>
            <div className="section__updates"></div>
          </div>
          <div>
            <h2>Custome Review</h2>
            <div className="section__review"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalentosAdmin;
