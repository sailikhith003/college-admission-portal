import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Register() {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [err, seterr] = useState("");
  const [msg, setmsg] = useState("");
  const navigate = useNavigate();
  const handlesubmit = (e) => {
    e.preventDefault();
    setusername("");
    setpassword("");
    setemail("");
  };
  return (
    <>
      <Navbar />
      <br />
      <br />
      <div className="flex-center">
        <div className="outer">
          <div className="image">
            <img src="/signup.jpg  " />
          </div>
          <div className="container">
            <h1>Register</h1>
            <form className="auth">
              <TextField
                id="standard-basic"
                className="input"
                value={username}
                onChange={(e) => {
                  setusername(e.target.value);
                }}
                label="Username"
                variant="outlined"
              />
              <TextField
                id="standard-basic"
                className="input"
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                label="Email"
                variant="outlined"
              />
              <TextField
                id="standard-basic"
                className="input"
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
                label="Password"
                variant="outlined"
              />
              <TextField
                id="standard-basic"
                className="input"
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
                label="Confirm Password"
                variant="outlined"
              />
              <button className="btn" onClick={handlesubmit}>
                Register
              </button>
            </form>
            <button
              className="btn-1"
              onClick={() => {
                navigate("/login");
              }}
            >
              Already have an account?Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
