import React, { useState } from "react";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import LoginButton from "./functionalButtons/LoginButton";
import LogoutButton from "./functionalButtons/LogoutButton";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, loading] = useAuthState(auth);
  return (
    <nav
      className="
                flex items-center justify-between flex-wrap bg-blue-950 shadow-md px-[80px] py-3 relative
            "
    >
      <div className="flex items-center gap-2">
        <img
          src={logo}
          alt="logo"
          className="h-12 w-12 object-contain rounded-full border-none"
        />
        <span className="font-bold text-lg flex items-center">
          <span>
            <span className="text-white">Shishu Card</span>
          </span>
        </span>
      </div>
      <button
        className="flex flex-col justify-center h-8 w-8 bg-none border-none cursor-pointer md:hidden"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle menu"
      >
        <span className="block w-6 h-0.5 bg-gray-100 rounded transition-all mb-1"></span>
        <span className="block w-6 h-0.5 bg-gray-100 rounded transition-all mb-1"></span>
        <span className="block w-6 h-0.5 bg-gray-100 rounded"></span>
      </button>
      <div
        className={`
                    flex-col md:flex-row md:flex md:items-center gap-4
                    absolute md:static top-full left-0 w-full md:w-auto bg-[#003447] md:bg-transparent shadow-md md:shadow-none z-10
                    transition-all duration-300
                    ${menuOpen ? "flex" : "hidden md:flex"}
                `}
      >

        <Link
          to="/"
          className="text-white hover:text-[#bee9fb] font-medium px-2 py-1 transition-colors"
        >
          Home
        </Link>
        <Link
          to="/doctor-dashboard"
          className="text-white hover:text-[#bee9fb] font-medium px-2 py-1 transition-colors"
        >
          Dashboard
        </Link>
        <Link
          to="/about"
          className="text-white hover:text-[#bee9fb] font-medium px-2 py-1 transition-colors"
        >
          About Us
        </Link>
        <Link
          to="/contact"
          className="text-white hover:text-[#bee9fb] font-medium px-2 py-1 transition-colors"
        >
          Contact Us
        </Link>
        {
          user ? <LogoutButton /> : <LoginButton />
        }
      </div>
    </nav>
  );
};

export default Navbar;
