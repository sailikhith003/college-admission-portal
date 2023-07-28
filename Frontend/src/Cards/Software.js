import React from "react";
import "../CSS/Cards.css";
import { useNavigate } from "react-router-dom";
import ApplicationForm from "./Application";
const Software = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="animation-container">
        <h1 className="animated-heading">Welcome to Our College!</h1>
        <p className="animated-text">
          We offer a wide range of courses and opportunities for your academic
          journey.
        </p>
      </div>
      <div className="card-select">
        <img
          src="softwarelearn.jpg"
          alt="Software Development"
          className="card-image"
        />
        <div className="card-content">
          <h2 className="card-title">Software Development</h2>
          <p className="card-description">
            Our software development program equips students with the skills and
            knowledge needed to excel in the ever-evolving tech industry.
          </p>
          <ul className="card-features">
            <li>
              Learn programming languages like JavaScript, Python, and Java.
            </li>
            <li>Hands-on experience with real-world projects.</li>
            <li>Collaborate with industry professionals and mentors.</li>
            <li>Build and deploy web and mobile applications.</li>
            <li>Explore the latest trends in software development.</li>
          </ul>
          <button
            onClick={() => {
              navigate("/applicationform");
            }}
            className="card-button"
          >
            Select Course
          </button>
        </div>
      </div>
    </>
  );
};

export default Software;
