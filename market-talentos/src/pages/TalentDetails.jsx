import React, { useEffect, useState } from 'react';
import '../style/styleTalentDetails.scss';
import CardTalent from '../components/cardTalent/CardTalent';
import LayoutTalents from '../components/layout/LayoutTalents';
import Footer from '../components/footer/Footer';
import { useParams } from 'react-router';
import bitacora from "../assets/bitacora.png";
import postulaciones from "../assets/postulaciones.png";
import progreso from "../assets/progreso.png";
import buscar from "../assets/search.png"
import WorkExperience from '../components/workExperience/WorkExperience';
import StudiesTalent from '../components/studiosTalent/StudiesTalent';
import { getTalentFromTalentsCollection } from '../services/talentsServices';

const TalentDetails = () => {
  const { id } = useParams();
  const [buttonVisibility, setButtonVisibility] = useState(false);

    useEffect(()=>{      
      async function fetchData() {
        const talent = await getTalentFromTalentsCollection(id);
      }
      fetchData();
    }, [])



  return (

    <div className='talentDetails'>
      <LayoutTalents />
      <section className='talentDetails__section' >
        <CardTalent />
        <div className='talentDetails__infoTalent'>

          <div className='talentDetails__statisticsTablew'>
            <div>
              <h1 className='talentDetails__title-progress'>Progreso</h1>
            </div>
            <div className='talentDetails__container-diaphragms'>
              <div className='talentDetails__container-bitacora'>
                <img src={bitacora} alt="bitacora" />
                {/* <span>Bitacora</span> */}
              </div>
              <div className='talentDetails__container-appliations'>
                <img src={postulaciones} alt="postulaciones" />
                {/* <span>Postulaciones</span> */}
              </div>
              <div className='talentDetails__container-progress'>
                <img src={progreso} alt="progreso" />
                {/* <span>Progreso</span> */}
              </div>
              <div className='talentDetails__container-search'>
                <img src={buscar} alt="buscar" />
                {/* <span>Buscar</span> */}
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

          <section className='talentDetails__workExperience'>
            {buttonVisibility ? <WorkExperience /> : <StudiesTalent />}
            {/* <WorkExperience/> */}
            {/* <StudiesTalent/> */}
          </section>

        </div>

      </section>
      <Footer />
    </div>

  )
}

export default TalentDetails