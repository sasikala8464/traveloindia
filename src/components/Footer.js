import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { IoLogoXing } from "react-icons/io5";
import { FaYoutube, FaInstagram } from "react-icons/fa";
import { TbBrandPicsart } from "react-icons/tb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCcVisa,
  faCcMastercard,
  faCcAmex,
  faCcDiscover,
  faCcDinersClub,
} from "@fortawesome/free-brands-svg-icons";
import { FaCreditCard } from "react-icons/fa6";

import logo from "./images/logo1.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-section">
      {/* Top navbar-style strip */}
      <div className="footer-top">
        <div className="footer-logo">
          <img src={logo} alt="Logo" className="footer-logo-img" />
        </div>
        <div className="footer-follow">
          <h6 className="follow-title">Follow Us</h6>
          <div className="social-icons d-flex gap-3">
            <BiLogoFacebookCircle size={28} />
            <IoLogoXing size={28} />
            <FaYoutube size={28} />
            <FaInstagram size={28} />
            <TbBrandPicsart size={28} />
          </div>
        </div>
      </div>

      {/* Overlay content */}
      <div className="footer-overlay">
        <Container fluid className="text-light py-5">
          <Row className="mb-4">
            <Col md={3}>
              <h5>ABOUT TRAVALEOINDIA</h5>
              <p>About Us</p>
              <p>Our History</p>
              <p>Reviews</p>
              <p>Destinations</p>
              <p>Careers</p>
            </Col>

            <Col md={3}>
              <h5>DESTINATIONS</h5>
              <p>North India</p>
              <p>South India</p>
              <p>Middle East India</p>
              <p>North East India</p>
              <p>West India</p>
            </Col>

            <Col md={3}>
              <h5>SUPPORT</h5>
              <p>FAQs</p>
              <p>Contact</p>
              <p>Request a Quote</p>
              <p>Booking Conditions</p>
              <p>Recommendations</p>
            </Col>

            <Col md={3}>
              <h5>OUR NEWSLETTER</h5>
              <p>Subscribe to get updates on new tours and offers.</p>
              <div className="newsletter-group">
                <input
                  className="newsletter-input"
                  type="email"
                  placeholder="Your Email Address"
                />
                <button className="newsletter-button">Submit</button>
              </div>
            </Col>
          </Row>

          <Row className="align-items-center justify-content-between border-top pt-4">
            <Col md={6}>
              <h6>Payment Methods</h6>
              <div className="payment-icons">
                <FontAwesomeIcon icon={faCcVisa} size="2x" />
                <FontAwesomeIcon icon={faCcMastercard} size="2x" />
                <FontAwesomeIcon icon={faCcAmex} size="2x" />
                <FontAwesomeIcon icon={faCcDiscover} size="2x" />
                <FontAwesomeIcon icon={faCcDinersClub} size="2x" />
                <FaCreditCard size={30} />
                <span className="text-white fw-semibold ms-2">
                  Debit & Credit Cards Accepted
                </span>
              </div>
            </Col>
          </Row>

          <Row className="mt-4 text-center">
            <p className="mb-0">
              © 2024 TravaleoIndia. All rights reserved | Powered by OneContributor
            </p>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
