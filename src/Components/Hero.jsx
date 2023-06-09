import Carousel from "react-bootstrap/Carousel";

import React, { useEffect, useState } from "react";

const Hero = ({ hero }) => {
  console.log(hero);
  // const [images, setImages] = useState([]);
  // useEffect(() => {
  //   return () => {
  //     loadImages();
  //   };
  // }, []);

  // const loadImages = () => {
  //   console.log("fetching");
  //   fetch(
  //     "https://api.unsplash.com/photos/?client_id=B3eNrrOIeBFdr9pohQqaEPSXOYfuX-hacP2cNBcKY4s"
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setImages(data);
  //     });
  // };

  return (
    <Carousel fade>
      {hero.items.map((image, index) => {
        const { imagepath, title, subtitle } = image;

        return (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100 carousel-image"
              src={imagepath}
              alt="First slide"
            />
            <Carousel.Caption>
              <div className="c-caption">
                <h3>{title}</h3>
                <p>{subtitle}</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default Hero;
