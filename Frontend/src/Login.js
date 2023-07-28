import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Footer from "./Footer";
import { login } from "./Slice/userSlice";
import axios from "axios";

function Loginpage() {
  const dispatch = useDispatch();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [nameerr, setnameErr] = useState("");
  const navigate = useNavigate();
  const handlesubmit = (e) => {
    e.preventDefault();
    setusername("");
    setpassword("");
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      axios
        .post("http://localhost:8181/api/v1/auth/authenticate", {
          email: username,
          password: password,
        })
        .then((response) => {
          console.log(response);
          dispatch(login(username));
          navigate("/");
        });
    } catch (error) {
      setnameErr("This User Doesn't Exits");
    }
  };

  return (
    <>
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
                label="Email"
                variant="filled"
              />

              <TextField
                input
                type="password"
                className="input"
                id="standard-basic"
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
                label="Password"
                variant="filled"
              />
              <p className="error">{nameerr}</p>

              <button
                onClick={(e) => {
                  submitHandler(e);
                }}
                type="submit"
              >
                Login
              </button>
            </form>
            <button
              onClick={() => {
                navigate("/register");
              }}
            >
              Don't have an account?Register
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Loginpage;
