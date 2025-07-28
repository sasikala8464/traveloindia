import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import './TripCard.css';

import pic from "./images/agra.jpg";
import pic1 from "./images/varanasi.jpg";
import pic2 from "./images/kerala.jpg";
import pic3 from "./images/gova.jpg";
import pic4 from "./images/kasmir.jpg";
import pic5 from "./images/mumbai.jpg";
import { useNavigate } from "react-router-dom";

const cards = [
  {
    img: pic,
    title: "Golden Triangle Tour",
    duration: "05 Nights/06 Days",
    places: ["Agra", "Jaipur", "New Delhi"],
    price: "$500",
    rating: 4.8 // <--- Changed
  },
  {
    img: pic1,
    title: "Magical Rajasthan With Spiritual Varanasi",
    duration: "16 Nights/17 Days",
    // Based on screenshot, seems more generic for places
    places: ["10 Places", "India"], // <--- Changed (or keep yours if you prefer detailed places)
    price: "$500", // <--- Changed
    rating: 4.8 // <--- Changed
  },
  {
    img: pic2,
    title: "Best Of Kerala Tour",
    duration: "05 Nights/06 Days",
    // Based on screenshot, seems more generic for places
    places: ["05 Places", "India"], // <--- Changed (or keep yours if you prefer detailed places)
    price: "$500", // <--- Changed
    rating: 4.8 // <--- Changed
  },
  {
    img: pic3,
    title: "Incredible India Tour For 16 Days",
    duration: "15 Nights/16 Days",
    places: ["Delhi", "Agra", "Mumbai"],
    price: "$1500", // Your existing data for these
    rating: 5 // Your existing data for these
  },
  {
    img: pic4,
    title: "Kashmir Tour",
    duration: "05 Nights/06 Days",
    places: ["Srinagar", "Gulmarg", "Pahalgam"],
    price: "$800", // Your existing data for these
    rating: 4 // Your existing data for these
  },
  {
    img: pic5,
    title: "Golden Triangle Tour With Mumbai & Goa",
    duration: "10 Nights/11 Days",
    places: ["Delhi", "Agra", "Mumbai", "Goa"],
    price: "$1350", // Your existing data for these
    rating: 5 // Your existing data for these
  }
];

const TripCard = () => {

  const navigate=useNavigate()
  const viewtrip = (index) => {
    navigate(`/trip${index + 1}`); // trip1, trip2, etc.
  };
  return (
   

  <>
 <h2>Popular Trips</h2>
    <div className="trip-card-container">
     
      {cards.map((card, idx) => (
       <Card key={idx} className="trip-card">
  <div className="img-container">
    <span className="badge-discount">25% OFF</span>
    <Card.Img variant="top" src={card.img} />
  </div>

  <Card.Body>
   <h6><b>{card.title}</b></h6>
    <div className="stars">
   
      {Array.from({ length: 5 }, (_, i) => (
        <FaStar key={i} className={i < card.rating ? "filled" : "empty"} />
      ))}
      <span className="rating-number">{card.rating}.0</span>
    </div>

    <div className="duration">
      <FaClock /> {card.duration}
    </div>

    <div className="place-tags">
      {card.places.map((place, index) => (
        <span className="tag" key={index}>
          <FaMapMarkerAlt /> {place}
        </span>
      ))}
    </div>

    <div className="price-button-row">
      <div className="price">From <strong>{card.price}</strong></div>
      <Button variant="danger" onClick={() => viewtrip(idx)}>View Trip</Button>
    </div>
  </Card.Body>
</Card>

      ))}
    </div>
    </>
  );
};

export default TripCard;
