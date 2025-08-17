import React from "react";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import {toast } from "react-toastify";

const Footer = () => {
  const notify = (e) => {
    e.preventDefault();
    toast.success("Successfully Subscribed");
  };
  return (
    <footer className="bg-blue-950 dark:bg-gray-900 text-white dark:text-gray-100 pt-12 pb-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 mb-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white">
              <span className="text-blue-300">Shishu</span>Card
            </h2>
            <p className="text-blue-100 leading-relaxed">
              Empowering child healthcare through innovative digital solutions
              that keep vaccination records secure and accessible.
            </p>
            <div className="flex space-x-0.1">
              {/* Facebook */}
              <a
                href="#"
                className="group relative px-2.5 py-2 rounded-full bg-transparent focus:outline-none transition"
              >
                <div className="absolute inset-0 rounded-full bg-blue-600/30 backdrop-blur-md opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <FaFacebook className="relative z-10 w-5 h-5 text-blue-200 group-hover:text-white group-hover:scale-110 transition duration-300" />
              </a>

              {/* Twitter */}
              <a
                href="#"
                className="group relative px-2.5 py-2 rounded-full bg-transparent focus:outline-none transition"
              >
                <div className="absolute inset-0 rounded-full bg-blue-600/30 backdrop-blur-md opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <FaTwitter className="relative z-10 w-5 h-5 text-blue-200 group-hover:text-white group-hover:scale-110 transition duration-300" />
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                className="group relative px-2.5 py-2 rounded-full bg-transparent focus:outline-none transition"
              >
                <div className="absolute inset-0 rounded-full bg-blue-600/30 backdrop-blur-md opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <FaLinkedin className="relative z-10 w-5 h-5 text-blue-200 group-hover:text-white group-hover:scale-110 transition duration-300" />
              </a>

              {/* Instagram */}
              <a
                href="#"
                className="group relative px-2.5 py-2 rounded-full bg-transparent focus:outline-none transition"
              >
                <div className="absolute inset-0 rounded-full bg-blue-600/30 backdrop-blur-md opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <FaInstagram className="relative z-10 w-5 h-5 text-blue-200 group-hover:text-white group-hover:scale-110 transition duration-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-blue-100 hover:text-white transition flex items-start"
                >
                  <span className="w-1 h-1 mt-2 mr-2 bg-blue-400 rounded-full"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-blue-100 hover:text-white transition flex items-start"
                >
                  <span className="w-1 h-1 mt-2 mr-2 bg-blue-400 rounded-full"></span>
                  About Us
                </Link>
              </li>
                <li>
                <Link
                  to="/features"
                  className="text-blue-100 hover:text-white transition flex items-start"
                >
                  <span className="w-1 h-1 mt-2 mr-2 bg-blue-400 rounded-full"></span>
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-blue-100 hover:text-white transition flex items-start"
                >
                  <span className="w-1 h-1 mt-2 mr-2 bg-blue-400 rounded-full"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-blue-300 mt-1 mr-3 flex-shrink-0" />
                <p className="text-blue-100">
                  21 Park Street, Kolkata
                  <br />
                  West Bengal 700016, India
                </p>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-blue-300 mr-3 flex-shrink-0" />
                <a
                  href="mailto:support@shishucard.xyz"
                  className="text-blue-100 hover:text-white transition"
                >
                  support@shishucard.xyz
                </a>
              </div>
              <div className="flex items-center">
                <FaPhoneAlt className="text-blue-300 mr-3 flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-blue-100 hover:text-white transition"
                >
                  +91 98765 43210
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Stay Updated</h3>
            <p className="text-blue-100">
              Subscribe to our newsletter for the latest updates on child
              healthcare.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full rounded-l-md focus:outline-none text-gray-800 bg-amber-50"
                required
              />
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition hover:cursor-pointer"
                onClick={notify}
              >
                Subscribe
              </button>
              
            </form>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-blue-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-blue-300 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} ShishuCard. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link
              to="/privacy"
              className="text-blue-300 hover:text-white text-sm transition"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-blue-300 hover:text-white text-sm transition"
            >
              Terms of Service
            </Link>
            <Link
              to="/cookies"
              className="text-blue-300 hover:text-white text-sm transition"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
