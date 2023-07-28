import React from "react";
import { useNavigate } from "react-router-dom";
import StepperComponent from "./Stepper";

const Success = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="success-message">
        <p className="tick-mark">Course Selected!</p>
        <p
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate("/profile");
          }}
        >
          Click to view profile
        </p>
      </div>
      <StepperComponent num={3} />
    </>
  );
};

export default Success;
