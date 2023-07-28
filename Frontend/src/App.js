import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loginpage from "./Login";
import Register from "./Register";
import Error from "./Error";
import Homepage from "./Homepage";
import Test from "./Test";
import Software from "./Cards/Software";
import Logout from "./Logout";
import ApplicationForm from "./Cards/Application";
import UploadForm from "./Cards/Document";
import ProfilePage from "./Profile";
import Success from "./RegistrationSuccess";
import Contact from "./Contact";
import PaymentPage from "./Payment";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Loginpage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/test" element={<Test />} />
          <Route path="*" element={<Error />} />
          <Route path="/softwaredevelopment" element={<Software />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/applicationform" element={<ApplicationForm />} />
          <Route path="/documentupload" element={<UploadForm />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/success" element={<Success />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/payment" element={<PaymentPage />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
