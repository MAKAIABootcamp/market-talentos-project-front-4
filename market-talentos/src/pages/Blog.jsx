import React from "react";
import LayoutHome from "../components/layout/LayoutHome";
import Footer from "../components/footer/Footer";
import "../style/styleBlog.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Blog = () => {
  const CarruselImage = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/1181273/pexels-photo-1181273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      image:
        "https://images.pexels.com/photos/13328206/pexels-photo-13328206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 5,
      image:
        "https://images.pexels.com/photos/1181371/pexels-photo-1181371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 6,
      image:
        "https://images.pexels.com/photos/7504837/pexels-photo-7504837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <>
      <LayoutHome />
      <main className="blog">
        <div className="blog__containerinfo1">
          <div className="blog__textinformation">
            <h1>Aprende algunos consejos de programación.</h1>
            <div className="blog__linea"></div>
            <div></div>
          </div>
          <div className="blog__imagen">
            <img
              src="https://images.pexels.com/photos/693859/pexels-photo-693859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
        </div>
        <div className="blog__containerinfo2">
          <div className="blog__textaqui">
            <h1>Temas Propuestos</h1>
          </div>
          <div className="blog__carrusel blog__carrusel--left">
            <Carousel
              showArrows={false} // Set this to false to hide the arrows
              showStatus={false}
              showIndicators={false} // Set this to false to hide the mini screens (indicators)
              infiniteLoop
              autoPlay
              interval={3000}
              transitionTime={500}
              centerMode={false} // This ensures the carousel stays aligned to the left
              emulateTouch
              showThumbs={false} // Set this to false to hide the mini screens (indicators)
            >
              {CarruselImage.map((cupon) => (
                <div className="carousel-item" key={cupon.id}>
                  <img src={cupon.image} alt="" />
                </div>
              ))}
            </Carousel>
          </div>
          <div className="blog__informationcard">
            <div className="blog__textinformation">
              <h3>Mas Informacion Aqui</h3>
            </div>
            <div className="blog__notice">1</div>
            <div className="blog__notice">2</div>
            <div className="blog__notice">3</div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
