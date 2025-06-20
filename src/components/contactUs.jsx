import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-16">
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-100 via-white to-blue-200 -z-10" />

      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl p-10 grid md:grid-cols-2 gap-12 relative z-10">
        {/* Left Side - Contact Info */}
        <div className="flex flex-col justify-center h-full space-y-6">
          <div>
            <h4 className="text-blue-600 text-sm font-semibold uppercase mb-1 tracking-widest">
              Contact Us
            </h4>
            <h1 className="text-4xl font-extrabold text-blue-950 mb-3">
              Get In Touch
            </h1>
            <p className="text-gray-600 leading-relaxed">
              We'd love to hear from you. Whether you have a question, feedback, or just want to chat — our team is here to help!
            </p>
          </div>

          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-blue-700 text-xl mt-1" />
              <div>
                <h3 className="font-semibold text-blue-950">Our Location</h3>
                <p className="text-gray-700">IEM, Sector V, Salt Lake, Kolkata, 700091</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-blue-700 text-xl mt-1" />
              <div>
                <h3 className="font-semibold text-blue-950">Phone</h3>
                <p className="text-gray-700">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaEnvelope className="text-blue-700 text-xl mt-1" />
              <div>
                <h3 className="font-semibold text-blue-950">Email</h3>
                <p className="text-gray-700">info@iemkolkata.ac.in</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-blue-950 p-8 rounded-xl text-white shadow-lg">
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-white text-blue-950 placeholder-blue-900 font-medium focus:outline-none"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-white text-blue-950 placeholder-blue-900 font-medium focus:outline-none"
              required
            />
            <input
              type="tel"
              placeholder="Your Phone"
              className="w-full p-3 rounded-lg bg-white text-blue-950 placeholder-blue-900 font-medium focus:outline-none"
              required
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 rounded-lg bg-white text-blue-950 placeholder-blue-900 font-medium focus:outline-none"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-700 to-green-500 hover:from-blue-800 hover:to-green-600 transition py-3 font-bold rounded-lg text-white shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;