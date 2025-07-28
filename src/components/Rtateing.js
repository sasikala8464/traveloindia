import React from "react";
import Card from "react-bootstrap/Card";
import "./Rtateing.css";
import { FaStar } from "react-icons/fa";

const profiles = [
  {
    name: "Jones",
    country: "United Kingdom",
    title: "India in luxury, done right!",
    text: "From the Taj Mahal to hidden gems in Delhi, Nishant made every moment smooth, rich, and unforgettable.",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 5,
    date: "27 January 2024",
  },
  {
    name: "Kim",
    country: "Korea",
    title: "Scenic escapes, stress-free India!",
    text: "We explored Rajasthan’s palaces and Udaipur’s lakes in comfort. Everything was taken care of beautifully.",
    img: "https://randomuser.me/api/portraits/women/75.jpg",
    rating: 4,
    date: "18 May 2024",
  },
  {
    name: "Elise",
    country: "Philippines",
    title: "Magical moments across India!",
    text: "Private tours, heritage stays, and amazing food — Meera made it all feel seamless and exclusive.",
    img: "https://randomuser.me/api/portraits/women/52.jpg",
    rating: 5,
    date: "05 February 2025",
  },
];

const Rtateing = () => {
  return (
    <div className="rating-section text-center py-5">
      <h1 className="mb-4 fw-bold">
        Exceptional Journeys with <span className="underline">Travelport</span>
      </h1>

      <div className="rating-card-container">
        {profiles.map((profile, idx) => (
          <div key={idx} className="rating-card d-flex flex-column flex-md-row align-items-center">
            <div className="img-wrapper mb-3 mb-md-0 me-md-4">
              <img src={profile.img} alt={profile.name} className="profile-img" />
            </div>
            <Card.Body className="text-md-start text-center">
              <h5 className="fw-bold mb-1">{profile.name}</h5>
              <p className="text-muted mb-1">{profile.country}</p>
              <div className="stars mb-1 d-flex justify-content-center justify-content-md-start">
                {Array.from({ length: profile.rating }).map((_, i) => (
                  <FaStar key={i} color="#ffc107" />
                ))}
              </div>
              <p className="date text-muted">{profile.date}</p>
              <h6 className="card-title-normal">{profile.title}</h6>
              <p>{profile.text}</p>
            </Card.Body>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rtateing;
