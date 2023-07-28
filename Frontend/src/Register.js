import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "./Slice/userSlice";
function Register() {
  const navigate = useNavigate();
  const [name, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setrepassword] = useState("");
  const [err, seterr] = useState("");
  const dispatch = useDispatch();
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8181/api/v1/auth/register",
        { name: name, email: email, password: password }
      );
      if (response.status == 200) {
        dispatch(login(email));
        setUsername("");
        setEmail("");
        setPassword("");
        navigate("/");
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  return (
    <>
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
                value={name}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                label="Username"
                variant="filled"
              />
              <TextField
                id="standard-basic"
                className="input"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                label="Email"
                variant="filled"
              />
              <TextField
                input
                type="password"
                id="standard-basic"
                className="input"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                label="Password"
                variant="filled"
              />
              <TextField
                input
                type="password"
                id="standard-basic"
                className="input"
                value={repassword}
                onChange={(e) => {
                  setrepassword(e.target.value);
                }}
                label="Confirm Password"
                variant="filled"
              />
              <p className="error">{err}</p>
              <button
                onClick={(e) => {
                  submitHandler(e);
                }}
              >
                Register
              </button>
            </form>
            <button
              onClick={() => {
                navigate("/login");
              }}
            >
              Already have an account?Login
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Register;
