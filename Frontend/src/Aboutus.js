import React from "react";
import { useNavigate } from "react-router-dom";

const AboutUsPage = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          color: "#333",
          marginBottom: "20px",
        }}
      >
        About Us - Horizon University
      </h1>
      <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#666" }}>
        Welcome to Horizon University, where excellence in education meets a
        nurturing environment! We are committed to providing a transformative
        educational experience that empowers students to become intellectually
        curious, socially responsible, and innovative leaders.
      </p>
      <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#666" }}>
        Our dedicated faculty and staff work tirelessly to inspire and guide
        students towards their fullest potential. At Horizon, we celebrate
        diversity and believe in fostering an inclusive community that values
        different perspectives and backgrounds.
      </p>
      <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#666" }}>
        Whether you are an aspiring undergraduate, a postgraduate student
        seeking specialization, or a lifelong learner looking for enrichment
        programs, Horizon welcomes you with open arms. Join our vibrant academic
        community and embark on a journey of intellectual growth and personal
        development.
      </p>
      <p style={{ fontSize: "14px", color: "#777", marginTop: "30px" }}>
        For any inquiries or further information, please don't hesitate to
        contact us:
        <br />
        Address: [ Horizon University Vinewood Street Cityville, Stateville
        23876 United States ]
        <br />
        Phone: [75628930]
        <br />
        Email: [horizonuniversity@hotmail.com]
        <br />
        <p
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate("/contact");
          }}
        >
          For any Queries,Click here
        </p>
      </p>
    </div>
  );
};

export default AboutUsPage;
