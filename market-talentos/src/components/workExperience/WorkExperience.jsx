import React from 'react';
import "../workExperience/styleWorkExperience.scss";

const WorkExperience = () => {
  return (
    <>
        <div className='workExperience__container-workExperience'>
              <div className='workExperience__container-imgCompany'>
                <figure className='workExperience__figure-imgCompany'>
                  <img src="" alt="" />
                </figure>
              </div>
              <div className='workExperience__container-infoCompany'>
                <h2 className='workExperience__title-Company'><strong>Makaia</strong></h2>
                <div className='workExperience__dateCompany'>
                  <img src="" alt="calendary" />
                  <span>febrero - 2023 </span>
                  <span>julio - 2023 </span>
                </div>
                <h2 className='workExperience__title-rol'>Desarrolladora Front End</h2>
                <span className='workExperience__funtions'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A praesentium quidem pariatur aperiam quas, amet aliquam quibusdam fuga quos consequuntur ex at possimus, rerum facere dolorum porro in officia repellat.</span>
              </div>
            </div>
            <div className='workExperience__container-workExperience'>
              <div className='workExperience__container-imgCompany'>
                <figure className='workExperience__figure-imgCompany'>
                  <img src="" alt="" />
                </figure>
              </div>
              <div className='workExperience__container-infoCompany'>
                <h2 className='workExperience__title-Company'><strong>Makaia</strong></h2>
                <div className='workExperience__dateCompany'>
                  <img src="" alt="calendary" />
                  <span>junio - 2021 </span>
                  <span>enero - 2022 </span>
                </div>
                <h2 className='workExperience__title-rol'>Desarrolladora Front End</h2>
                <span className='workExperience__funtions'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A praesentium quidem pariatur aperiam quas, amet aliquam quibusdam fuga quos consequuntur ex at possimus, rerum facere dolorum porro in officia repellat.</span>
              </div>
            </div>
    </>
  )
}

export default WorkExperience