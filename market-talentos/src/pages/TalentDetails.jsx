import React from 'react';
import '../style/styleTalentDetails.scss'
import CardTalent from '../components/cardTalent/CardTalent'
import TalentsAll from './TalentsAll';
import { useLocation, useParams } from 'react-router-dom';


const TalentDetails = ({route, navigate}) => {
  const {userId} = useLocation();

  console.log(useParams());
  console.log("userId: ", userId);
  return (
    <>
      <section className='talentDetails'>
        <div className='talentDetails__card'>
          <CardTalent id={userId} />
        </div>
        
        <div className='talentDetails__line'></div>
        <div className='talentDetails__allCards'>
          
        </div>
      </section>

    </>
  )
}

export default TalentDetails