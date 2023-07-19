import React from 'react';
import '../style/styleTalentDetails.scss';
import CardTalent from '../components/cardTalent/CardTalent';
import LayoutTalents from '../components/layout/LayoutTalents';
import Footer from '../components/footer/Footer';
import { useSelector } from 'react-redux';


const TalentDetails = () => {
  const userStore = useSelector((store) => store.user.user);
  console.log(userStore);
  
  return (
    <>
      <LayoutTalents />
    <h1>  aqui{userStore?userStore.email:""} 111 </h1>
    <h1>  aqui{userStore?userStore.lastName:""} 111 </h1>
      <section className='talentDetails'>
        <div className='talentDetails__card'>
          <CardTalent />
        </div>
        <div className='talentDetails__infoTalent'>
          <div className='talentDetails__statisticsTablew'>

          </div>
          <div className='talentDetails__container-filteres'>
            <button className='talentDetails__button-custom'
              // onClick={() => handleClick("", "")}
            >Experiencia Laboral</button>
            <button className='talentDetails__button-custom'
              // onClick={() => handleClick("", "")}
            >estudios</button>

          </div>
          <section className='talentDetails__workExperience'>

          </section>

        </div>

      </section>
      <Footer />
    </>
  )
}

export default TalentDetails