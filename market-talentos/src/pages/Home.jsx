import React, { useEffect } from "react";
import Footer from "../components/footer/Footer";
import "../style/styleHome.scss";
import LayoutHome from "../components/layout/LayoutHome";
import TalentsAll from "../components/cardTalent/TalentsAll";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { actionGetTalentAsync } from "../redux/actions/validateTalentActions";

const Home = () => {

  const dispatch = useDispatch();
  let newTalent=useSelector((state)=> state?.talentReducer?._id )
  console.log("newTalent", newTalent);


  useEffect(() => {
    dispatch(actionGetTalentAsync());
  }, [dispatch]);

  const handleSubmit = async (values) => {
    console.log("values", values);
    
   
    dispatch(actionFilterTalentAsync(newTalent, user.type))
      
  };


  const validationSchema = Yup.object().shape({
    wordSearch: Yup.string().required("Este campo es obligatorio"),
  });

  const formik = useFormik({
    initialValues: {
      wordSearch: "",
    },
    validationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
  });

  const isFormValid = () => {
    if( Object.keys(formik.errors).length === 0 &&
     Object.keys(formik.touched).length !== 0) 
     {return true}
   
   };

return (
  <>
    <section className="home">
      <LayoutHome />

      <div className="home__container">
        <div className="home__title-container">
          <p className="home__title">
            ¡Bienvenidos a nuestra plataforma de <span>Talentos</span>! <br />
            Encuentra aquí a los próximos <span>desarrolladores</span> que
            conformarán tu equipo de trabajo.
          </p>
        </div>
        <div className="home__info-container">
          <div className="home__info-search">
            <form className="home__info-form"
             onSubmit={formik.handleSubmit}
            >
              <div>
                <label className="home__info-form1">
                  <input
                    type="text"
                    placeholder="Buscar Talento"
                    name="talento"
                    value={formik.values.talento}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.talento && formik.errors.talento && (
                    <div className="error-message">{formik.errors.talento}</div>
                  )}
                </label>
              </div>

              <div>
                <label className="home__info-form3">
                <button
                      className="home__info-form3"
                      type="submit"
                      disabled={!isFormValid}
                    >
                      Search
                    </button>
                </label>
              </div>
            </form>
          </div>
        </div>


        <div className="home__info-grid3">
          <TalentsAll />
        </div>
      </div>
      <Footer />
    </section>
  </>
);
};

export default Home;
