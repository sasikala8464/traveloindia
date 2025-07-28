import React from "react";
import ff from "./Trip2images/trip2img1.jpg"
import ff2 from "./Trip2images/trip2img2.jpg"
import ff3 from "./Trip2images/trip3img3.jpg"
import ff4 from "./Trip2images/trip2img4.jpg"
import ff5 from "./Trip2images/trip2img5.jpg"
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
        name: "Chloe Hall",
        text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
        img: img1,
        rating: 5,
    },
    {
        name: "Samuel Turner",
        text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
        img: img2,
        rating: 5,
    },
    {
        name: "Sebastian G.",
        text:
"My kids loved the camel farm and the boat rides. The team made travel stress-free with smooth check-ins and assistance. Highly recommended!",

        img: img3,
        rating: 4,
    },
    {
        name: "Chloe Hall",
        text:
            "The combination of royal Rajasthan and spiritual Varanasi was just perfect. Every detail was taken care of. From hotel stays to transfers. An unforgettable journey!",
        img: img4,
        rating: 4,
    },
    {
        name: "Emily Martinez",
        text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
        img: img5,
        rating: 4,
    },
];

function renderStars(count) {
    return "⭐".repeat(count) + "✰".repeat(5 - count);
}
const repeatedReviews = Array(3).fill(reviews).flat();

