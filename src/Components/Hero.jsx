import Carousel from "react-bootstrap/Carousel";

import React, { useContext } from "react";
import { SiteContext } from "../Contexts/SiteContext";


const Hero = () => {
  const {data, loading} = useContext(SiteContext)


  return (
    <Carousel fade>
      {!loading && data.carousels.map((item, index) => {
        const { subtitle, title, product } = item;

        return (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100 carousel-image"
              src={product.imagePath}
              alt="First slide"
            />
            <Carousel.Caption>
              <div className="c-caption">
                <h3>{title || "title"}</h3>
                <p>{subtitle || "description"}</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default Hero;
