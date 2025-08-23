import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { useTheme } from '../context/ThemeContext';
import { Link, useNavigate } from "react-router-dom";

const testimonials = [
  {
    name: "Aarav Mehta",
    role: "Father of 2-Year-Old",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    text: "Shishu Card made tracking vaccinations effortless. The PDF and QR features are incredibly useful for doctor visits.",
    rating: 5
  },
  {
    name: "Sneha Kapoor",
    role: "Community Health Worker",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    text: "The government vaccine cost information helps underprivileged families make informed healthcare decisions.",
    rating: 5
  },
  {
    name: "Rohan Sharma",
    role: "Tech Enthusiast & Father",
    image: "https://randomuser.me/api/portraits/men/34.jpg",
    text: "Clean interface with helpful articles that explain vaccine schedules clearly.",
    rating: 4
  },
];

const Testimonial = () => {
  const { theme } = useTheme();
  const navigate = useNavigate(); // ✅ This line was missing

  const handleSignupClick = () => {
    // Add slide-down animation effect
    const button = document.querySelector('.signup-btn');
    if (button) {
      button.style.transform = 'translateY(4px) scale(0.98)';
      button.style.boxShadow = 'inset 0 2px 4px rgba(0, 0, 0, 0.1)';
      
      setTimeout(() => {
        button.style.transform = '';
        button.style.boxShadow = '';
        navigate("/signup");
      }, 200);
    } else {
      navigate("/signup");
    }
  };

  return (
  <div className={`bg-blue-50 dark:bg-gray-800 py-12 px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'dark' : ''}`}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">
            USER TESTIMONIALS
          </p>
          <h2 className="text-2xl font-light text-gray-900 dark:text-white mb-4">
            Trusted by <span className="font-medium">parents</span> and <span className="font-medium">professionals</span>
          </h2>
          <div className="w-16 h-px bg-blue-200 dark:bg-blue-900 mx-auto"></div>
        </div>

        {/* Testimonials */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100"
            >
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${i < testimonial.rating ? 'text-amber-400' : 'text-gray-200'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <FaQuoteLeft className="text-blue-100 text-xl mb-4" />

              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                "{testimonial.text}"
              </p>

              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">{testimonial.name}</p>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Subtle CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 mb-3">
            Join thousands of satisfied users
          </p>
          <button
            type="button"
            onClick={handleSignupClick}
            className="signup-btn inline-flex items-center px-4 py-2 border border-blue-600 text-sm font-medium rounded text-blue-600 hover:bg-blue-600 hover:text-white hover:border-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md"
          >
            Create your account
            <svg className="ml-2 w-3 h-3 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
