import React from 'react';
import '../style/styleTalentDetails.scss';
import CardTalent from '../components/cardTalent/CardTalent';

const TalentDetails = () => {
  return (
    <>
     
      <section className='talentDetails'>
        <div className='talentDetails__card'>
          <CardTalent />
        </div>
        <div className='talentDetails__line'></div>
        <div className='talentDetails__allCards'>

        </div>
      </section>
    </>
  )
}

export default TalentDetails