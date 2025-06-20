import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div className="flex-1">
          <h2 className="text-2xl font-bold leading-tight">
            ShishuCard – Empowering Child Healthcare
          </h2>
          <p className="mt-3 text-gray-300 max-w-md">
            Seamlessly manage and access your child’s health records,
            vaccinations, and growth milestones — all in one secure place.
          </p>
        </div>

        <div className="flex-1">
          <p className="mb-2">📍 21 Park Street, Kolkata, West Bengal 700016</p>
          <p>
            📧{" "}
            <a
              href="mailto:support@ShishuCard.xyz"
              className="hover:underline text-blue-100"
            >
              support@ShishuCard.xyz
            </a>
          </p>
        </div>

        {/* Links */}
        <div className="flex-1 mt-6 md:mt-0">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="hover:underline text-blue-100">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:underline text-blue-100">
                Features
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline text-blue-100">
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-300">
        <p>© {new Date().getFullYear()} ShishuCard. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
