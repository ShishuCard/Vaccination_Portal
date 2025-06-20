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
import Testimonial from "./components/testimonial";

// import Login from "./components/login";
// import SignUp from "./components/signup";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#f8f9fa]">
        <Navbar />
        <main className="flex-grow px-4 py-6">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  {/* <Services /> */}
                  <Testimonial />
                </>
              }
            />
            {/* <Route path="/services" element={<Services />} /> */}
            {/* <Route path="/signup" element={<Signup />} />          <Route path="/vaccination" element={<GetStarted />} /> */}
            <Route path="/contact" element={<ContactUs />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
