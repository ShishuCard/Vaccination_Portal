import React from "react";
import { useTheme } from '../context/ThemeContext';
import { FaQrcode, FaRupeeSign, FaBullhorn, FaSyringe } from "react-icons/fa";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Digital Vaccine Records",
    icon: <FaQrcode className="text-blue-600" />,
    description:
      "Instant access to complete vaccination records via QR code for parents and healthcare providers.",
    color: "bg-blue-50",
    link: "/vaccination",
  },
  {
    title: "Affordable Immunization",
    icon: <FaRupeeSign className="text-green-600" />,
    description:
      "Government-supported pricing to ensure all children receive vital vaccinations regardless of income.",
    color: "bg-green-50",
    link: "/affordable",
  },
  {
    title: "Vaccine Education",
    icon: <FaBullhorn className="text-purple-600" />,
    description:
      "Comprehensive resources about vaccine schedules, benefits, and community health impact.",
    color: "bg-purple-50",
    link: "/vaccine-education",
  },
  {
    title: "Immunization Tracking",
    icon: <FaSyringe className="text-amber-600" />,
    description:
      "Personalized tracking system to ensure complete vaccination coverage for every child.",
    color: "bg-amber-50",
    link: "/Immunization-Tracking-Page",
  },
];

const Services = () => {
  const { theme } = useTheme();
  return (
  <div className={`py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 ${theme === 'dark' ? 'dark' : ''}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block mb-3 text-base font-semibold text-blue-600 dark:text-blue-400">
            OUR SERVICES
          </span>
          <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-4">
            Comprehensive <span className="font-medium">Vaccination</span>{" "}
            Solutions
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            Technology-driven services designed to simplify child immunization
            for families and healthcare providers.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden border border-white/10 dark:border-gray-700 shadow-md backdrop-blur-md bg-[rgba(255,255,255,0.1)] dark:bg-[rgba(30,41,59,0.7)] hover:shadow-xl transform hover:scale-[1.03] transition duration-300 ease-in-out cursor-pointer"
            >
              <div className={`${service.color} dark:bg-gray-800 p-5 flex justify-center`}>
                <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-900 shadow-sm border-gray flex items-center justify-center">
                  {React.cloneElement(service.icon, { size: 24 })}
                </div>
              </div>
              <div className="p-4 sm:p-6 flex flex-col justify-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 max-w-xs sm:max-w-none">
                  {service.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                  {service.description}
                </p>
                {service.link ? (
                  <Link
                    to={service.link}
                    className="group text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline transition-colors duration-200 flex items-center"
                  >
                    Learn more
                    <svg
                      className="ml-1 w-3 h-3 transform transition-transform duration-200 group-hover:translate-x-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center"></div>
      </div>
    </div>
  );
};

export default Services;
