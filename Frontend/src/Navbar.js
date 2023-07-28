import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function Navbar() {
  const user = useSelector((state) => state.user.user);
  console.log(user);
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
        <div className="main-nav">
          <div className="nav">
            <a href="#">Home</a>
            <a href="#course">Courses</a>
            <a href="#academics">Academics</a>
            <a href="#aboutus">Aboutus</a>
            {user ? (
              <>
                <a
                  onClick={() => {
                    navigate("/profile");
                  }}
                  href="#Admissions"
                >
                  Profile
                </a>
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigate("/logout");
                  }}
                >
                  Logout
                </a>
              </>
            ) : (
              <>
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Login
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
