// import React, { useEffect } from 'react';
import "../style/styleTalentAll.scss";
import useOnClick from '../funtions/useOnClick';
import imgElisa from '../assets/elisa.jpeg';
import imgDiana from '../assets/diana.jpeg';
import imgDiego from '../assets/Diego.jpeg';
import imgSantiago from '../assets/Santiago.jpeg';
import imgGesiel from '../assets/Gesiel.jpg';
import imgWhatsapp from '../assets/whatsapp.png';
// import { useDispatch, useSelector } from 'react-redux';
// import { actionGetTalentsAsync } from '../redux/actions/talent';

const TalentsAll = () => {

    const arrayTalents = [
        {
            id: 1,
            avatar: imgElisa,
            FirstName: "Elisabeth Cristina",
            lastName: "Ospina Graciano",
            rol: "Front end develop",
            EnglishLevel: "A1"

        },
        {
            id: 2,
            avatar: imgDiana,
            FirstName: "Diana Alejandra",
            lastName: "Pinzón Herrera",
            rol: "Front end develop",
            EnglishLevel: "B1"

        },
        {
            id: 3,
            avatar: imgGesiel,
            FirstName: "Gesiel",
            lastName: "Pinzón Herrera",
            rol: "Front end develop",
            EnglishLevel: "B2"

        },
        {
            id: 4,
            avatar: imgDiego,
            FirstName: "Diego",
            lastName: "Meriño",
            rol: "Full stack develop",
            EnglishLevel: "C1"

        },
        {
            id: 5,
            avatar: imgSantiago,
            FirstName: "Santiago",
            lastName: "Gomez Pavas",
            rol: "Full stack develop",
            EnglishLevel: "C1"

        },
        {
            id: 6,
            avatar: imgDiana,
            FirstName: "Diana Alejandra",
            lastName: "Pinzón Herrera",
            rol: "Front end develop",
            EnglishLevel: "B1"

        },
        {
            id: 7,
            avatar: imgSantiago,
            FirstName: "Santiago",
            lastName: "Gomez Pavas",
            rol: "Full stack develop",
            EnglishLevel: "C1"

        },
        {
            id: 8,
            avatar: imgDiego,
            FirstName: "Diego",
            lastName: "Meriño",
            rol: "Full stack develop",
            EnglishLevel: "C1"

        },
        {
            id: 8,
            avatar: imgElisa,
            FirstName: "Diego",
            lastName: "Meriño",
            rol: "Full stack develop",
            EnglishLevel: "C1"

        }
        
    ]
    const handleClick = useOnClick();
    // const dispatch = useDispatch();
    // const { talents } = useSelector((store) => store.talents);

    // useEffect(() => {
    //     dispatch(actionGetTalentsAsync());
    // }, [dispatch]);

    // const infoTalents = talents.length > 0 ? talents[0] : null;

    return (
        <>
            <section className='talentsAll'>
                <div className='talentsAll__container-cards'>
                    {arrayTalents && arrayTalents.length > 0 ? (
                        arrayTalents.map((talent, index) => (
                // {talents && talents.length > 0 ? (
                    //     talents.map((talent, index) => (
                            <div className='talentsAll__container'
                                key={index}
                                onClick={() => handleClick("cardTalent", "")}
                            >
                                <div className='talentsAll__container-imgTalent'>
                                    <figure className='talentsAll__card-figure'>
                                        <img src={talent.avatar} alt="imgTalent" />
                                    </figure>
                                </div>
                                <div className='talentsAll__container-info'>
                                    <div className='talentsAll__container-state'>
                                        <figure className='talentsAll__buttons-state'>
                                            <img src={imgWhatsapp} alt="" />
                                        </figure>
                                        <div className='talentsAll__container-levelEnglish'>
                                            <span className='talentsAll__know'>Ingles</span>
                                            <span className='talentsAll__know'>{talent.EnglishLevel}</span>
                                        </div>
                                    </div>
                                    <div className='talentsAll__line'></div>
                                    <div className='talentsAll__container-infoPnal'>
                                        <span className='talentsAll__name'><strong>{talent.FirstName}</strong></span>
                                        <span className='talentsAll__lastName'><strong>{talent.lastName}</strong></span>
                                        <span className='talentsAll__know'>{talent.lastName}</span>
                                    </div>
                                </div>
                            </div>
                ))
                ) : (
                ''
                )}
                </div>
            </section>
        </>
    )
}

export default TalentsAll