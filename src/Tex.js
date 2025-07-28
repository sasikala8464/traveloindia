import React, { useEffect, useRef, useState } from "react";
import "./Tex.css";
import sasi from "./components/images/mounten.webp"; // REMOVE THIS LINE: Not used in the reference screenshot

const cards = [
  {
    icon: ( // Magnifying glass icon
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="card-icon"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    ),
    title: "Golden Triangle Getaways",
    subtitle: "Explore Delhi, Agra & Jaipur. The royal trio of India.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="card-icon"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    ),
    title: "Trips Under 10 Days",
    subtitle: "Perfect short escapes with a rich Indian experience.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="card-icon"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    ),
    title: "Spiritual Journeys",
    subtitle: "Discover Varanasi, Rishikesh, Amritsar & more sacred sites.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="card-icon"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    ),
    title: "Group Travel Offers",
    subtitle: "Special packages for families, friends & corporate teams.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="card-icon"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    ),
    title: "Solo-Friendly Destinations",
    subtitle: "Safe, soulful, and scenic routes for solo travellers.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="card-icon"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    ),
    title: "Budget Tours Under ₹50,000",
    subtitle: "Handpicked trips with unmatched value across India.",
  },
];

const Tex = () => {
  const cardRefs = useRef([]);
  const [visibleCards, setVisibleCards] = useState(Array(cards.length).fill(false));

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
  }, [visibleCards]);

  return (
    <div
      className="popular-searches-section" // New class for the section background
      // style={{ backgroundImage: `url(${sasi})` }} // REMOVE THIS LINE
    >
      <h2 className="section-title">Popular searches</h2> {/* Section Title */}
      <div className="search-cards-grid"> {/* Renamed for clarity */}
        {cards.map((card, index) => (
          <div
            key={index}
            className={`search-card-item ${visibleCards[index] ? "show" : ""}`} // Renamed classes
            ref={(el) => (cardRefs.current[index] = el)}
            data-index={index}
          >
            <div className="search-card-icon-wrapper"> {/* Wrapper for icon & circle */}
              {card.icon}
            </div>
            <div className="search-card-content"> {/* Renamed for clarity */}
              <h3 className="search-card-title">{card.title}</h3>
              <p className="search-card-subtitle">{card.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tex;