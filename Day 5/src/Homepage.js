import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
function Homepage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="main">
        <Navbar />
        <br />
        <br />

        <div className="header">
          <img src="logo1.jpg"></img>
          <h3>Horizon University </h3>
        </div>
        <div className="navbar1">
          <div className="nav">
            <a href="#">Home</a>
            <a href="#Aboutus">About Us</a>
            <a href="#Academics">Academics</a>
            <a href="#Admissions">Admissions</a>
            <a href="#Exams">Exams</a>
            <a href="#Courses">Courses</a>
          </div>
        </div>
        <div className="home">
          <div className="home-btn">
            <button
              className="btn"
              onClick={() => {
                navigate("/login");
              }}
            >
              Get Started
            </button>
          </div>
        </div>

        <div id="Courses">
          <div className="course-head">
            <h1>Our Featured Courses</h1>
            <h2>Knowledge is power, and our courses empower you to succeed</h2>
          </div>
          <div className="card">
            <div className="cards"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
