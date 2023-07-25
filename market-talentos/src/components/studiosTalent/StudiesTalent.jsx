import React from 'react';
import './styleStudiesTalent.scss';


const StudiesTalent = () => {

    return (
        <>
            <div>
                <div className='studies__container-ppal'>
                    <div className='studies__container-imgInstitute'>
                        <figure className='studies__figure-imgInstitute'>
                            <img src="" alt="" />
                        </figure>
                    </div>
                    <div className='studies__container-infoInstitute'>
                        <h2 className='studies__title-Institute'><strong>MAKAIA</strong></h2>
                        <div className='studies__dateInstitute'>
                            <img src="" alt="calendary" />
                            <span>febrero - 2023 </span>
                            <span> a </span>
                            <span>julio - 2023 </span>
                        </div>
                        <h2 className='studies__title-rol'>Desarrolladora Front End</h2>
                    </div>
                </div>
                <div className='studies__container-ppal'>
                    <div className='studies__container-imgInstitute'>
                        <figure className='studies__figure-imgInstitute'>
                            <img src="" alt="" />
                        </figure>
                    </div>
                    <div className='studies__container-infoInstitute'>
                        <h2 className='studies__title-Institute'><strong>INSTITUCION UNIVERSITARIA PASCUAL BRAVO</strong></h2>
                        <div className='studies__dateInstitute'>
                            <img src="" alt="calendary" />
                            <span>junio - 2019 </span>
                            <span> a </span>
                            <span>diciembre - 2023 </span>
                        </div>
                        <h2 className='studies__title-rol'>Técnica Auxiliar en desarrollo de software</h2>
                    </div>
                </div>
            </div>

        </>
    )
}

export default StudiesTalent