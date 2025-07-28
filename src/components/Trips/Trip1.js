import React from "react";
import ff from "./Trip1images/trip1img1.jpg"
import ff2 from "./Trip1images/trip1img2.jpg"
import ff3 from "./Trip1images/trip1img3.jpg"
import ff4 from "./Trip1images/trip1img4.jpg"
import ff5 from "./Trip1images/trip1img5.jpg"
import { FaCalendarAlt, FaHotel, FaUtensils, FaCar, FaUsers, FaUserTie } from "react-icons/fa";
import Carousel from 'react-bootstrap/Carousel';
import Image1 from "./Trip1images/c1.jpg";
import Image2 from "./Trip1images/c2.jpg";
import Image3 from "./Trip1images/c3.jpg";
import Image4 from "./Trip1images/c4.jpg";

import img1 from "./Trip1images/p1.jpg";
import img2 from "./Trip1images/p2.jpg";
import img3 from "./Trip1images/p3.jpg";
import img4 from "./Trip1images/p4.jpg";
import img5 from "./Trip1images/p5.jpg";
import { GrDownload } from "react-icons/gr";
import { FaQuestion } from "react-icons/fa6";
import { CiWallet } from "react-icons/ci";
import { FaArrowDownWideShort } from "react-icons/fa6";


import {
    Container,
    Row,
    Col,
    Card,

    Accordion,
    Button,
    CardBody,

} from "react-bootstrap";
import "./Trip1.css"; // Custom CSS for styling
import banner from "./Trip1images/image1.jpg"; // Replace with your actual banner image



const imageGroups = [
    [Image1, Image2, Image3],
    [Image4, Image1, Image2], // Add more sets if needed
];


const reviews = [
    {
        name: "Daniel Lewis",
        text:
            "Traveling from Australia, we felt very well taken care of. The vehicle was clean and comfortable. Loved the rickshaw ride in Delhi and shopping in Jaipur!",
        img: img1,
        rating: 5,
    },
    {
        name: "Sophia Bennett",
        text:
            "Coming from the U.S., we were nervous, but this tour made it easy. Service was excellent. Highly recommended for international travelers!",
        img: img2,
        rating: 5,
    },
    {
        name: "Emily Rose",
        text:
            "One of the best trips ever! Every little detail was handled perfectly. Unforgettable experience.",
        img: img3,
        rating: 4,
    },
    {
        name: "Emily Rose",
        text:
            "One of the best trips ever! Every little detail was handled perfectly. Unforgettable experience.",
        img: img4,
        rating: 4,
    },
    {
        name: "Emily Rose",
        text:
            "One of the best trips ever! Every little detail was handled perfectly. Unforgettable experience.",
        img: img5,
        rating: 4,
    },
];

function renderStars(count) {
    return "⭐".repeat(count) + "✰".repeat(5 - count);
}
const repeatedReviews = Array(3).fill(reviews).flat();

