import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Loginpage() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const handlesubmit = (e) => {
    e.preventDefault();
    setusername("");
    setpassword("");
  };

  return (
    <>
      <Navbar />
      <br />
      <br />
      <div className="flex-center">
        <div className="outer">
          <div className="image">
            <img src="/login.jpg  " />
          </div>
          <div className="container">
            <h1>Login</h1>
            <form className="auth" onSubmit={handlesubmit}>
              <TextField
                className="input"
                id="standard-basic"
                value={username}
                onChange={(e) => {
                  setusername(e.target.value);
                }}
                label="Username"
                variant="outlined"
              />
              <TextField
                className="input"
                id="standard-basic"
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
                label="Password"
                variant="outlined"
              />
              <button className="btn" type="submit">
                Login
              </button>
            </form>
            <button
              className="btn-1"
              onClick={() => {
                navigate("/register");
              }}
            >
              Don't have an account?Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Loginpage;
