import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import Alert from "@mui/material/Alert";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [saved, setsaved] = useState();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const feedSubmit = async (e) => {
    e.preventDefault();
    const data = { name: name, email: email, message: message };
    console.log(data);
    axios.post("http://localhost:8081/feedback/addfeed", data);
    setsaved(true);
    toast.success("Feedback Submitted Successfully !", {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    setTimeout(() => {
      window.location.reload();
    }, 2500);
  };
  return (
    <>
      <div className="outer-cont">
        <div className="contact-page">
          <h1>Contact Us</h1>

          <p>
            We'd love to hear from you! Feel free to reach out to us with any
            inquiries or feedback regarding our Kitchen Display System.
          </p>

          <h2>Send Us a Message</h2>
          <form className="contact-form" onSubmit={feedSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="name"
                id="name"
                name="name"
                value={name}
                onChange={handleNameChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={message}
                onChange={handleMessageChange}
                required
              />
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
      {setsaved && (
        <div className="alert">
          <Alert severity="success">Your Feedback is saved Successfully</Alert>
        </div>
      )}
    </>
  );
};

export default ContactPage;
