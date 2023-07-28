import React, { useState } from "react";
import "../Cards/Application.css";
import axios from "axios";
import StepperComponent from "../Stepper";
import Success from "../RegistrationSuccess";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";

const ApplicationForm = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [tenthmarks, settenthmarks] = useState("");
  const [twelvethmarks, settwelvethmark] = useState("");
  const [document1, setdocument1] = useState("");
  const [document2, setdocument2] = useState("");
  const [stepcount, setStepCount] = useState(2);
  const [error1, setError1] = useState();

  async function handleSubmit(e) {
    e.preventDefault();
    if (!tenthmarks.trim()) {
      setError1("This field is Mandatory");
    }
    if (!twelvethmarks.trim()) {
      setError1("This field is Mandatory");
    }
    if (!document1.trim()) {
      setError1("This field is Mandatory");
    }
    if (!document2.trim()) {
      setError1("This field is Mandatory");
    } else {
      try {
        await axios.post("http://localhost:8080/upload", {
          tenthPercentage: tenthmarks,
          twelvethPercentage: twelvethmarks,
          document1Path: document1,
          document2Path: document2,
        });

        alert("Done");
        setId("");
        settenthmarks("");
        settwelvethmark("");
        setdocument1("");
        setdocument2("");
        setStepCount(3);
        navigate("/success");
      } catch (err) {
        console.log(err.message);
      }
    }
  }

  return (
    <>
      <div className="parent">
        <form
          className="application-form"
          onClick={() => {
            navigate("");
          }}
        >
          <h2>Document Upload Form</h2>
          <div className="form-group">
            <label htmlFor="marks">10th Percentage:</label>
            <input
              type="number"
              name="10thpercenatge"
              value={tenthmarks}
              onChange={(e) => {
                settenthmarks(e.target.value);
              }}
              required
            />
          </div>
          <span className="error">{error1}</span>
          <div className="form-group">
            <label htmlFor="marks">12th Percentage:</label>
            <input
              type="number"
              name="12thpercentage"
              value={twelvethmarks}
              onChange={(e) => {
                settwelvethmark(e.target.value);
              }}
              required
            />
          </div>
          <span className="error">{error1}</span>
          <div className="form-group">
            <label htmlFor="documnet">Upload 10th Marksheet:</label>
            <input
              type="file"
              name="document1"
              accept=".pdf,.doc,.docx"
              value={document1}
              onChange={(e) => {
                setdocument1(e.target.value);
              }}
              required
            />
          </div>
          <span className="error">{error1}</span>
          <div className="form-group">
            <label htmlFor="document">Upload 12th Marksheet:</label>
            <input
              type="file"
              name="document2"
              accept=".pdf,.doc,.docx"
              value={document2}
              onChange={(e) => {
                setdocument2(e.target.value);
              }}
              required
            />
          </div>
          <span className="error">{error1}</span>
          <button
            type="submit"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Submit
          </button>
        </form>
        <br />
        <StepperComponent num={stepcount} />
      </div>
    </>
  );
};

export default ApplicationForm;
