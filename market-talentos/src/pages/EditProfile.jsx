import React, { useState } from 'react';
import '../style/styleEditProfile.scss';
import imgTalent from '../assets/elisa.jpeg';
import useOnClick from '../funtions/useOnClick';

const EditProfile = () => {
  const [profile, setProfile] = useState('');

  const handleChangeProfile = (event) => {
    // limita a 160 palabras
    const inputText = event.target.value;
    const words = inputText.split(' ');
    if (words.length <= 160) {
      setProfile(inputText);
    }
  };

  const handleClick = useOnClick();

  return (
    <>
      <section className='editProfile'>
        <div className='editProfile__container'>
          <section className='editProfile__seccion-info'>
            <div className='editProfile__container-title'>
              <button className='editProfile__button-title'>
                Formulario de registro
              </button>
            </div>
            <div className='editProfile__container-infoCustom'>
              <div className='editProfile__container-infoContacts'>
                <div
                  className='editProfile__container-imgTalent'
                  onClick={() => handleClick('editImgProfile', '')}
                >
                  <figure className='editProfile__card-figure'>
                    <img src={imgTalent} alt='imgTalent' />
                  </figure>
                </div>
              </div>
              <div className='editProfile__container-profile'>
                <input
                  type='email'
                  name='inputGitUp'
                  id='inputGithub'
                  className='editProfile__input'
                  placeholder='Ingresa el vínculo de tu cuenta en Github'
                />
              </div>
              <div className='editProfile__container-profile'>
                <input
                  type='email'
                  name='inputlinkedin'
                  id='inputlinkedin'
                  className='editProfile__input'
                  placeholder='Ingresa el vínculo de tu cuenta en Linkedin'
                />
              </div>
              <div className='editProfile__knowLedge'>
                <label className='editProfile__knowLedge'>Conocimientos</label>
                <div className='editProfile__'>
                  <input
                    type='checkbox'
                    className='form-check-imput'
                    name='knowledge'
                    id='python'
                    value='python'
                  />
                  <label htmlFor='python' className='form-check-label'>
                    Python
                  </label>
                </div>
              </div>
              <div className='editProfile__container-custom'>
                <label htmlFor='profile' className='editProfile__profile-label'> 
                </label>
                <textarea
                  id='profile'
                  name='profile'
                  className='editProfile__input-profile'
                  placeholder='Escribe aquí tu presentación Presentación (160 palabras máximo):'
                  value={profile}
                  onChange={handleChangeProfile}
                />
              </div>
          
              <div className='editProfile__container-custom'>
                <button
                  className='editProfile__button'
                  onClick={() => handleClick('next', '')}
                >
                  Guardar
                </button>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default EditProfile;
