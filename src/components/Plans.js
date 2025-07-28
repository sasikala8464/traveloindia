import React, { useEffect, useRef, useState } from "react";
import { Button, Card, Row, Col, Container } from "react-bootstrap";
import i from "./images/rajstan.jpg";
import i1 from "./images/kerala2.jpg";
import i2 from "./images/Goa2.jpg";
import i3 from "./images/ladakh.jpg";
import i4 from "./images/narth.jpg";
import i5 from "./images/gloden mahals.avif";
import "./Plans.css";

const destinations = [
  { img: i, title: "Rajasthan" },
  { img: i1, title: "Kerala" },
  { img: i2, title: "Goa" },
  { img: i3, title: "Ladakh" },
  { img: i4, title: "North East" },
  { img: i5, title: "Golden Triangle" },
];

const Plans = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const index = parseInt(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisibleCards(prev =>
              prev.includes(index) ? prev : [...prev, index]
            );
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach(card => {
      if (card) observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach(card => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <Container className="my-5">
      <h1 className="text-center mb-2 display-5">Popular Destinations</h1>
      <p className="text-center text-muted">
        303 trips. 72 countries. 6 continents.
      </p>

      <Row className="g-4 mt-4">
        {destinations.map((place, idx) => (
          <Col
            key={idx}
            xs={12}
            sm={6}
            lg={4}
            data-index={idx}
            ref={el => (cardRefs.current[idx] = el)}
            className={`fade-up-card ${visibleCards.includes(idx) ? "show" : ""}`}
          >
            <Card className="destination-card">
              <Card.Img variant="top" src={place.img} className="destination-img" />
              <div className="overlay">
                <h5 className="location-title">{place.title}</h5>
                <div className="button-group">
                  <Button variant="outline-light" size="sm">All Adventures</Button>
                  <Button variant="outline-light" size="sm">Deals</Button>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Plans;
