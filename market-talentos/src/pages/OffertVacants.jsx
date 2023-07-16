import React, { useState } from 'react';
import recruiterImage from "../assets/Business people writing agreement, shaking hands.jpg";
import "../style/styleOfferVacants.scss";
import { useDispatch } from 'react-redux';
import { addOfferJob } from '../redux/actions/offerJobActions';

const OffertVacants = () => {
   const dispatch = useDispatch();
   const [formData, setFormData] = useState({
      empresa: "",
      cargo: '',
      closeDate: '',
      salary: '',
      modalidad: '',
      description: '',
   });

   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(addOfferJob(formData));
      setFormData({
         empresa: "",
         cargo: '',
         closeDate: '',
         salary: '',
         modalidad: '',
         description: '',
       });
   };

   return (
      <div className='offerVacantsContainer'>
         <form className='formOfferVacants' onSubmit={handleSubmit}>
            <h2 className='OfferVacantTitle'>Nueva oferta laboral</h2>

            <input
               type="text"
               placeholder='Nombre de la empresa'
               name="empresa"
               value={formData.empresa}
               onChange={handleChange}
            />

            <input
               type="text"
               placeholder='Nombre del cargo'
               name="cargo"
               value={formData.cargo}
               onChange={handleChange}
            />
            <input
               type="text"
               placeholder='Fecha de cierre'
               name="closeDate"
               value={formData.closeDate}
               onChange={handleChange}
            />
            <input
               type="text"
               placeholder='Salario'
               name="salary"
               value={formData.salary}
               onChange={handleChange}
            />
            <select
               name="modalidad"
               id="modalidad"
               value={formData.modalidad}
               onChange={handleChange}
            >
               <option value="virtual">Virtual</option>
               <option value="Presencial">Presencial</option>
            </select>
            <textarea
               name='description'
               placeholder='Añade una descripción de la vacante'
               value={formData.description}
               onChange={handleChange}
            ></textarea>
            <button className="offerVacantButton" type='submit'>Publicar</button>
         </form>
         <figure>
            <img className="recruiterImage" src={recruiterImage} alt="recruiter" />
         </figure>
      </div>
   );
};

export default OffertVacants;



