import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-6 px-4 md:px-12 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        <div>
          <h2 className="text-lg font-semibold mb-1">
            ShishuCard – Empowering Child Healthcare
          </h2>
          <p className="text-gray-300 leading-snug">
            Seamlessly manage your child’s health records, vaccinations,
            and milestones — all in one secure place.
          </p>
        </div>

        <div>
          <p className="mb-1">📍 21 Park Street, Kolkata, WB 700016</p>
          <p>
            📧{' '}
            <a
              href="mailto:support@ShishuCard.xyz"
              className="hover:underline text-blue-100"
            >
              support@ShishuCard.xyz
            </a>
          </p>
        </div>

        <div>
          <h3 className="text-base font-medium mb-1">Quick Links</h3>
          <ul className="space-y-1">
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

      <div className="border-t border-gray-700 mt-6 pt-3 text-center text-xs text-gray-300">
        <p>© {new Date().getFullYear()} ShishuCard. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
