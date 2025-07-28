import React from "react";
import { Carousel, Card, Container } from "react-bootstrap";
import "./Corosule.css";

import ExampleCarouselImage from "./images/p.jpeg";
import ExampleCarouselImage1 from "./images/b.jpeg";
import ExampleCarouselImage2 from "./images/m.jpeg";

import img1 from "./images/pp.jpeg";
import img2 from "./images/f.jpeg";
import img3 from "./images/fru.jpeg";
import img4 from "./images/fe.jpeg";
import img5 from "./images/afri.jpeg";
import img6 from "./images/egipt.jpeg";
import img7 from "./images/ger.jpeg";
import img8 from "./images/uni.jpeg";
import img9 from "./images/b.jpeg";

const cardData = [
  { img: img1, title: "Indian Culture" },
  { img: img2, title: "Indian Food" },
  { img: img3, title: "Indian Fruit" },
  { img: img4, title: "Indian Festival" },
  { img: img5, title: "Africa" },
  { img: img6, title: "Egypt" },
  { img: img7, title: "Germany" },
  { img: img8, title: "USA" },
  { img: img9, title: "India" },
];

const Corosule = () => {
  return (
    <div className="carousel-container">
      <Carousel fade interval={4000} pause={false} controls={false} indicators={false}>
        {[ExampleCarouselImage, ExampleCarouselImage1, ExampleCarouselImage2].map((image, idx) => (
          <Carousel.Item key={idx}>
            <img className="d-block w-100 carousel-image" src={image} alt={`Slide ${idx + 1}`} />
            <Carousel.Caption className="custom-caption">
              <h3>Gateway to India</h3>
              <p>Unforgettable Indian Journeys</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Scrollable cards just below carousel */}
      <div className="attached-card-scroll">
        {cardData.map((card, index) => (
          <Card key={index} className="scroll-card">
            <Card.Img variant="top" src={card.img} />
            <Card.Body>
              <p><b>{card.title}</b></p>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Corosule;
