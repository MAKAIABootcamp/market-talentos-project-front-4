import React from "react";
import LayoutHome from "../components/layout/LayoutHome";
import Footer from "../components/footer/Footer";
import "../style/styleBlog.scss";
const Blog = () => {
  return (
    <>
      <LayoutHome />
      <main className="blog">
        <div className="blog__containerinfo1">
          <div className="blog__textinformation">
            <h1>Aprende algunos consejos de programación.</h1>
            <div className="blog__linea"></div>
            <div>
              
            </div>
          </div>
          <div className="blog__imagen">
            <img
              src="https://images.pexels.com/photos/693859/pexels-photo-693859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
        </div>
        <div className="blog__containerinfo2">
          <h1>Mas informacion Aqui</h1>
          <div className="blog__carrusel"></div>
          <div className="blog__informationcard"></div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
