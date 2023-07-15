import React from 'react'
import recruiterImage from "../assets/Business people writing agreement, shaking hands.jpg"
import "../style/styleOfferVacants.scss"

const OffertVacants = () => {
  return (
    <div className='offerVacantsContainer'>
     <form className='formOfferVacants'>
        <h2  className='OfferVacantTitle'>Nueva oferta laboral</h2>
        <input type="text" placeholder='Nombre del cargo' />
        <input type="text" placeholder='Fecha de cierre' />
        <input type="text" placeholder='Salario'/>
        <select name="modalidad" id="modalidad">
           <option value="virtual">Virtual</option>
           <option value="Presencial">Presencial</option>
        </select>
        <textarea name='decription' placeholder='Añade una descripción de la vacante'></textarea>
        <button className="offerVacantButton" type='submit'>Publicar</button>

        
     </form>

     <figure>
        <img className="recruiterImage" src={recruiterImage} alt="recruiter" />
     </figure>
    </div>
  )
}

export default OffertVacants


// import { addOfferJob } from './tuArchivoDeAcciones';

// // Llamada a la acción para agregar un trabajo
// const jobData = {
//   title: 'Título del trabajo',
//   description: 'Descripción del trabajo',
//   // ...otros datos del trabajo
// };

// addOfferJob(jobData);
