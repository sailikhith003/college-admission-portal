import React, { useState } from "react";
import "../Cards/Application.css";
import axios from "axios";
import StepperComponent from "../Stepper";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const ApplicationForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setphonenumber] = useState("");
  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");
  const [error3, setError3] = useState("");
  const [error4, setError4] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    setError1("");
    setError2("");
    setError3("");
    setError4("");

    let isFormValid = true;

    if (!firstName.trim()) {
      setError1("First Name is Required");
      isFormValid = false;
    }
    if (!lastName.trim()) {
      setError2("Last Name is Required");
      isFormValid = false;
    }
    if (!email.trim()) {
      setError3("Email is Required");
      isFormValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError3("Invalid email format");
      isFormValid = false;
    }
    if (!phoneNumber.trim()) {
      setError4("Phone Number is Required");
      isFormValid = false;
    } else if (!/^\d{10}$/.test(phoneNumber)) {
      setError4("Invalid phone number format");
      isFormValid = false;
    }

    if (isFormValid) {
      try {
        await axios.post("http://localhost:8080/applicants", {
          firstName: firstName,
          lastName: lastName,
          email: email,
          phoneNumber: phoneNumber,
        });
        alert("Registration is Successful");
        setfirstName("");
        setlastName("");
        setEmail("");
        setphonenumber("");
        navigate("/documentupload");
      } catch (err) {
        console.log("Error", err);
      }
    }
  }

  return (
    <div className="parent">
      <form className="application-form">
        <h2>Application Form</h2>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(e) => {
              setfirstName(e.target.value);
            }}
            required
          />
        </div>
        <span className="error">{error1}</span>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={(e) => {
              setlastName(e.target.value);
            }}
            required
          />
        </div>
        <span className="error">{error2}</span>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
        </div>
        <span className="error">{error3}</span>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => {
              setphonenumber(e.target.value);
            }}
            required
          />
        </div>
        <span className="error">{error4}</span>
        <button type="submit" onClick={handleSubmit}>
          Proceed to Upload Documents
        </button>
      </form>
      <br />
      <StepperComponent num={1} />
    </div>
  );
};

export default ApplicationForm;
