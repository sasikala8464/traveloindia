import React, { useEffect, useRef, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import sai1 from "./images/aff.png";
import sai2 from "./images/t1.jpg";
import sai3 from "./images/re.jpg";
import sai4 from "./images/sol.jpg";
import sai5 from "./images/uni.jpg";
import sai6 from "./images/private.jpg";
import sai7 from "./images/by.jpg"; // This will be the image for the tall card

import "./Cart.css";

const tourCards = [
  { img: sai2, title: "Small Group Departures" },
  { img: sai1, title: "Affordable Dreams" },
  { img: sai5, title: "Undiscovered Tours" },
  { img: sai3, title: "Religious Tours" },
  { img: sai4, title: "Solo Travel" },
  { img: sai6, title: "Private Touring" },
];

const Cart = () => {
  const cardRefs = useRef([]);
  // visibleCards state now needs to account for the tall card being separate.
  // It's `tourCards.length` for the regular cards + 1 for the tall card.
  const [visibleCards, setVisibleCards] = useState(
    Array(tourCards.length + 1).fill(false)
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const updated = [...visibleCards];
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting && !updated[index]) {
            updated[index] = true;
          }
        });
        setVisibleCards(updated);
      },
      { threshold: 0.3 }
    );

    cardRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => {
      cardRefs.current.forEach((ref) => ref && observer.unobserve(ref));
    };
  }, [visibleCards]); // Added visibleCards to dependency array

  return (
    <div className="card-grid" style={{ marginTop: "3rem",marginBottom:'7rem' }}>
    
      {tourCards.map((card, index) => (
        <div
          key={index}
          data-index={index}
          ref={(el) => (cardRefs.current[index] = el)}
          className={`card-item ${visibleCards[index] ? "show" : ""}`}
        >
          <Card className="image-card">
            <Card.Img src={card.img} className="card-img" />
            <Card.ImgOverlay className="card-overlay">
              <Card.Title className="card-title">{card.title}</Card.Title>
              <Button variant="light" size="sm">
                View Tours
              </Button>
            </Card.ImgOverlay>
          </Card>
        </div>
      ))}

      {/* The special "Tall Card" */}
      <div
        className={`card-item tall-card ${
          visibleCards[tourCards.length] ? "show" : ""
        }`}
        data-index={tourCards.length}
        ref={(el) => (cardRefs.current[tourCards.length] = el)}
      >
        <h3 className="tall-card-title">
          Not Sure Where To Begin? Let India Unfold With Us
        </h3>
        <img src={sai7} alt="Explore India" className="tall-card-image" />
        <Button variant="primary">View Journeys</Button>
      </div>
    </div>
  );
};

export default Cart;