const Trip1 = () => {

    const dates = [
        {
            startDay: "Tuesday",
            startDate: "15 Sep, 2025",
            endDay: "Wednesday",
            endDate: "24 Sep, 2025",
            price: "$1,049",
        },
        {
            startDay: "Monday",
            startDate: "22 Sep, 2025",
            endDay: "Wednesday",
            endDate: "31 Sep, 2025", // Note: Invalid date, but keeping it as-is from your screenshot
            price: "$1,049",
        },
    ];


    return (
        <>

            <Container fluid className="trip-page">

                <Container fluid className="mt-4" >
                    <Card className="trip-banner-card" >
                        <div className="banner-img-wrapper">
                            <Card.Img src={banner} alt="Trip Banner" className="banner-img" />
                            <div className="overlay-text">
                                <div className="breadcrumb-bar">
                                    <span>Home</span> | <span>Destinations Asia</span> | <span className="active">GOLDEN TRIANGLE TOUR</span>
                                </div>
                                <h1 className="banner-heading">Golden Triangle Tour</h1>
                            </div>
                        </div>

                        <Card.Body className="tab-row p-0">
                            <div className="tab-item">Overview</div>
                            <div className="tab-item">Itinerary</div>
                            <div className="tab-item">What's Included</div>
                            <div className="tab-item">Reviews</div>
                            <div className="tab-item">Availability</div>
                        </Card.Body>
                    </Card>
                </Container>


                {/* images section */}

                <div className="image-grid-container">
                    <div className="large-img">
                        <Card>
                            <Card.Img variant="top" src={ff} />
                        </Card>
                    </div>

                    <div className="small-img">
                        <Card>
                            <Card.Img variant="top" src={ff2} />
                        </Card>
                    </div>

                    <div className="small-img">
                        <Card>
                            <Card.Img variant="top" src={ff3} />
                        </Card>
                    </div>

                    <div className="small-img">
                        <Card>
                            <Card.Img variant="top" src={ff4} />
                        </Card>
                    </div>

                    <div className="small-img">
                        <Card>
                            <Card.Img variant="top" src={ff5} />
                        </Card>
                    </div>
                </div>


                <Container>
                    <Row>
                        <Col md={8}>
                            <Container className="my-4">
                                <h2>Explore Delhi, Agra, Jaipur</h2>
                                <Row className="gy-4">
                                    <Col md={4}>
                                        <Card className="highlight-card">
                                            <Card.Body className="d-flex">
                                                <div className="highlight-icon">
                                                    <FaCalendarAlt />
                                                </div>
                                                <div>
                                                    <Card.Title>Travel</Card.Title>
                                                    <Card.Text>06 days, 05 Nights</Card.Text>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                    <Col md={4}>
                                        <Card className="highlight-card">
                                            <Card.Body className="d-flex">
                                                <div className="highlight-icon">
                                                    <FaHotel />
                                                </div>
                                                <div>
                                                    <Card.Title>Accommodation</Card.Title>
                                                    <Card.Text>3 Star Hotels</Card.Text>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                    <Col md={4}>
                                        <Card className="highlight-card">
                                            <Card.Body className="d-flex">
                                                <div className="highlight-icon">
                                                    <FaUtensils />
                                                </div>
                                                <div>
                                                    <Card.Title>Meals</Card.Title>
                                                    <Card.Text>Daily buffet breakfast at the hotels.</Card.Text>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                    <Col md={4}>
                                        <Card className="highlight-card">
                                            <Card.Body className="d-flex">
                                                <div className="highlight-icon">
                                                    <FaCar />
                                                </div>
                                                <div>
                                                    <Card.Title>Transport</Card.Title>
                                                    <Card.Text>Transportation in Air-conditioned Vehicle</Card.Text>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                    <Col md={4}>
                                        <Card className="highlight-card">
                                            <Card.Body className="d-flex">
                                                <div className="highlight-icon">
                                                    <FaUsers />
                                                </div>
                                                <div>
                                                    <Card.Title>Group Size</Card.Title>
                                                    <Card.Text>Average 24 people</Card.Text>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                    <Col md={4}>
                                        <Card className="highlight-card">
                                            <Card.Body className="d-flex">
                                                <div className="highlight-icon">
                                                    <FaUserTie />
                                                </div>
                                                <div>
                                                    <Card.Title>Team</Card.Title>
                                                    <Card.Text>Expert Trip Manager</Card.Text>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Container>


                            {/* corosel images */}
                            <Container className="my-5">
                                <h2>Places You’ll See</h2>
                                <Row className="align-items-center">
                                    {/* Carousel on the left */}
                                    <Col md={12}>
                                        <Card className="carousel-card">
                                            <Carousel indicators={false}>
                                                {imageGroups.map((group, index) => (
                                                    <Carousel.Item key={index}>
                                                        <Row className="g-3 px-3">
                                                            {group.map((img, i) => (
                                                                <Col key={i} md={4}>
                                                                    <Card className="carousel-image-card">
                                                                        <Card.Img src={img} />
                                                                    </Card>
                                                                </Col>
                                                            ))}
                                                        </Row>
                                                    </Carousel.Item>
                                                ))}
                                            </Carousel>
                                        </Card>
                                    </Col>
                                    {/* Empty right side */}
                                    <Col md={4}></Col>
                                </Row>
                            </Container>



                            {/* overview */}

                            <Container className="my-5">
                                <Row className="g-4">
                                    {/* Left Column: Overview */}
                                    <Col md={12}>
                                        <h2 className="mb-4">Overview</h2>
                                        <p>
                                            India’s Golden triangle is a classic tour that comprises of India’s most
                                            popular cities. Have an incredible escapade to Delhi, Agra & Jaipur and
                                            create a cherishable vacation exploring UNESCO World Heritage sites,
                                            majestic forts and palaces, bustling markets and savouring sumptuous
                                            Indian cuisine. Begin and conclude your journey in the capital city,
                                            Delhi, where you will experience the perfect blend of modern era’s
                                            contemporary style & the medieval era’s grandeur. Go to the stunning
                                            city of Jaipur and marvel at the century old forts and palaces and drive
                                            to a former city of the Mughals and see the stunning Taj Mahal in Agra.
                                        </p>

                                        <h4>Highlights</h4>
                                        <ul>
                                            <li>Explore the sprawling and culturally diverse Delhi</li>
                                            <li>Visit the 73-metre tall Qutub Minar</li>
                                            <li>Explore the first garden mausoleum, Humayun’s Tomb</li>
                                            <li>Drive past the gigantic Mughal fortress, Red Fort</li>
                                            <li>Make your way through the narrow bylanes of Old Delhi in a rickshaw</li>
                                            <li>Witness the glory of Taj Mahal with an evening view</li>
                                            <li>Explore the huge expanse of the Agra Fort and learn about its Mughal architecture</li>
                                            <li>Learn about the history of the abandoned town of Fatehpur Sikri</li>
                                            <li>Take an elephant ride to the majestic 16th century Amber Fort</li>
                                            <li>
                                                Explore the colourful and captivating city of Jaipur – a UNESCO World Heritage Site
                                            </li>
                                            <li>Know the history behind the city’s century-old structures like City Palace</li>
                                            <li>Walk through the ancient observatory around Jantar Mantar</li>
                                            <li>
                                                Stop at the magnificent Hawa Mahal and click photos with the Palace as a backdrop.
                                            </li>
                                            <li>Visit World Heritage Sites in Delhi, Agra & Jaipur</li>
                                        </ul>
                                    </Col>


                                </Row>
                            </Container>


                            <Container className="my-5 timeline-container">
                                <Col md={12}>
                                    <Accordion defaultActiveKey="0">
                                        <div className="timeline-item">
                                            <span className="timeline-dot" />
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>Day 1 - Arrival in Delhi</Accordion.Header>
                                                <Accordion.Body>
                                                    Upon arrival at Delhi International Airport, our representative will meet you and assist you in transfer to your hotel. Check-in at the hotel on arrival and relax.

                                                    Delhi – India’s capital and major gateway to the country, contemporary Delhi is a bustling metropolis, which successfully combines in its fold, the ancient and the modern. Delhi unwinds a picture rich with culture, architecture, human diversity, history, monuments, museums, galleries, gardens and exotic shows. Comprising of two contrasting yet harmonious parts, the Old Delhi and the New Delhi, the city is a travel hub of Northern India. Delhi is a bliss for history lovers.

                                                    Overnight at hotel in Delhi.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </div>

                                        <div className="timeline-item">
                                            <span className="timeline-dot" />
                                            <Accordion.Item eventKey="1">
                                                <Accordion.Header>Day 2 - DELHI SIGHTSEEING</Accordion.Header>
                                                <Accordion.Body>
                                                    After breakfast, proceed with Delhi sightseeing tour with first visit to Jama Masjid – the largest Mosque in India. Visit Chandni Chowk – oldest, biggest bazaar of Old Delhi. Walk up to Fatehpuri Masjid and enjoy a rickshaw ride till Red Fort. Here our driver will meet you and drive past Red Fort to reach Rajghat, a memorial where Mahatma Gandhi was cremated. An eternal flame burns on one side of this memorial. Also visit India Gate, President House, Parliament House drive past and here you can take some pictures.

                                                    Visit the Humayun’s Tomb – first garden-style tomb of India… Visit Qutub Minar built by Qutab-ud-din Aibak in 1193 to mark the beginning of Muslim rule in India.

                                                    Overnight stay at hotel in Delhi.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </div>

                                        <div className="timeline-item">
                                            <span className="timeline-dot" />
                                            <Accordion.Item eventKey="2">
                                                <Accordion.Header>Day 3 - DELHI - AGRA</Accordion.Header>
                                                <Accordion.Body>
                                                    After breakfast, you will head to Agra. Agra – a wonderful former city of the Mughals, home to the famous Taj Mahal. Upon arrival, check-in at the hotel.

                                                    After some relaxation, visit the Agra Fort.

                                                    Later in the evening, pay visit to the Taj Mahal. A mausoleum built by Shah Jahan for his empress Mumtaz Mahal… Watching sunset over this iconic monument is truly a sight to behold.

                                                    Overnight stay at hotel in Agra.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </div>

                                        <div className="timeline-item">
                                            <span className="timeline-dot" />
                                            <Accordion.Item eventKey="3">
                                                <Accordion.Header>Day 4 - AGRA - JAIPUR</Accordion.Header>
                                                <Accordion.Body>
                                                    Post breakfast and check out, drive to the beautiful city of Jaipur. En route visit Fatehpur Sikri. Built by Emperor Akbar in 1569…

                                                    Continue drive to Jaipur. Upon arrival, check-in at the hotel.

                                                    Jaipur: Known as the Pink City of India…

                                                    Overnight stay at hotel in Jaipur.


                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </div>

                                        <div className="timeline-item">
                                            <span className="timeline-dot" />
                                            <Accordion.Item eventKey="4">
                                                <Accordion.Header>Day 5 - JAIPUR SIGHTSEEING</Accordion.Header>
                                                <Accordion.Body>
                                                    After an early morning breakfast, visit the magnificent Amber Fort. Ride up to this hilltop palace on a caparisoned elephant…

                                                    Later, take a stop to photograph the beautiful Hawa Mahal… Also see the City Palace… Next stop is Jantar Mantar, again built by Sawai Jai Singh II…

                                                    In the evening, proceed to Jaipur Bazaars… Jaipur is the central hub for shopping in India…

                                                    Overnight at hotel in Jaipur.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </div>

                                        <div className="timeline-item">
                                            <span className="timeline-dot" />
                                            <Accordion.Item eventKey="5">
                                                <Accordion.Header>Day 6 - JAIPUR – DELHI</Accordion.Header>
                                                <Accordion.Body>
                                                    After breakfast, check out from the hotel and drive to Delhi airport to catch the flight for your own ward destination.

                                                    “END OF THE TOUR”
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </div>
                                    </Accordion>
                                </Col>
                            </Container>




                            <Container className="my-5">
                                <h2 className="mb-4">What's Included</h2>
                                <Row>
                                    {/* Left side: content */}
                                    <Col md={12}>
                                        <Accordion defaultActiveKey="">
                                            {/* Included Items ✅ */}
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>✅ Accommodation</Accordion.Header>
                                                <Accordion.Body>
                                                    <ul>
                                                        <li>5 nights’ accommodation at 3-star hotels:</li>
                                                        <ul>
                                                            <li>Surya International – Delhi</li>
                                                            <li>Atulyaa Taj – Agra</li>
                                                            <li>Yash Regency – Jaipur</li>
                                                        </ul>
                                                        <li>Daily buffet breakfast at all hotels</li>
                                                    </ul>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="1">
                                                <Accordion.Header>✅ Experiences & Activities</Accordion.Header>
                                                <Accordion.Body>
                                                    <ul>
                                                        <li>Rickshaw ride through Old Delhi’s bustling lanes</li>
                                                        <li>Elephant ride to Amber Fort in Jaipur</li>
                                                        <li>Sightseeing across Delhi, Agra, and Jaipur including:</li>
                                                        <ul>
                                                            <li>Qutub Minar, Humayun’s Tomb, Red Fort (drive past), India Gate</li>
                                                            <li>Taj Mahal and Agra Fort</li>
                                                            <li>Fatehpur Sikri (en route to Jaipur)</li>
                                                            <li>City Palace, Hawa Mahal, Jantar Mantar, Jaipur bazaars</li>
                                                        </ul>
                                                    </ul>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="2">
                                                <Accordion.Header>✅ Transport</Accordion.Header>
                                                <Accordion.Body>
                                                    <ul>
                                                        <li>All airport transfers with meet & assist</li>
                                                        <li>Air-conditioned Toyota Innova Crysta for all travel</li>
                                                        <li>Professional driver with route knowledge</li>
                                                        <li>All tolls, parking, fuel, and taxes included</li>
                                                        <li>1 mineral water bottle per person, per day</li>
                                                    </ul>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="3">
                                                <Accordion.Header>✅ Support & Service</Accordion.Header>
                                                <Accordion.Body>
                                                    <ul>
                                                        <li>On-ground assistance during arrival and departure</li>
                                                        <li>All applicable taxes and service charges included</li>
                                                    </ul>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            {/* Not Included ❌ */}
                                            <Accordion.Item eventKey="4">
                                                <Accordion.Header>❌ Flights</Accordion.Header>
                                                <Accordion.Body>
                                                    <ul>
                                                        <li>Domestic and international airfare</li>
                                                        <li>Indian visa</li>
                                                    </ul>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="5">
                                                <Accordion.Header>❌ Insurance</Accordion.Header>
                                                <Accordion.Body>
                                                    <ul>
                                                        <li>Medical or travel insurance</li>
                                                        <li>Tips, laundry, telephone calls</li>
                                                        <li>Expenses due to flight delays, natural calamities, etc.</li>
                                                    </ul>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="6">
                                                <Accordion.Header>❌ Meals</Accordion.Header>
                                                <Accordion.Body>
                                                    <ul>
                                                        <li>Lunch and dinner</li>
                                                        <li>Snacks, beverages, and personal food expenses</li>
                                                    </ul>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </Col>

                                    {/* Right side empty */}
                                    <Col md={4}></Col>
                                </Row>
                            </Container>

                            <Container className="my-5">
                                <Row>
                                    {/* Left Section */}
                                    <Col md={12}>
                                        <h2 className="fw-bold">Customer Reviews</h2>
                                        <h1 className="display-6 fw-semibold">4.8 / 5</h1>
                                        <div style={{ fontSize: "1.8rem", color: "#f1c40f" }}>⭐⭐⭐⭐✰</div>
                                        <p className="text-muted">Based on 26K+ reviews</p>

                                        {/* Scrolling Carousel */}
                                        <div className="scroll-wrapper">
                                            <div className="scroll-content">
                                                {repeatedReviews.map((review, index) => (
                                                    <Card
                                                        key={index}
                                                        className="p-3 flex-shrink-0 review-card"
                                                    >
                                                        <Row className="align-items-center">
                                                            <Col xs={3} className="text-center">
                                                                <img
                                                                    src={review.img}
                                                                    alt={review.name}
                                                                    className="rounded-circle"
                                                                    style={{
                                                                        width: "60px",
                                                                        height: "60px",
                                                                        objectFit: "cover",
                                                                        border: "2px solid #ccc",
                                                                        padding: "2px",
                                                                    }}
                                                                />
                                                            </Col>
                                                            <Col xs={9}>
                                                                <Card.Text
                                                                    className="text-muted mb-2"
                                                                    style={{ fontStyle: "italic", fontSize: "0.9rem" }}
                                                                >
                                                                    “{review.text}”
                                                                </Card.Text>
                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <h6 className="mb-0 fw-semibold">{review.name}</h6>
                                                                    <div style={{ fontSize: "1.2rem", color: "#f1c40f" }}>
                                                                        {renderStars(review.rating)}
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </Card>
                                                ))}
                                            </div>
                                        </div>
                                    </Col>

                                    {/* Right Section (Optional for Booking Box) */}
                                    <Col md={4}></Col>
                                </Row>
                            </Container>



                            <Container className="my-5">
                                <h2 className="fw-bold mb-4">Dates & Availability</h2>

                                <Row>
                                    {/* Left column for cards */}
                                    <Col md={12}>
                                        {dates.map((item, index) => (
                                            <div key={index} className="shadow-sm custom-date-card p-3 mb-3 bg-white rounded">
                                                <Row className="align-items-center text-center text-md-start">
                                                    <Col xs={12} md={3}>
                                                        <div className="text-muted">{item.startDay}</div>
                                                        <div className="fw-bold fs-5">{item.startDate}</div>
                                                    </Col>

                                                    <Col xs={12} md={1} className="text-muted fs-4 text-center">
                                                        →
                                                    </Col>

                                                    <Col xs={12} md={3}>
                                                        <div className="text-muted">{item.endDay}</div>
                                                        <div className="fw-bold fs-5">{item.endDate}</div>
                                                    </Col>

                                                    <Col xs={12} md={3} className="mt-3 mt-md-0">
                                                        <div className="text-muted">Total price</div>
                                                        <div className="fw-bold fs-5">{item.price}</div>
                                                    </Col>

                                                    <Col xs={12} md={2} className="mt-3 mt-md-0 text-center text-md-end">
                                                        <Button variant="info" className="text-white px-4">
                                                            Contact Us
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            </div>
                                        ))}
                                    </Col>

                                </Row>
                            </Container>
                        </Col>


                        <Col md={4}>
                            <Container className="my-5">
                                <Row>

                                    <Col md={12}>
                                        <Card className="booking-widget shadow-sm">
                                            <Card.Body>
                                                <p className="text-muted mb-1">From</p>
                                                <h3 className="price">$1,049</h3>
                                                <Button className="w-100 mt-3 rounded-pill custom-btn-black">
                                                    Easy Quote
                                                </Button>
                                                <Button className="w-100 mt-3 rounded-pill custom-btn-red">
                                                    Check Availability
                                                </Button>

                                                <div className="d-flex align-items-start mt-3">
                                                    <CiWallet size={22} className="me-2 mt-1" />
                                                    <p className="mb-2">
                                                        Pay over time with smaller, interest-free instalments.
                                                    </p>
                                                </div>
                                                <div className="d-flex align-items-start">
                                                    <FaArrowDownWideShort size={22} className="me-2 mt-1" />
                                                    <p>Book once and share the cost with split payments.</p>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>


                                </Row>

                                {/* pyment section */}
                                <Row>
                                    <Col md={12}>
                                        <Card className="adventure-card shadow-sm">
                                            <Card.Body>
                                                <h5 className="adventure-title">Plan your adventure</h5>

                                                <div className="adventure-item">
                                                    <GrDownload className="adventure-icon" />
                                                    <span>Download the full trip itinerary</span>
                                                </div>

                                                <div className="adventure-item">
                                                    <FaQuestion className="adventure-icon" />
                                                    <span>Get answers to your travel questions</span>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                </Row>


                            </Container>
                        </Col>



                    </Row>
                </Container>


                <Container fluid className="mt-4" style={{ marginBottom: "2rem" }}>
                    <Row>
                        <Card className="trip-banner-card shadow-lg">
                            <div className="banner-img-wrapper">
                                <Card.Img src={banner} alt="Trip Banner" className="banner-img" />
                                <div className="overlay-text">
                                    <div className="breadcrumb-bar">
                                        <span>Home</span> | <span>Destinations Asia</span> |{" "}
                                        <span className="active">GOLDEN TRIANGLE TOUR</span>
                                    </div>
                                    <h1 className="banner-heading">
                                        Beyond Travel — Discover India in Style
                                    </h1>
                                    <Button>BOOK YOUR ADVENTURE</Button>
                                </div>
                            </div>
                        </Card>
                    </Row>
                </Container>
                <div>

                </div>

            </Container>
        </>
    );
};

export default Trip1;
