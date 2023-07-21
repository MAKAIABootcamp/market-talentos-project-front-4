import React, { useState } from 'react';
import '../style/styleTalentDetails.scss';
import CardTalent from '../components/cardTalent/CardTalent';
import LayoutTalents from '../components/layout/LayoutTalents';
import Footer from '../components/footer/Footer';
import { useSelector } from 'react-redux';
import WorkExperience from '../components/workExperience/WorkExperience';
import StudiesTalent from '../components/studiosTalent/StudiesTalent';


const TalentDetails = () => {

  const [buttonVisibility, setButtonVisibility] = useState(false);
  const [activeButton, setActiveButton] = useState(false);

 
  return (
    <>
      <LayoutTalents />
      <section className='talentDetails'>
        <div className='talentDetails__card'>
          <CardTalent />
        </div>
        <div className='talentDetails__infoTalent'>
          <div>
            <h1 className='talentDetails__title-progress'>Progreso</h1>
          </div>
          <div className='talentDetails__statisticsTablew'>
            <div className='talentDetails__container-diaphragms'>
              <div className='talentDetails__container-bitacora'>
                <span>Bitacora</span>
              </div>
              <div className='talentDetails__container-appliations'>
                <span>Postulaciones</span>
              </div>
              <div className='talentDetails__container-progress'>
                <span>Progreso</span>
              </div>
              <div className='talentDetails__container-search'>
                <span>Buscar</span>
              </div>
            </div>
          </div>
          <div className='talentDetails__container-filteres'>
            <button className='talentDetails__button-custom'
            
             onClick={() => setButtonVisibility(true)}
            >Experiencia Laboral</button>
            <button className='talentDetails__button-custom'
            onClick={() => setButtonVisibility(false)}
            >Estudios</button>
          </div>
           {buttonVisibility?<WorkExperience/>:<StudiesTalent />} 
          <section className='talentDetails__workExperience'>
            {/* <WorkExperience/> */}
          </section>
          <section className='talentDetails__workExperience'>
            {/* <StudiesTalent/> */}
          </section>

        </div>

      </section>
      <Footer />
    </>
  )
}

export default TalentDetails