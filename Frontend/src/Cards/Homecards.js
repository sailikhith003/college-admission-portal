import React from "react";
import "../CSS/Cards.css";
import { useNavigate } from "react-router-dom";

const HomeCards = ({ title, description, features, image, button }) => {
  const navigate = useNavigate();
  return (
    <div className="card-select">
      <img src={image} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <ul className="card-features">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <button
          onClick={() => {
            navigate(button);
          }}
          className="card-button"
        >
          View Course
        </button>
      </div>
    </div>
  );
};
export default HomeCards;
