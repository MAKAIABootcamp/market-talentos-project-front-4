import React from 'react';
import '../style/styleEditProfile.scss';
import imgTalent from '../assets/elisa.jpeg';
import useOnClick from '../funtions/useOnClick';

const EditProfile = () => {

  const handleClick = useOnClick();

  const personalDate =[
    {
      id: 1,
      name: "",
      type: "text",
      placeHolder: "ingrese sus nombres",
      className: "",
    }
  ]
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
                <div className='editProfile__container-imgTalent'
                  onClick={() => handleClick("editImgProfile", "")}>
                  <figure className='editProfile__card-figure'>
                    <img src={imgTalent} alt="imgTalent" />
                  </figure>
                </div>
              </div>
              <div className='editProfile__container-profile'>
                <input type="email" name= 'inputGitUp' id="inputGitUp"
                  className="editProfile__input"
                  placeholder="ingresa el vinculo de tu cuenta en Git Up" />
              </div>
              <div className="editProfile__knowLedge">
                <label cclassNamelass="editProfile__knowLedge">Conocimientos</label>
                <div className="editProfile__">
                  <input type="checkbox" className="form-check-imput" name="knowledge" id="python" value="python" />
                  <label for="python" className="form-check-label">python</label>  
                </div>
            </div>
              <div className='editProfile__container-custom'>
                <button className='editProfile__button'
                  onClick={() => handleClick("next", "")}
                >Guardar</button>

              </div>
            </div>
          </section>
        </div>
      </section>

    </>
  )
}

export default EditProfile;