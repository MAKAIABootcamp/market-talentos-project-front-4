import React, { useEffect } from 'react'
import "../style/styleJobOffers.scss";
import { useDispatch, useSelector } from 'react-redux';
import { listOfferJob } from '../redux/actions/offerJobActions';

const JobOffers = () => {

  const dispatch = useDispatch();
  const offerJobList = useSelector((state) => state.offerJob);

  useEffect(() => {
    dispatch(listOfferJob())
  }, [dispatch]);

  return (
    <div className='offerJobContianer'>

      <h1 className='offerJobPageTitle'>Ofertas Laborales</h1>


      <article className='offerJobPhrase'>
        <p className="offerJobPhraseContent" >Las empresas están buscando talentos como el tuyo</p>
      </article>


      <div className='offersContainer'>
        <section className='OffersFiltersContainer'>
          <button className='offersFilterButton'>Todos</button>
          <button className='offersFilterButton'>Front-End</button>
          <button className='offersFilterButton'>Backend</button>
        </section>

        {offerJobList.offerJob?.map((offer, index) => {
          return <div className='offerCard'>
            <div className='offerTitleCharge'>
              <h2 className='TitleCharge'>{offer.cargo}</h2>
            </div>
            <div className='offerJobInformation'>
              <div className='offerSectionOne'>
                <p className='customName'>Empresa: {offer.empresa}</p>
                <p className='closeDate'>Fecha de cierre: {offer.closeDate}</p>
              </div>
              <div className='offerSectionTwo'>
                <p className='modality'>Modalidad: {offer.modalidad}</p>
                <p className='salary'>Salario: {offer.salary}</p>
              </div>
              <div className='offerSectionDescription'>
                {offer.description}
              </div>

              <div className='offerSectionButton'>
                <button className="applyButton" >Aplicar</button>
              </div>
            </div>
          </div>


        })
        }


      </div>
    </div>
  )
}

export default JobOffers