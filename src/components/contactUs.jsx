import React from "react";

const ContactUs = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-16">
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-100 via-white to-blue-200 -z-10" />

      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl p-10 grid md:grid-cols-2 gap-12 relative z-10">
        <div className="flex flex-col justify-center h-full">
          <h4 className="text-blue-900 text-sm font-semibold mb-2">
            Contact Us
          </h4>
          <h1 className="text-4xl font-bold text-blue-950 mb-4">
            Get In Touch With Us
          </h1>
          <p className="text-gray-700 mb-8">
            We'd love to hear from you! Whether you have a question, suggestion,
            or just want to say hello, reach out to us anytime.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-950 text-white rounded-lg p-3">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h3 className="font-semibold text-blue-950">Our Location</h3>
                <p>IEM, Sector V, Salt Lake, Kolkata, 700091</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-950 text-white rounded-lg p-3">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div>
                <h3 className="font-semibold text-blue-950">Phone Number</h3>
                <p>+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-950 text-white rounded-lg p-3">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <h3 className="font-semibold text-blue-950">Email Address</h3>
                <p>info@iemkolkata.ac.in</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-950 p-8 rounded-xl text-white relative shadow-lg">
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-white text-blue-900 placeholder-blue-900 font-medium focus:outline-none"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-white text-blue-900 placeholder-blue-900 font-medium focus:outline-none"
              required
            />
            <input
              type="tel"
              placeholder="Your Phone"
              className="w-full p-3 rounded-lg bg-white text-blue-900 placeholder-blue-900 font-medium focus:outline-none"
              required
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 rounded-lg bg-white text-blue-900 placeholder-blue-900 font-medium focus:outline-none"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 transition py-3 font-bold rounded-lg text-white shadow-md"
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
