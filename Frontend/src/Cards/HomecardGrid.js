import React from "react";
import HomeCards from "./Homecards";
import "../CSS/Cards.css";
const CardsGrid = () => {
  const CardsData = [
    {
      title: "Software Development ",
      description:
        "A Software Engineer is an IT professional who designs, develops and maintains computer software at a company",
      features: [
        "Requirements Analysis: Understanding and eliciting the needs of the end-users and stakeholders to define the software requirements accurately",
        "The actual coding and implementation of the software based on the design specifications",
      ],
      image: "softwarelearn.jpg",
      button: "./softwaredevelopment",
    },
    {
      title: "Civil Engineering",
      description:
        "Civil engineers play a vital role in shaping the world we live in, ensuring the safety, efficiency, and sustainability of various structures and systems",
      features: [
        "Civil engineering is a professional engineering discipline",
        "that deals with the design, construction, and maintenance",
        "of the physical and naturally built environment",
      ],
      image: "./civilengineering.jpg",
      button: "./softwaredevelopment",
    },
    {
      title: "Electrical Engineering",
      description:
        "Electrical engineers design and analyze electronic circuits that power electronic devices, such as smartphones, computers, and communication Systems",
      features: [
        "Electrical engineering is an engineering discipline",
        "concerned with the study, design, and application of",
        "equipment, devices, and systems which use electricity",
      ],
      image: "electricalengineering.jpg",
      button: "./softwaredevelopment",
    },
    {
      title: "Mechanical Engineering",
      description:
        "Mechanical Engineering is a branch of engineering that involves the design, analysis, manufacturing, and maintenance of mechanical systems and devices",
      features: [
        " Electrical engineering is an engineering discipline",
        "concerned with the study, design, and application of",
        "equipment, devices, and systems which use electricity",
        "electronics, and electromagnetism",
      ],
      image: "mechanicalengineering.jpg",
      button: "./softwaredevelopment",
    },
    {
      title: "Artificial Intelligence",
      description:
        "Artificial Intelligence (AI) is a branch of computer science that focuses on creating intelligent machines",
      features: [
        " Artificial intelligence (AI) is intelligence demonstrated",
        "by computers, as opposed to human or animal intelligence",
        "Intelligence encompasses the ability to learn and to",
        "reason, to generalize, and to infer meaning",
      ],
      image: "aieng1.jpg",
      button: "./softwaredevelopment",
    },
    {
      title: "Aerospace Engineering",
      description:
        "Aerospace engineering is a specialized branch of engineering that focuses on the design, development, testing, and manufacturing of aircraft, spacecraft",
      features: [
        "Aerospace engineering, also called aeronautical",
        "engineering, or astronautical engineering, field of",
        "engineering concerned with the design, development",
        "construction, testing, and operation of vehicles operating",
        "in the Earth's atmosphere or in outer space",
      ],
      image: "civilengineering.jpg",
      button: "./softwaredevelopment",
    },
  ];

  return (
    <div className="cards-grid">
      {CardsData.map((cardData, index) => (
        <HomeCards
          key={index}
          title={cardData.title}
          description={cardData.description}
          features={cardData.features}
          image={cardData.image}
          button={cardData.button}
        />
      ))}
    </div>
  );
};

export default CardsGrid;
