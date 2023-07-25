import React, { useState } from "react";
import "../style/styleContactanos.scss";
import LayoutHome from '../components/layout/LayoutHome'
import Footer from '../components/footer/Footer'
function Contactenos() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Datos enviados:", formData);

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
   <LayoutHome/>
    <div className="formulario">
      <h1>Formulario de Contacto</h1>
      <form onSubmit={handleSubmit}>
        <div className="container__form1">
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Apellido:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Correo Electrónico:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        </div>
        <div className="message">
          <label>Mensaje:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
    <Footer/>
    </>
  );
}

export default Contactenos;
