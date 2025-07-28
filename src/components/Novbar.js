import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Novbar.css";

import logo from "./images/logo1.png";
import { BiSolidHomeSmile, BiSolidUserAccount } from "react-icons/bi";
import { MdSettingsPhone } from "react-icons/md";
import { FaHandshakeAngle } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa"; // Import the phone icon

const Novbar = () => {
  return (
    <Navbar expand="lg" className="custom-navbar" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand-logo">
          <img src={logo} alt="TravaleoIndia Logo" className="nav-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center navigation-buttons-group"> {/* Added class for targeting nav buttons */}
            <Nav.Link as={Link} to="/">
              <button className="nav-button home-active-button"> {/* Specific class for active Home button */}
                <BiSolidHomeSmile /> Home {/* Changed text from Index to Home as per screenshot */}
              </button>
            </Nav.Link>
            <Nav.Link href="#about">
              <button className="nav-button default-nav-button"> {/* Specific class for default buttons */}
                <BiSolidUserAccount /> About
              </button>
            </Nav.Link>
            <Nav.Link href="#contact">
              <button className="nav-button default-nav-button">
                <MdSettingsPhone /> Contact
              </button>
            </Nav.Link>
            <Nav.Link href="#deals">
              <button className="nav-button default-nav-button">
                <FaHandshakeAngle /> Deals
              </button>
            </Nav.Link>
          </Nav>

          {/* Phone Number Section - Added outside the <Nav> component to give it independent alignment */}
          <div className="phone-contact-info ms-lg-4 d-none d-lg-flex align-items-center"> {/* Hidden on small, flex on large */}
            <FaPhoneAlt className="phone-icon" />
            <div className="phone-details">
              <span className="phone-number">+188 807 5000</span>
              <span className="phone-tagline">or call your travel agent</span>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Novbar;