import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/services";
import Testimonial from "./components/testimonial";
import Footer from "./components/footer";
import Login from "./components/login";
import AboutUS from "./components/aboutUs";
import Signup from "./components/signup";
import GetStarted from "./components/vaccinationPage";
import ContactUs from "./components/contactUs";
import PrivacyPolicy from "./components/privacy";
import CookiePolicy from "./components/cookies";
import TermsOfUse from "./components/terms";
import DoctorDashboard from "./components/DoctorDashboard";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import ChildPage from "./components/ChildPage";
import VaccineEducation from "./components/VaccineEducation";
import ImmunizationTracking from "./components/ImmunizationTrackingPage";
import AffordableImmunization from "./components/Affordable";
import MissionIndradhanush from "./components/schemes/MissionIndradhanush";
import UniversalImmunization from "./components/schemes/UniversalImmunization";
import PMJAYScheme from "./components/schemes/PMJAYScheme";
import useLenis from "./components/useLenis";// Custom hook for smooth scrolling
import { useEffect, useState } from "react";
import Fts  from "./components/Fts";
import {ToastContainer} from 'react-toastify';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

const App = () => {
  const [theme, setTheme] = useState("light");
  useLenis();
  const [user, loading] = useAuthState(auth);

  // Toggle dark class on body for Tailwind v4 dark mode
  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <Router>
      <ScrollToTop />
      {/* No need for custom theme classes, just use Tailwind's dark mode */}
      <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
        <Navbar toggleTheme={toggleTheme} theme={theme} />
        <Routes>
          <Route path="/child/:id" element={<ChildPage />} />
          <Route
            path="/"
            element={
              <>
                <Home />
                <Services />
                <Testimonial />
              </>
            }
          />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<AboutUS />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/vaccination" element={<GetStarted />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/vaccine-education" element={<VaccineEducation />} />
          <Route path="/Immunization-Tracking-Page" element={<ImmunizationTracking />} />
          <Route path="/affordable" element={<AffordableImmunization />} />
          <Route path="/schemes/mission-indradhanush" element={<MissionIndradhanush />} />
          <Route path="/schemes/universal-immunization" element={<UniversalImmunization />} />
          <Route path="/schemes/pmjay" element={<PMJAYScheme />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/cookies" element={<CookiePolicy />} />
          <Route path="/terms" element={<TermsOfUse />} />
          <Route path="/features" element={<Fts />} />
          <Route
            path="/login"
            element={loading ? (
              <div className="flex justify-center items-center min-h-screen">
                <p className="text-xl">Loading...</p>
              </div>
            ) : user ? <Navigate to="/doctor-dashboard" replace /> : <Login />}
          />
          <Route path="/doctor-dashboard"
            element={loading ? (
              <div className="flex justify-center items-center min-h-screen">
                <p className="text-xl">Loading...</p>
              </div>
            ) : user ? <DoctorDashboard /> : <Navigate to="/login" replace />}
          />
        </Routes>
        <Footer />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover />
      </div>
      
    </Router>
  );
};

export default App;