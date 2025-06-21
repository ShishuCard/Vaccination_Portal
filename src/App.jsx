import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/Home";
import Services from "./components/services";
import Testimonial from "./components/testimonial";
import Footer from "./components/footer";
import Login from "./components/login";
import AboutUS from "./components/aboutUs";
import Signup from "./components/signup";
import GetStarted from "./components/vaccinationPage";
import ContactUs from "./components/contactUs";
import DoctorDashboard from "./components/DoctorDashboard";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import ChildPage from "./components/ChildPage";

const App = () => {

  const [user, loading] = useAuthState(auth);
  console.log(user)
  return (
    <Router>
      <div>
        <Navbar />
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
          <Route path="/signup" element={<Signup />} />          <Route path="/vaccination" element={<GetStarted />} />
          <Route path="/contact" element={<ContactUs />} />
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
      </div>
    </Router>
  );
};

export default App;