const Trip2 = () => {

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
                                    <span>Home</span> | <span>Destinations Asia</span> | <span className="active">MAGICAL RAJASTHAN WITH SPRITUAL VARANASI</span>
                                </div>
                                <h1 className="banner-heading">MAGICAL RAJASTHAN WITH SPRITUAL VARANASI</h1>
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
                                <h2>Colours of Rajasthan & the Soul of Varanasi Tour</h2>
                                <Row className="gy-4">
                                    <Col md={4}>
                                        <Card className="highlight-card">
                                            <Card.Body className="d-flex">
                                                <div className="highlight-icon">
                                                    <FaCalendarAlt />
                                                </div>
                                                <div>
                                                    <Card.Title>Travel</Card.Title>
                                                    <Card.Text>16 Nights, 17 Days</Card.Text>
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
                                            One of the oldest civilisations in the world, India is a mosaic of multicultural experiences. With a rich heritage and myriad attractions, the country is among the most popular tourist destinations in the world. It covers an area of 32, 87,263 sq. km, extending from the snow-covered Himalayan heights to the tropical rain forests of the south. As the 7th largest country in the world, India stands apart from the rest of Asia, marked off as it is by mountains and the sea, which give the country a distinct geographical entity.
                                        </p>

                                        <h4>Highlights</h4>
                                        <ul>
                                            <li>Visit the magnificent Jama Masjid in Delhi.</li>
                                            <li>Excursion to the 18th-century city of Mandawa popular for its Havelis adorned with stunning architecture.</li>
                                            <li>Visit the Junagarh Fort for an ultimate architectural feat in Bikaner.</li>
                                            <li>Explore the splendor of Mehrangarh Fort in Jodhpur.</li>
                                            <li>Jaipur sightseeing tour – Amer Fort, City Palace, Jantar Mantar, and Hawa Mahal and the local bazaars of Jaipur.</li>
                                            <li>Experience a sunset view of the Taj Mahal.</li>
                                            <li>Wildlife excursion to the Ranthambore National Park.</li>
                                            <li>Visit the 16th-century city Fatehpur Sikri – Buland Darwaza, Panch Mahal, Sheikh Salim Chishti Tomb, Jodha Bai Palace, Moti Mahal, etc</li>
                                            <li>Attend the Ganga Aarti at Dashashwamedh Ghat in Varanasi on a boat.</li>
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
                                                    After arrival at the Delhi Airport, meet & greet at the airport with our representative and get transferred to the hotel. The rest of the night is at leisure. Overnight stay in Delhi.
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
                                                <Accordion.Header>Day 3 -  Delhi - Mandawa (260 Kms / Approx 06 Hrs drive)</Accordion.Header>
                                                <Accordion.Body>
                                                    After breakfast, check out and drive to Mandawa. Explore Mandawa’s bazaars and Shekhawati Havelis.
                                                    Overnight stay in Mandawa.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </div>

                                        <div className="timeline-item">
                                            <span className="timeline-dot" />
                                            <Accordion.Item eventKey="3">
                                                <Accordion.Header>Day 4 - Mandawa - Bikaner (220 Kms / Approx 04 Hrs drive)</Accordion.Header>
                                                <Accordion.Body>
                                                    Check-in at hotel in Bikaner, then visit Junagarh Fort and Camel research and breeding farm.
                                                    Overnight stay in Mandawa. (likely meant to be Bikaner)
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </div>

                                        <div className="timeline-item">
                                            <span className="timeline-dot" />
                                            <Accordion.Item eventKey="4">
                                                <Accordion.Header>Day 5 - Bikaner - Jodhpur (250 Kms / Approx 06 Hrs drive)</Accordion.Header>
                                                <Accordion.Body>
                                                    Arrive in Jodhpur, check-in. Known as Blue City, famous for Mehrangarh Fort and Marwari horses.
                                                    Overnight stay in Jodhpur.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </div>

                                        <div className="timeline-item">
                                            <span className="timeline-dot" />
                                            <Accordion.Item eventKey="5">
                                                <Accordion.Header>Day 6 - Jodhpur Sightseeing</Accordion.Header>
                                                <Accordion.Body>
                                                    Visit Mehrangarh Fort and its palaces (Moti Mahal, Phool Mahal, Sheesh Mahal, etc.) and Jaswant Thada.
                                                    Overnight stay in Jodhpur.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </div>
                                        <div className="timeline-item">
                                            <span className="timeline-dot" />
                                            <Accordion.Item eventKey="5">
                                                <Accordion.Header>Day 7 - Jodhpur - Udaipur (250 Kms / Approx 05 Hrs drive) - Enroute Ranakpur</Accordion.Header>
                                                <Accordion.Body>
                                                    Visit Ranakpur Jain Temples, then drive to Udaipur.
                                                    Overnight stay in Udaipur.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </div>
                                        <div className="timeline-item">
                                            <span className="timeline-dot" />
                                            <Accordion.Item eventKey="5">
                                                <Accordion.Header>Day 8 - Udaipur Sightseeing</Accordion.Header>
                                                <Accordion.Body>
                                                    Visit City Palace, Sahelion Ki Bari, Lok Kala Mandal, Shilpgram, and enjoy Boat Ride on Lake Pichola.
                                                    Overnight stay in Udaipur.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </div>
                                        <div className="timeline-item">
                                            <span className="timeline-dot" />
                                            <Accordion.Item eventKey="5">
                                                <Accordion.Header>Day 9 - Udaipur - Jaipur (393 Kms / Approx 07 Hrs drive)</Accordion.Header>
                                                <Accordion.Body>
                                                    Drive to Jaipur, the “Pink City”.
                                                    Overnight stay in Jaipur.                </Accordion.Body>
                                            </Accordion.Item>
                                        </div>
                                        <div className="timeline-item">
                                            <span className="timeline-dot" />
                                            <Accordion.Item eventKey="5">
                                                <Accordion.Header>Day 10 - Jaipur Sightseeing</Accordion.Header>
                                                <Accordion.Body>
                                                    Visit Amer Fort (with Elephant Ride), City Palace, Jantar Mantar, Hawa Mahal. Afternoon free for shopping.
                                                    Overnight stay in Jaipur.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </div>
                                        <div className="timeline-item">
                                            <span className="timeline-dot" />
                                            <Accordion.Item eventKey="5">
                                                <Accordion.Header>Day 11 - Jaipur - Ranthambore (164 Kms / Approx. 04 Hrs. drive)
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    Drive to Ranthambore, check-in, free time or village walk.
                                                    Overnight stay in Ranthambore.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </div>
                                        <div className="timeline-item">
                                            <span className="timeline-dot" />
                                            <Accordion.Item eventKey="5">
                                                <Accordion.Header>Day 12 -Ranthambore Safari</Accordion.Header>
                                                <Accordion.Body>
                                                    Morning & afternoon shared Jeep safaris in Ranthambore National Park.
                                                    Overnight stay in Ranthambore.
                                                    Overnight stay in Jodhpur.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </div>
                                        <div className="timeline-item">
                                            <span className="timeline-dot" />
                                            <Accordion.Item eventKey="5">
                                                <Accordion.Header>Day 13 - :Ranthambore - Agra (260 Kms / Approx. 06 Hrs. drive); En-route Fatehpur Sikri</Accordion.Header>
                                                <Accordion.Body>
                                                    Visit Fatehpur Sikri, then reach Agra. Visit Taj Mahal, Agra Fort, and Mehtab Bagh.
                                                    Overnight stay in Agra.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </div>
                                        <div className="timeline-item">
                                            <span className="timeline-dot" />
                                            <Accordion.Item eventKey="5">
                                                <Accordion.Header>Day 14 - Agra - Delhi / Delhi – Varanasi flight</Accordion.Header>
                                                <Accordion.Body>
                                                    Fly from Delhi to Varanasi, transfer to hotel.
                                                    Overnight stay in Varanasi.Overnight stay in Jodhpur.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </div>
                                        <div className="timeline-item">
                                            <span className="timeline-dot" />
                                            <Accordion.Item eventKey="5">
                                                <Accordion.Header>Day 15 - Varanasi Sightseeing</Accordion.Header>
                                                <Accordion.Body>
                                                    Morning Boat Ride on Ganges, visit Sarnath, Birla Temple, Tulsi Manas Temple, Durga Temple, and attend Ganga Aarti at Dashashwamedh Ghat.
                                                    Overnight stay in Varanasi.                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </div>
                                        <div className="timeline-item">
                                            <span className="timeline-dot" />
                                            <Accordion.Item eventKey="5">
                                                <Accordion.Header>Day 16 -  Varanasi – Delhi flight</Accordion.Header>
                                                <Accordion.Body>
                                                    Fly from Varanasi to Delhi, rest of day at leisure.
                                                    Overnight stay in Delhi.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </div>
                                        <div className="timeline-item">
                                            <span className="timeline-dot" />
                                            <Accordion.Item eventKey="5">
                                                <Accordion.Header>Day 17 - Delhi - Departure</Accordion.Header>
                                                <Accordion.Body>
                                                    Transfer to airport for departure.
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
                                                        <li>16 nights’ accommodation in double/twin room with breakfast</li>
                                                        <li>Hotels as mentioned or similar:</li>
                                                        <ul>
                                                            <li>Surya International – Delhi</li>

                                                            <li>Mandawa Haveli – Mandawa</li>

                                                            <li>Harasar Haveli – Bikaner</li>

                                                            <li>Kothi Heritage – Jodhpur</li>

                                                            <li>Atulyaa Niwas – Udaipur</li>

                                                            <li>WH Traditional Haveli – Jaipur</li>

                                                            <li>Jungle Retreat – Ranthambore</li>

                                                            <li>Atulyaa Taj – Agra</li>

                                                            <li>Hotel Tridev – Varanasi</li>

                                                        </ul>
                                                    </ul>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="1">
                                                <Accordion.Header>✅Guide</Accordion.Header>
                                                <Accordion.Body>
                                                    <ul>
                                                        <li>Professional & well-dressed English-speaking (manageable) driver for entire trip</li>
                                                        <li>Assistance by GeTS Holidays representatives on arrival & departure</li>
                                                    </ul>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="1">
                                                <Accordion.Header>Adventure & Sightseeing</Accordion.Header>
                                                <Accordion.Body>
                                                    <ul>
                                                      <li> Rickshaw Ride in Old Delhi</li>

 <li>Elephant Ride to Amer Fort in Jaipur</li>

 <li>Boat ride at Lake Pichola in Udaipur</li>

 <li>Sunset boat ride + Ganga Aarti in Varanasi</li>

 <li>1 morning + 1 evening shared Jeep Safari in Ranthambore</li>

 <li>1 bottled water per person per day</li>

 <li>All government taxes included</li>
                                                    </ul>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="2">
                                                <Accordion.Header>✅ Transport</Accordion.Header>
                                                <Accordion.Body>
                                                    <ul>
                                                       <li> All sightseeing and transfers by private air-conditioned vehicle</li>

<li>Airport and railway station pickup/drop assistance</li>

<li>All vehicle-related charges included (driver, tolls, fuel, parking).</li>
                                                    </ul>
                                                </Accordion.Body>
                                            </Accordion.Item>


                                            {/* Not Included ❌ */}
                                            <Accordion.Item eventKey="4">
                                                <Accordion.Header>❌ Flights</Accordion.Header>
                                                <Accordion.Body>
                                                    <ul>
                                                        <li>International airfare</li>
                                                        <li>Domestic airfare</li>
                                                        <ul>
                                                            <li>Delhi – Varanasi – Delhi flight: USD 128 per person</li>
                                                        </ul>
                                                    </ul>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="5">
                                                <Accordion.Header>❌ Insurance</Accordion.Header>
                                                <Accordion.Body>
                                                    <ul>
                                                        <li>Medical or travel insurance for any kind.</li>
                                                       
                                                    </ul>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="6">
                                                <Accordion.Header>❌ Meals & personal experience</Accordion.Header>
                                                <Accordion.Body>
                                                    <ul>
                                                        <li>Lunch and dinner not included</li>
                                                        <li>Personal expenses (e.g., drinks, tips, snacks, laundry, calls)</li>
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

export default Trip2;
