import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/footer";

// Pages
import Home from "./components/Home";
import DoctorDashboard from "./components/DoctorDashboard";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
// import Login from "./components/login";
// import SignUp from "./components/signup";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#f8f9fa]">
        <Navbar />
        <main className="flex-grow px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            {/* <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
