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
            <h1>Aprende algunos consejos de programación aquí.</h1>
          </div>
          <div className="blog__imagen">
            <img
              src="https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
