import React from "react";
import ff from "./Trip3images/Trip3.imge1.png"
import ff2 from "./Trip3images/Trip3.imge2.png"
import ff3 from "./Trip3images/Trip3.img3.jpg"
import ff4 from "./Trip3images/Trip.img4.jpg"
import ff5 from "./Trip3images/Trip.img5.jpg"
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
        name: "Emily Martinez",
        text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
        img: img1,
        rating: 5,
    },
    {
        name: "Jas Statham",
        text:
            "The perfect way to see Kerala... Peaceful, scenic, and full of charm. The houseboat experience was unforgettable and everything was so well organized.",
        img: img2,
        rating: 5,
    },
    {
        name: "Emily Martinez Cus",
        text:
           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
        img: img3,
        rating: 4,
    },
    {
        name: "Chloe Hall",
        text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
        img: img4,
        rating: 4,
    },
    {
        name: "Samuel Turner",
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

const Trip3 = () => {

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
                                <h1 className="banner-heading">BEST OF KERALA TOUR</h1>
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
                                <h2>Discover the Soul of South India - KERALA</h2>
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
                                                    <Card.Text>4 Star Hotels</Card.Text>
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
                                            Explore the natural beauty and peaceful charm of Kerala on this 6-day
                                            journey through Cochin, Munnar, Thekkady, and Alleppey. Walk through tea-covered hills, see rich wildlife, enjoy a relaxing boat stay on calm backwaters, and discover Kerala’s colorful culture and warm hospitality. From old-world streets in Cochin to quiet houseboat rides in Alleppey, this tour gives you the
                                            perfect mix of nature, comfort, and local experiences.
                                        </p>

                                        <h4>PRICING FOR 02 ADULTS</h4>
                                        <ul>
                                            <li> 04 STAR HOTEL COST – BASED ON 01 DOUBLE ROOM:</li>
                                            <li>TOTAL PACKAGE COST – USD 925</li>
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
                                                    Upon arrival at Kochi airport our representative will meet you and transfer you to the hotel in Kochi. KOCHI: Kochi, also known as Cochin, is a beautiful city in the Ernakulam district of Kerala. Over the years, the history and development of this city carries stubborn marks of the British, Arabs, Chinese, Dutch, and Portuguese. It is undoubtedly the best starting point on your discovery to capture the beauty of God’s own country – Kerala.
                                                    Overnight stay at hotel in Kochi.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </div>

                                        <div className="timeline-item">
                                            <span className="timeline-dot" />
                                            <Accordion.Item eventKey="1">
                                                <Accordion.Header>Day 2 - KOCHI – MUNNAR [165 KMS /APPROX. 5 HRS]</Accordion.Header>
                                                <Accordion.Body>
                                                    After breakfast, go for Kochi sightseeing tour begins with
                                                    visit to Fort Kochi located on the western coast of India
                                                    amidst the pristine waters of Arabian Sea. On visiting this fort, soak in the mesmerizing
                                                    specimens of the bygone era. The architecture of this gorgeous fort uncovers the layers of colonial\
                                                    influence ingrained in the landscape of this city.
                                                    Visit the St. Francis Church (Closed on Sundays from 08.00 to 11.00 hrs)
                                                    within the middle of fort’s complex. Built in the year 1503, it is the oldest church built by Europeans in India.
                                                    The lofty architecture of this Church is impressive in every way and has managed to retain its ancient charm, over the years. Also, visit the Jewish Synagogue located close to Fort Kochi,
                                                    which is more than 100-years old. It was built in 1568 and is a showpiece displaying hand-painted floor tiles, Belgium-imported glass chandeliors, rare antiques etc.
                                                    and an exclusive gallery. Your Kochi sightseeing tour ends with visit to Chinese Fishing Nets.
                                                    Later drive to Munnar. Upon arrival at Munnar check in to hotel and relax.
                                                    Overnight stay at hotel in Munnar.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </div>

                                        <div className="timeline-item">
                                            <span className="timeline-dot" />
                                            <Accordion.Item eventKey="2">
                                                <Accordion.Header>Day 3 : MUNNAR SIGHTSEEING</Accordion.Header>
                                                <Accordion.Body>
                                                    After breakfast, start sightseeing for MUNNAR: a beautiful hill station named after three rivers: Madhurapuzha, Nallathanni and Kundaly. It is a popular honeymoon destination in Kerala that offers spellbinding views of vast spice and tea plantations. It also boasts the highest peak in South India – Anamudi. Munnar is surrounded by various wildlife sanctuaries that house the grizzled giant squirrel, Elephant, Gaur, Nilgiri Langur, Sambar, etc and the endangered Nilgiri Tahr (Mountain Goat). Also, a blue flower “Neelakurinji:” grows here in every 12 years.

                                                    Visit the Eravikulam National Park, home to the exotic Nilgiri Tahr (Mountain Goat) and other endangered species.
                                                    (The park is closed in March every year for the mating season of the Nilgiri Tahr.)
                                                    Also visit the Mattupetty Dam, a concrete gravity dam with scenic views of tea gardens reflecting on its waters.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </div>

                                        <div className="timeline-item">
                                            <span className="timeline-dot" />
                                            <Accordion.Item eventKey="3">
                                                <Accordion.Header>Day 4 - MUNNAR - THEKKADY [110 KMS/APPROX. 3.5 HRS]</Accordion.Header>
                                                <Accordion.Body>
                                                    After breakfast, we will drive you to Thekkady. THEKKADY: A landscape set amidst the Western Ghats, Thekkady is known for its rich biodiversity and the Periyar Wildlife Sanctuary, a major tiger reserve.

                                                    Visit the Periyar Wildlife Sanctuary, home to Bengal tigers, elephants, boars, leopards and more.
                                                    Optional boat ride on Periyar Lake to spot wildlife and view surrounding spice plantations.
                                                    Overnight stay at hotel in Thekkady.

                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </div>

                                        <div className="timeline-item">
                                            <span className="timeline-dot" />
                                            <Accordion.Item eventKey="4">
                                                <Accordion.Header>Day 5 - THEKKADY – ALLEPPEY [145 KMS/APPROX. 4-5 HRS]</Accordion.Header>
                                                <Accordion.Body>
                                                    Drive to Alleppey – also called the “Venice of India”.
                                                    On arrival, board your Houseboat (Kettuvallam) and cruise through the backwaters.
                                                    Enjoy dinner and a pleasant overnight stay in the houseboat in Alleppey.


                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </div>

                                        <div className="timeline-item">
                                            <span className="timeline-dot" />
                                            <Accordion.Item eventKey="5">
                                                <Accordion.Header>Day 6 - ALLEPPEY - COCHIN [54 KMS/APPROX. 1.5 HRS]</Accordion.Header>
                                                <Accordion.Body>
                                                    After breakfast and relaxation on the houseboat, check out and transfer to Cochin airport for onward journey.
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
                                                        <li>5 nights’ accommodation at 4-star hotels as mentioned or similar:</li>
                                                        <ul>
                                                            <li>Gokulam Park – Cochin</li>

                                                            <li>Silver Tips – Munnar</li>

                                                            <li>Spicegrove – Thekkady</li>

                                                            <li>Premium Houseboat – Alleppey</li>
                                                        </ul>
                                                        <li>Daily buffet breakfast at all hotels</li>
                                                        <li>All meals included during the houseboat stay in Alleppey</li>
                                                    </ul>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="1">
                                                <Accordion.Header>✅ Experiences & Activities</Accordion.Header>
                                                <Accordion.Body>
                                                    <ul>
                                                        <li>Sightseeing in Cochin (Fort Kochi, Chinese Fishing Nets, St. Francis Church, Jewish Synagogue)</li>

                                                        <li>Tea estate visit, Eravikulam National Park & Mattupetty Dam in Munnar</li>

                                                        <li>Visit to Periyar Wildlife Sanctuary in Thekkady</li>

                                                        <li>Alleppey houseboat backwater cruise</li>

                                                        <li>Optional boat ride at Periyar Lake (additional cost)</li>
                                                    </ul>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="2">
                                                <Accordion.Header>✅ Transport</Accordion.Header>
                                                <Accordion.Body>
                                                    <ul>
                                                        <li> Private air-conditioned vehicle (Sedan) for all transfers and sightseeing</li>

                                                        <li>Pick-up and drop from Kochi Airport / Railway Station</li>

                                                        <li>Experienced, professional, English-speaking driver</li>

                                                        <li>All tolls, fuel, parking, and interstate taxes included</li>
                                                    </ul>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="3">
                                                <Accordion.Header>✅
                                                    Additional Service</Accordion.Header>
                                                <Accordion.Body>
                                                    <ul>
                                                        <li> Assistance during airport/railway transfers</li>

                                                        <li>All applicable government taxes and service charges.</li>
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
                                            <h4>Important Information</h4>
                                                <Accordion.Header>!
                                                   Things to Keep in Mind</Accordion.Header>
                                                <Accordion.Body>
                                                <p>24-Hour Assistance: Your dedicated Travel Expert can be reached at any time in case of 
                                                emergency. Local GeTS Holidays offices across India ensure on-ground support.</p>

<p>Hotel: Standard check-in at 14:00, check-out at 12:00 (early/late subject to availability).</p>

<p>Internet: Availability may vary by region. Hotels may charge hourly or daily.</p>

<p>Tipping: Not mandatory but appreciated.</p>
Suggested:


                                                
                                                    <ul>
                                                        <li>USD 10/day for driver</li>

 <li>USD 8/day for guide</li>

 <li>USD 3 for bellboy</li>

 <li>10% of the bill for waiters</li>
                                                    </ul>
                                                    <p>Luggage: Domestic flight allowance: 15 kg checked + 7 kg hand baggage. 
                                                    Excess baggage ~INR 250/kg.</p>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                             <Accordion.Item eventKey="6">
                                                <Accordion.Header>!
                                                    Passports and Visas</Accordion.Header>
                                                <Accordion.Body>
                                                    <ul>
                                                       <li>All travelers require a valid passport and visa.</li>

<li>Passport must be valid for 6 months with at least 2 blank pages.</li>

<li>Apply for an e-Visa (available for many countries including USA, UK, Australia) via:</li>
https://indianvisaonline.gov.in/evisa/tvoa.html

<li>Apply 7–30 days before arrival. Approval usually takes 72 hours.</li>
                                                    </ul>
                                                    <p>Multiple Entry Visa: Required if visiting neighboring countries (e.g., Nepal, Bhutan, Sri Lanka) along with India.</p>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                             <Accordion.Item eventKey="6">
                                                <Accordion.Header>❌
                                                    Health and Safety Information</Accordion.Header>
                                                <Accordion.Body>
                                                <p>COVID-19 Safety Protocols followed by staff, guides, and drivers:</p>
                                                    <ul>
                                                      <li> Thermal screening
</li>
                                                     
<li>Sanitization of vehicles and hotels</li>

<li>PPE usage (masks, gloves, sanitizers)</li>

<li>Daily health checks</li>

<li>Social distancing in public places</li>

<li>Safety kits provided to all guests (sanitizer, gloves, mask)</li>

<li>Emphasis on private/customized tours</li>

<li>E-Documents provided (vouchers, invoices, itinerary)</li>
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
                                       Explore iconic destinations with expert insights
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

export default Trip3;
