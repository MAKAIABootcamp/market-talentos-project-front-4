import React, { useEffect } from "react";
import Layout from "../components/layout/Layout";
import imgTalent from "../assets/Gesi.png";
import diana from "../assets/diana.jpeg";
import diego from "../assets/Diego.jpeg";
import santi from "../assets/Santiago.jpeg";
import dev from "../assets/iconDev.png";
import bgHome from "../assets/bg-home.png"
import eli from "../assets/elisa.jpeg"
import Footer from "../components/footer/Footer";
import '../style/styleHome.scss'
import TalentsAll from "./TalentsAll";
import LayoutHome from "../components/layout/LayoutHome";

const Home = () => {

  const Avatars = [
    {
      experience: "Experiencia",
      time: "6 meses",
      name: "Gesiel Gimenez",
      tecnology: "Front End Developer"
    },

    {
      experience: "Experiencia",
      time: "12 meses",
      name: "Santiago Gomez",
      tecnology: "Front End Developer"

    },
    {
      id: 3,
      name: "FullStack",
    },
  ];

  // const handleClick = useOnClick();
  // const dispatch = useDispatch();
  // const talentsList = useSelector((store) => store.userTalents);

  // const getTalents = () => {
  //   dispatch(listTalents());
  // }

  // useEffect(() => {
  //   getTalents();

  // }, []);


  return (
    <div>
      <Layout />

      {/* <TalentsAll/>  */}

      <p>¡Bienvenidos a nuestra plataforma de <span>Talentos</span>! <br />
        Encuentra aquí a los proximos <span>desarrolladores</span> que conformarán tu equipo de trabajo.</p>

      <p className="text__sec">

        Explora la búsqueda de nuestros  <span>Talentos</span>
      </p>

      <div className="info__container">

        <div className="info__search">

          <form className="info__form">
            <div>
              <label className="info__form1">

                <input type="text" placeholder="Buscar Talento" />

              </label>
            </div>

            <div>
              <label className="info__form2">
                <input type="select" placeholder="Front End" />

              </label>
            </div>

            <div>
              <label className="info__form3">
                <button>Search</button>
              </label>
            </div>
          </form>
        </div>
      </div>


      <div className="info__grid2">

        <div className="talents__container">

          <div>

            <div className="container__cards">



              {/* avatar 1 */}

              <div className="talents__container-imgTalent">
                <figure className='talents__card-figure'>
                  <img src={imgTalent} alt="imgTalent" />
                </figure>
              </div>

              <div className="info__card__info">

                <div>

                  <div className='talents__container-state'>
                    <button className='talents__card-icon'>
                      Experiencia
                    </button>
                    <div className='talents__container-levelEnglish'>
                      <span className='talents__know'>6 Meses</span>
                    </div>
                  </div>
                </div>

                <div className='talents__line'>

                  <div className='talents__container-infoPnal'>
                    <span className='talents__name'><strong>Gesiel Gimenez</strong></span>
                    <span className='talents__know'>Front End developer</span>
                  </div>

                </div>


              </div>


            </div>

          </div>

          <div>


            {/* avatar 2 */}

            <div className="container__cards">
              <div className="talents__container-imgTalent">
                <figure className='talents__card-figure'>
                  <img src={diana} alt="imgTalent" />
                </figure>
              </div>

              <div className="info__card__info">

                <div>

                  <div className='talents__container-state'>
                    <button className='talents__card-icon'>
                      Experiencia
                    </button>
                    <div className='talents__container-levelEnglish'>
                      <span className='talents__know'>6 Meses</span>
                    </div>
                  </div>
                </div>

                <div className='talents__line'>

                  <div className='talents__container-infoPnal'>
                    <span className='talents__name'><strong>Diana Pinzon</strong></span>
                    <span className='talents__know'>Back End developer</span>
                  </div>

                </div>


              </div>

            </div>

          </div>

          <div>

            {/* avatar 3 */}

            <div className="container__cards">
              <div className="talents__container-imgTalent">
                <figure className='talents__card-figure'>
                  <img src={eli} alt="imgTalent" />
                </figure>
              </div>

              <div className="info__card__info">

                <div>

                  <div className='talents__container-state'>
                    <button className='talents__card-icon'>
                      Experiencia
                    </button>
                    <div className='talents__container-levelEnglish'>
                      <span className='talents__know'>6 Meses</span>
                    </div>
                  </div>
                </div>

                <div className='talents__line'>

                  <div className='talents__container-infoPnal'>
                    <span className='talents__name'><strong>Elizabeth Ospina</strong></span>
                    <span className='talents__know'>Full Stack Developer</span>
                  </div>

                </div>


              </div>

            </div>

          </div>





        </div>







      </div>

      <div className="info__grid3">

        <div className="talents__container">

          <div>

            <div className="container__cards">



              {/* avatar 1 */}

              <div className="talents__container-imgTalent">
                <figure className='talents__card-figure'>
                  <img src={eli} alt="imgTalent" />
                </figure>
              </div>

              <div className="info__card__info">

                <div>

                  <div className='talents__container-state'>
                    <button className='talents__card-icon'>
                      Experiencia
                    </button>
                    <div className='talents__container-levelEnglish'>
                      <span className='talents__know'>6 Meses</span>
                    </div>
                  </div>
                </div>

                <div className='talents__line'>

                  <div className='talents__container-infoPnal'>
                    <span className='talents__name'><strong>Elizabeth Ospina</strong></span>
                    <span className='talents__know'>Front End developer</span>
                  </div>

                </div>


              </div>


            </div>

          </div>

          <div>


            {/* avatar 2 */}

            <div className="container__cards">
              <div className="talents__container-imgTalent">
                <figure className='talents__card-figure'>
                  <img src={santi} alt="imgTalent" />
                </figure>
              </div>

              <div className="info__card__info">

                <div>

                  <div className='talents__container-state'>
                    <button className='talents__card-icon'>
                      Experiencia
                    </button>
                    <div className='talents__container-levelEnglish'>
                      <span className='talents__know'>6 Meses</span>
                    </div>
                  </div>
                </div>

                <div className='talents__line'>

                  <div className='talents__container-infoPnal'>
                    <span className='talents__name'><strong>Santiago Gomez</strong></span>
                    <span className='talents__know'>Back End developer</span>
                  </div>

                </div>


              </div>

            </div>

          </div>

          <div>

            {/* avatar 3 */}

            <div className="container__cards">
              <div className="talents__container-imgTalent">
                <figure className='talents__card-figure'>
                  <img src={diego} alt="imgTalent" />
                </figure>
              </div>

              <div className="info__card__info">

                <div>

                  <div className='talents__container-state'>
                    <button className='talents__card-icon'>
                      Experiencia
                    </button>
                    <div className='talents__container-levelEnglish'>
                      <span className='talents__know'>6 Meses</span>
                    </div>
                  </div>
                </div>

                <div className='talents__line'>

                  <div className='talents__container-infoPnal'>
                    <span className='talents__name'><strong>Diego Meriño</strong></span>
                    <span className='talents__know'>Full Stack Developer</span>
                  </div>

                </div>


              </div>

            </div>

          </div>





        </div>




      </div>

      <section className="button__more">
      <div className="info__form4">
      <button >Ver mas</button>
      </div>
      </section>

  

        <div className="banner">

          <div className="text_b">

          <p className="p__banner">Conectamos a nuestros Talentos con futuros empleadores</p>
          </div>

          <div className="icon_b">
          <img src={dev} alt="" width={70}/>
          </div>

          <div className="img_b">

          <img src={bgHome} alt="" width={210}/>
          </div>

        </div>    

      





      <Footer />
    </div>
  );
};

export default Home;
