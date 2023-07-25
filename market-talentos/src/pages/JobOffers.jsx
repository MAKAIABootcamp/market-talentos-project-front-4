import React, { useEffect } from 'react'
import "../style/styleJobOffers.scss";
import { useDispatch, useSelector } from 'react-redux';
import { deleteOfferJob, listOfferJob } from '../redux/actions/offerJobActions';
import { searchOffer } from '../redux/actions/offerJobActions';
import LayoutAdmin from '../components/layout/LayoutAdmin';
import Footer from '../components/footer/Footer';
import { useNavigate } from 'react-router-dom';
import edit from "../assets/pencil.svg";
import deleteIcon from "../assets/trash.svg"

const JobOffers = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const offerJobList = useSelector((state) => state.offerJob);

  useEffect(() => {
    dispatch(listOfferJob())
  }, [dispatch]);

  const handleRegisOffer = () => {
    navigate('/OfferVacants');
  }

  const handleEditOffer = (offerId) => {
    dispatch(searchOffer(offerId));
    navigate(`/OfferVacants`); 
  };

  const handleDeleteOffer = (offerId) => {
    dispatch(deleteOfferJob(offerId));
    dispatch(listOfferJob())
  };

  return (
    <div className='offerJobContianer'>
      <LayoutAdmin />

      <h1 className='offerJobPageTitle'>Ofertas Laborales</h1>


      <button onClick={handleRegisOffer} className='offerJobPhrase'>
        Publicar nueva oferta
      </button>


      <div className='offersContainer'>
        {/* <section className='OffersFiltersContainer'>
          <button className='offersFilterButton'>Todos</button>
          <button className='offersFilterButton'>Front-End</button>
          <button className='offersFilterButton'>Backend</button>
        </section> */}

        {offerJobList.offerJob?.map((offer, index) => {
          return <div className='offerCard'>
            <div className='offerTitleCharge'>
              <h2 className='TitleCharge'>{offer.cargo}</h2>
            </div>
            <div className='offerJobInformation'>
              <div className='offerSectionOne'>
                <p className='customName'>Empresa: {offer.empresa}</p>
                {/* <p className='closeDate'>Fecha de cierre: {offer.closeDate}</p> */}
              </div>
              <div className='offerSectionTwo'>
                <p className='modality'>Modalidad: {offer.modalidad}</p>
                <p className='salary'>Salario: {offer.salary}</p>
              </div>
              <div className='offerSectionDescription'>
                {offer.description}
              </div>

              <div className='offerSectionButton'>
                <button className="editButtonOffer" onClick={() => handleEditOffer(offer.id)} ><img className="buttonIconOffer" src={edit} alt="pencil" /></button>
                <button className='deleteButtonOffer' onClick={() => handleDeleteOffer(offer.id)} ><img className="buttonIconOffer" src={deleteIcon} alt="trash" /></button>
              </div>
            </div>
          </div>


        })
        }


      </div>
      <Footer />
    </div>
  )
}

export default JobOffers