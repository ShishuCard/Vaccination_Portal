import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import DoctorDashboard from "./components/DoctorDashboard";
// import AboutUs from "./components/AboutUs";
// import ContactUs from "./components/ContactUs";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-[#f8f9fa]">
        <Navbar />
        <main className="px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
            {/* <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
