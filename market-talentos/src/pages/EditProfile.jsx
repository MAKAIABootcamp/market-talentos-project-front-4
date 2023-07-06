import React from 'react';
import '../style/styleEditProfile.scss';
import imgTalent from '../assets/elisa.jpeg';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import useOnClick from '../funtions/useOnClick';

const EditProfile = () => {
  const validationSchema = Yup.object().shape({
    inputGitUp: Yup.string().url('Ingresa un enlace válido. Ejemplo: https://github.com/tuusuario'),
    inputlinkedin: Yup.string().url('Ingresa un enlace válido. Ejemplo: https://www.linkedin.com/in/tuusuario'),
    profile: Yup.string().max(160, 'La presentación no debe exceder las 160 palabras.'),
    cv: Yup.mixed().test('fileType', 'Solo se permiten archivos PDF', (value) => {
      if (value) {
        return value && ['application/pdf'].includes(value.type);
      }
      return true;
    }),
    video: Yup.mixed().test('fileType', 'Solo se permiten archivos de video', (value) => {
      if (value) {
        return value && value.type.includes('video/');
      }
      return true;
    }),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  const handleClick = useOnClick();

  const formik = useFormik({
    initialValues: {
      inputGitUp: '',
      inputlinkedin: '',
      knowledge: false,
      profile: '',
    },
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <>
      <section className='editProfile'>
        <div className='editProfile__container'>
          <section className='editProfile__seccion-info'>
            <div className='editProfile__container-title'>
              <button className='editProfile__button-title'>
                Completa tu información
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
              <form className='editProfile__container-form' onSubmit={formik.handleSubmit}>
                <div className='editProfile__container-profile'>
                  <input
                    type='url'
                    name='inputGitUp'
                    id='inputGithub'
                    className='editProfile__input'
                    placeholder='Ingresa el vínculo de tu cuenta en Github'
                    value={formik.values.inputGitUp}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.inputGitUp && formik.touched.inputGitUp && (
                    <div className='error-message'>{formik.errors.inputGitUp}</div>
                  )}
                </div>
                <div className='editProfile__container-profile'>
                  <input
                    type='url'
                    name='inputlinkedin'
                    id='inputlinkedin'
                    className='editProfile__input'
                    placeholder='Ingresa el vínculo de tu cuenta en Linkedin'
                    value={formik.values.inputlinkedin}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.inputlinkedin && formik.touched.inputlinkedin && (
                    <div className='error-message'>{formik.errors.inputlinkedin}</div>
                  )}
                </div>
                <div className='editProfile__knowLedge'>
                  <label className='editProfile__knowLedge'>Conocimientos</label>
                  <div className='editProfile__'>
                    <input
                      type='checkbox'
                      className='form-check-input'
                      name='knowledge'
                      id='python'
                      checked={formik.values.knowledge}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <label htmlFor='python' className='form-check-label'>
                      Python
                    </label>
                  </div>
                               {formik.errors.knowledge && formik.touched.knowledge && (
                    <div className='error-message'>{formik.errors.knowledge}</div>
                  )}
                </div>
                <div className='editProfile__container-custom'>
                  <label htmlFor='profile' className='editProfile__profile-label'>
                   
                  </label>
                  <textarea
                    name='profile'
                    className='editProfile__input-profile'
                    id='profile'
                    placeholder='Escribe aquí tu presentación...160 palabras máximo'
                    value={formik.values.profile}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.profile && formik.touched.profile && (
                    <div className='error-message'>{formik.errors.profile}</div>
                  )}
                </div>
                <div className='editProfile__container-custom'>
                  <label  htmlFor='cv' className='editProfile__label'>
                    Hoja de Vida (PDF):
                  </label>
                  <input  
                    type='file'
                    id='cv'
                    name='cv'
                    onChange={(event) => formik.setFieldValue('cv', event.currentTarget.files[0])}
                    className='editProfile__input-file'
                  />
                  {formik.errors.cv && formik.touched.cv && (
                    <div className='error-message'>{formik.errors.cv}</div>
                  )}
                </div>
                <div className='editProfile__container-custom'>
                  <label htmlFor='video' className='editProfile__label'>
                    Video:
                  </label>
                  <input
                    type='file'
                    id='video'
                    name='video'
                    onChange={(event) => formik.setFieldValue('video', event.currentTarget.files[0])}
                    className='editProfile__input-file'
                  />
                  {formik.errors.video && formik.touched.video && (
                    <div className='error-message'>{formik.errors.video}</div>
                  )}
                </div>
                <div className='editProfile__container-custom'>
                  <button
                    className='editProfile__button'
                    type='submit'
                    disabled={!formik.isValid || formik.isSubmitting}
                  >
                    Guardar
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default EditProfile;




// import React, { useState } from 'react';
// import '../style/styleEditProfile.scss';
// import imgTalent from '../assets/elisa.jpeg';
// import useOnClick from '../funtions/useOnClick';

// const EditProfile = () => {
//   const [profile, setProfile] = useState('');

//   const handleChangeProfile = (event) => {
//     // limita a 160 palabras
//     const inputText = event.target.value;
//     const words = inputText.split(' ');
//     if (words.length <= 160) {
//       setProfile(inputText);
//     }
//   };

//   const handleClick = useOnClick();

//   return (
//     <>
//       <section className='editProfile'>
//         <div className='editProfile__container'>
//           <section className='editProfile__seccion-info'>
//             <div className='editProfile__container-title'>
//               <button className='editProfile__button-title'>
//                 Formulario de registro
//               </button>
//             </div>
//             <div className='editProfile__container-infoCustom'>
//               <div className='editProfile__container-infoContacts'>
//                 <div
//                   className='editProfile__container-imgTalent'
//                   onClick={() => handleClick('editImgProfile', '')}
//                 >
//                   <figure className='editProfile__card-figure'>
//                     <img src={imgTalent} alt='imgTalent' />
//                   </figure>
//                 </div>
//               </div>
//               <div className='editProfile__container-profile'>
//                 <input
//                   type='email'
//                   name='inputGitUp'
//                   id='inputGithub'
//                   className='editProfile__input'
//                   placeholder='Ingresa el vínculo de tu cuenta en Github'
//                 />
//               </div>
//               <div className='editProfile__container-profile'>
//                 <input
//                   type='email'
//                   name='inputlinkedin'
//                   id='inputlinkedin'
//                   className='editProfile__input'
//                   placeholder='Ingresa el vínculo de tu cuenta en Linkedin'
//                 />
//               </div>
//               <div className='editProfile__knowLedge'>
//                 <label className='editProfile__knowLedge'>Conocimientos</label>
//                 <div className='editProfile__'>
//                   <input
//                     type='checkbox'
//                     className='form-check-imput'
//                     name='knowledge'
//                     id='python'
//                     value='python'
//                   />
//                   <label htmlFor='python' className='form-check-label'>
//                     Python
//                   </label>
//                 </div>
//               </div>
//               <div className='editProfile__container-custom'>
//                 <label htmlFor='profile' className='editProfile__profile-label'> 
//                 </label>
//                 <textarea
//                   id='profile'
//                   name='profile'
//                   className='editProfile__input-profile'
//                   placeholder='Escribe aquí tu presentación Presentación (160 palabras máximo):'
//                   value={profile}
//                   onChange={handleChangeProfile}
//                 />
//               </div>
          
//               <div className='editProfile__container-custom'>
//                 <button
//                   className='editProfile__button'
//                   onClick={() => handleClick('next', '')}
//                 >
//                   Guardar
//                 </button>
//               </div>
//             </div>
//           </section>
//         </div>
//       </section>
//     </>
//   );
// };

// export default EditProfile;
