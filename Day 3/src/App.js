import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loginpage from "./Login";
import Register from "./Register";
import Error from "./Error";
import Homepage from "./Homepage";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Loginpage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
