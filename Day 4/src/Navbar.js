import React from "react";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="navbar">
        <h1
          className="head"
          onClick={() => {
            navigate("/");
          }}
        >
          Horizon University
        </h1>
        <div className="nav">
          <nav
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </nav>
          <nav
            onClick={() => {
              navigate("/register");
            }}
          >
            Register
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
