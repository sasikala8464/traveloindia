import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { motion } from "framer-motion";
import { GiAccordion } from "react-icons/gi";
import { SlBadge } from "react-icons/sl";
import { IoNewspaperSharp } from "react-icons/io5";
import { IoCarSport } from "react-icons/io5";
import { MdLocalActivity } from "react-icons/md";
import { MdPhoneCallback } from "react-icons/md";

import pi from "./images/per02.png"; // Only per01.jpg is needed now

import "./Discover.css";

const Discover = () => {
  return (
    <div className="discover-section"> {/* Renamed from bubble-section as bubbles are removed */}
      {/* Removed the .bubbles div entirely */}

      <Container className="content py-5">
        <Row className="align-items-center justify-content-center single-image-layout">
          {/* Left Side: Single Image */}
          <Col lg={6} md={8} className="mb-4 mb-lg-0 d-flex justify-content-center">
            <motion.div
              className="single-image-wrapper"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            >
             
              
            </motion.div>
             <img src={pi} alt="Discover India" className="main-discover-image" />
          </Col>

          {/* Right Side: Text Section (symbol-background also removed from here) */}
          <Col lg={6} className="mb-4 mb-lg-0 text-card-wrapper"> {/* Removed position-relative as symbol-background is gone */}
            {/* Removed the .symbol-background div entirely */}

            <div className="text-card-content"> {/* Removed position-relative */}
              <h1 className="display-4 fw-bold">
                Discover India Like Never Before —{" "}
                {/* Removed the span for wavy underline */}
                The Smartest Way To Travel
              </h1>
              <p className="text-muted mt-4 lead">
                <strong className="fw-semibold">TravaleoIndia</strong> offers personalized trips with
                premium stays, private travel, and unique local experiences —
                all planned for you.
              </p>

              <Card className="mt-5 p-4 shadow-lg border-0 rounded-4 feature-card">
                <Row className="g-3">
                  <Col xs={6}>
                    <p className="feature-item"><i className="fa-solid fa-box"><GiAccordion /></i> Accommodation</p>
                    <p className="feature-item"><i className="fa-solid fa-sparkles"><SlBadge /></i> Exclusive experiences</p>
                    <p className="feature-item"><i className="fa-solid fa-gear"><IoNewspaperSharp /></i> Personalized trip crafting</p>
                  </Col>
                  <Col xs={6}>
                    <p className="feature-item"><i className="fa-solid fa-car"><IoCarSport /></i> Transportation allowance</p>
                    <p className="feature-item"><i className="fa-solid fa-map-pin"><MdLocalActivity /></i> Local recommendations</p>
                    <p className="feature-item"><i className="fa-solid fa-headset"><MdPhoneCallback /></i> 24/7 support</p>
                  </Col>
                </Row>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Discover;