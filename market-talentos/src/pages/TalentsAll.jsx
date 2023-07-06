import React, { useEffect } from 'react';
import "../style/styleTalentAll.scss";
import useOnClick from '../funtions/useOnClick';
import imgWhatsapp from '../assets/whatsapp.png';
import { useDispatch, useSelector } from 'react-redux';
import { actionGetTalentsAsync } from '../redux/actions/talent';

const TalentsAll = () => {

    const handleClick = useOnClick();

    const dispatch = useDispatch();

    const { talents } = useSelector((store) => store.talentsStore);
    console.log("informacion de talents: ", talents);
    
    useEffect(() => {
        dispatch(actionGetTalentsAsync());
    }, [dispatch]);

    // const infoTalents = talents.length > 0 ? talents[0] : null;

    return (
        <>
            <div className='talentsAll'>
                <div className="talentsAll__title" >
                    <h1>Talentos Bookcamp Makaia</h1>
                </div>
                <div className='talentsAll__container-cards'>

                    {talents && talents.length > 0 ? (
                        talents.map((talent, index) => (
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
                                            <span className='talentsAll__know'>{talent.englishLevel}</span>
                                        </div>
                                    </div>
                                    <div className='talentsAll__line'></div>
                                    <div className='talentsAll__container-infoPnal'>
                                        <span className='talentsAll__name'><strong>{talent.firstName}</strong></span>
                                        <span className='talentsAll__lastName'><strong>{talent.lastName}</strong></span>
                                        <span className='talentsAll__know'>{talent.rol}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </>
    )
}

export default TalentsAll