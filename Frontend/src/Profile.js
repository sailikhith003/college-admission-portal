import React, { useState, useEffect } from "react";
import axios from "axios";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router-dom";
import PaymentPage from "./Payment";

const ProfilePage = () => {
  const user = useSelector((state) => state.user.user);
  console.log(user);
  const [studentDetails, setStudentDetails] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    console.log("http://localhost:8080/applicants/" + user);
    axios
      .get("http://localhost:8080/applicants/" + user)
      .then((response) => {
        setStudentDetails(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);

  return (
    <div className="parent">
      <div className="profile-container">
        {studentDetails && (
          <div className="profile-header">
            <h1>Welcome, {studentDetails.firstName}!</h1>
            <p>Email: {studentDetails.email}</p>
            <p>Phone Number: {studentDetails.phoneNumber}</p>
            <p>Course:Sofware Development</p>
          </div>
        )}
        {!studentDetails && (
          <div>
            <h1>Please select the course To View Your Profile!!</h1>
          </div>
        )}
        <div>
          <p
            style={{ display: "flex", justifyContent: "center" }}
            onClick={() => {
              navigate("/payment");
            }}
          >
            Proceed to Payment
          </p>
        </div>
        <div
          className="bttn"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <button
            className="btn-1"
            onClick={() => {
              navigate("/");
            }}
            type="submit"
          >
            Proceed to Home Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
