import React from 'react';
import "../workExperience/styleWorkExperience.scss";
import imgExp1 from "../../assets/icon/morradoexpert.png";
import imgExp2 from "../../assets/icon/expertTalent.png";

const WorkExperience = () => {
  return (
    <>
        <div className='workExperience__container-workExperience'>
              <div className='workExperience__container-imgCompany'>
                <figure className='workExperience__figure-imgCompany'>
                  <img src={imgExp1} alt="" />
                </figure>
              </div>
              <div className='workExperience__container-infoCompany'>
                <h2 className='workExperience__title-Company'><strong>MAKAIA</strong></h2>
                <div className='workExperience__dateCompany'>
                  <img src="" alt="calendary" />
                  <span>febrero - 2023 </span>
                  <span>julio - 2023 </span>
                </div>
                <h2 className='workExperience__title-rol'>Desarrolladora Front End</h2>
                <span className='workExperience__funtions'>Realizar página web empresarial en wordpress. // Asesoría y Manejo en Redes Sociales  // Elaborar los Informes requeridos por la entidad // Sistematizar la información.</span>
              </div>
            </div>
            <div className='workExperience__container-workExperience'>
              <div className='workExperience__container-imgCompany'>
                <figure className='workExperience__figure-imgCompany'>
                  <img src={imgExp2} alt="" />
                </figure>
              </div>
              <div className='workExperience__container-infoCompany'>
                <h2 className='workExperience__title-Company'><strong>GIANOVA</strong></h2>
                <div className='workExperience__dateCompany'>
                  <img src="" alt="calendary" />
                  <span>junio - 2021 </span>
                  <span>enero - 2022 </span>
                </div>
                <h2 className='workExperience__title-rol'>Desarrolladora Front End</h2>
                <span className='workExperience__funtions'>Realizar página web empresarial en wordpress. // Asesoría y Manejo en Redes Sociales  // Elaborar los Informes requeridos por la entidad // Sistematizar la información</span>
              </div>
            </div>
    </>
  )
}

export default WorkExperience