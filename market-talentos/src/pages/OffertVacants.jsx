import React, { useEffect, useState } from 'react';
import recruiterImage from "../assets/Business people writing agreement, shaking hands.jpg";
import "../style/styleOfferVacants.scss";
import { useDispatch, useSelector } from 'react-redux';
import { addOfferJob, searchOffer, updateOfferJob } from '../redux/actions/offerJobActions';

const OffertVacants = () => {

   const offerJobSelected = useSelector((state) => state.offerJob);
   const dispatch = useDispatch();

   
   const [formData, setFormData] = useState({
      empresa: "",
      cargo: '',
      closeDate: '',
      salary: '',
      modalidad: '',
      description: '',
   });


   const [formData2, setFormData2] = useState({
      empresa: offerJobSelected.offerJob.empresa,
      cargo: offerJobSelected.offerJob.cargo,
      closeDate: offerJobSelected.offerJob.closeDate,
      salary: offerJobSelected.offerJob.salary,
      modalidad: offerJobSelected.offerJob.modalidad,
      description: offerJobSelected.offerJob.description,
   });

   useEffect(() => {
      if (offerJobSelected.offerJob.length === 1) {
         const selectedOffer = offerJobSelected.offerJob[0];
         setFormData2({
            empresa: selectedOffer.empresa,
            cargo: selectedOffer.cargo,
            closeDate: selectedOffer.closeDate,
            salary: selectedOffer.salary,
            modalidad: selectedOffer.modalidad,
            description: selectedOffer.description,
         });
      }
   }, [offerJobSelected]);

   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const handleChange2 = (e) => {
      setFormData2({ ...formData2, [e.target.name]: e.target.value });
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

   const handleEditSubmit = (e) => {
      e.preventDefault();
      dispatch(updateOfferJob(formData2, offerJobSelected.offerJob[0].id));
   };

   return (
      <div className='offerVacantsContainer'>
         {offerJobSelected.offerJob.length > 1 ? (
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
         </form>) : (


         // Formulario para editar una ofeta laboral que fue creada

            <form className='formOfferVacants' onSubmit={handleEditSubmit}>

               <h2 className='OfferVacantTitle'>Edita la oferta laboral</h2>

               <input
                  type="text"
                  placeholder='Nombre de la empresa'
                  name="empresa"
                  value={formData2.empresa}
                  onChange={handleChange2}
               />

               <input
                  type="text"
                  placeholder='Nombre del cargo'
                  name="cargo"
                  value={formData2.cargo}
                  onChange={handleChange2}
               />
               <input
                  type="text"
                  placeholder='Fecha de cierre'
                  name="closeDate"
                  value={formData2.closeDate}
                  onChange={handleChange2}
               />
               <input
                  type="text"
                  placeholder='Salario'
                  name="salary"
                  value={formData2.salary}
                  onChange={handleChange2}
               />
               <select
                  name="modalidad"
                  id="modalidad"
                  value={formData2.modalidad}
                  onChange={handleChange2}
               >
                  <option value="virtual">Virtual</option>
                  <option value="Presencial">Presencial</option>
               </select>
               <textarea
                  name='description'
                  placeholder='Añade una descripción de la vacante'
                  value={formData2.description}
                  onChange={handleChange2}
               ></textarea>
               <button className="offerVacantButton" type='submit'>Editar</button>
            </form>
         )}
         <figure>
            <img className="recruiterImage" src={recruiterImage} alt="recruiter" />
         </figure>
      </div>
   );
};

export default OffertVacants;



