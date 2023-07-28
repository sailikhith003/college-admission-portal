import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AboutUsPage from "./Aboutus";
import Footer from "./Footer";
import CardsGrid from "./Cards/HomecardGrid";

function Homepage() {
  const navigate = useNavigate();
  const transition = { type: "spring", duration: 3 };

  return (
    <>
      <div className="main">
        <Navbar />
      </div>
      <div className="home">
        <div className="home-btn">
          <button
            onClick={() => {
              navigate("/login");
            }}
          >
            Get Started
          </button>
          <div id="course" className="space"></div>
        </div>
      </div>
      <div>
        <div className="course-head">
          <h1>Our Featured Courses</h1>
          <h2>Knowledge is power, and our courses empower you to succeed</h2>
        </div>
        <div className="card">
          <CardsGrid />
        </div>
        <div id="aacademics">
          <div id="academics"> </div>
          <div id="aacademics1"></div>
        </div>
        <div className="academics" id="Academics">
          <header>
            <h1>Welcome to the Academic Page</h1>
            <p>Explore our academic programs and courses.</p>
          </header>
          <Carousel
            className="carousel"
            autoPlay={true}
            infiniteLoop={true}
            interval={1800}
            showThumbs={false}
            showStatus={false}
            stopOnHover={false}
          >
            <div>
              <img src="/b4.jpg" alt="carousel" />
            </div>
            <div>
              <img src="/b5.jpg" alt="carousel" />
            </div>
            <div>
              <img src="/b6.jpg" alt="carousel" />
            </div>
          </Carousel>
          <section className="programs">
            <h2>Academic Programs</h2>
            <ul>
              <li>Bachelor's Degree</li>
              <li>Master's Degree</li>
              <li>Ph.D. Programs</li>
            </ul>
          </section>
          <section className="admission">
            <h2>Admission Requirements</h2>
            <ul>
              <li>High school diploma or equivalent</li>
              <li>Letters of recommendation</li>
              <li>Personal statement</li>
              <li>Transcripts from previous institutions</li>
            </ul>
          </section>

          <footer>
            <p>For more information, contact our admissions office.</p>
          </footer>
          <div id="aacademics">
            <div id="aboutus"> </div>
            <div id="aacademics1"></div>
          </div>

          <AboutUsPage />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Homepage;
