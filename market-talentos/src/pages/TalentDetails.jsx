import React from 'react';
import '../style/styleTalentDetails.scss';
import CardTalent from '../components/cardTalent/CardTalent';
import LayoutTalents from '../components/layout/LayoutTalents';
import Footer from '../components/footer/Footer';
import { useSelector } from 'react-redux';
import IconoExpert from '../assets/expertTalent.png';
import IconoExpert2 from '../assets/morradoexpert.png';
import bitacora from "../assets/bitacora.png";
import postulaciones from "../assets/postulaciones.png";
import progreso from "../assets/progreso.png";
import buscar from "../assets/search.png"

const TalentDetails = () => {
  const userStore = useSelector((store) => store.user.user);
  console.log(userStore);

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
                <img src={postulaciones}alt="postulaciones" />
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
            // onClick={() => handleClick("", "")}
            >Experiencia Laboral</button>
            <button className='talentDetails__button-custom'
            // onClick={() => handleClick("", "")}
            >Estudios</button>
          </div>
          <section className='talentDetails__workExperience'>
            <div className='talentDetails__container-workExperience'>
              <div className='talentDetails__container-imgCompany'>
                <figure className='talentDetails__figure-imgCompany'>
                  <img src={IconoExpert} alt="IconoExpert" />
                </figure>
              </div>
              <div className='talentDetails__container-infoCompany'>
                <h2 className='talentDetails__title-Company'><strong>Makaia</strong></h2>
                <div className='talentDetails__dateCompany'>
                  <img src="" alt="calendary" />
                  <span>febrero - 2023 </span>
                  <span>julio - 2023 </span>
                </div>
                <h2 className='talentDetails__title-rol'>Desarrolladora Front End</h2>
                <span className='talentDetails__funtions'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A praesentium quidem pariatur aperiam quas, amet aliquam quibusdam fuga quos consequuntur ex at possimus, rerum facere dolorum porro in officia repellat.</span>
              </div>
            </div>
            <div className='talentDetails__container-workExperience'>
              <div className='talentDetails__container-imgCompany'>
                <figure className='talentDetails__figure-imgCompany'>
                  <img src={IconoExpert2} alt="IconoExpert2" />
                </figure>
              </div>
              <div className='talentDetails__container-infoCompany'>
                <h2 className='talentDetails__title-Company'><strong>Makaia</strong></h2>
                <div className='talentDetails__dateCompany'>
                  <img src="" alt="calendary" />
                  <span>junio - 2021 </span>
                  <span>enero - 2022 </span>
                </div>
                <h2 className='talentDetails__title-rol'>Desarrolladora Front End</h2>
                <span className='talentDetails__funtions'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A praesentium quidem pariatur aperiam quas, amet aliquam quibusdam fuga quos consequuntur ex at possimus, rerum facere dolorum porro in officia repellat.</span>
              </div>
            </div>
          </section>

        </div>

      </section>
      <Footer />
      </div>
  
  )
}

export default TalentDetails