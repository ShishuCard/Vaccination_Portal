import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      navigate("/doctor-dashboard");
    } catch (error) {
      alert("❌ Error: " + error.message);
      console.error("Login Error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-100 via-white to-blue-200 -z-10" />

      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Login</h2>
          <p className="text-sm mt-1">
            New here?{" "}
            <Link to="/signup" className="text-blue-950 font-semibold">
              Create an account
            </Link>
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleLogin}>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950"
              required
            />
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                className="w-4 h-4 text-blue-950 border-gray-300 rounded focus:ring-blue-950"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
                Remember me
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-950 text-white py-3 rounded-lg font-semibold hover:bg-blue-900"
          >
            Login
          </button>

          <button
            type="button"
            onClick={() => navigate("/signup")}
            className="w-full bg-blue-100 text-blue-950 py-3 rounded-lg font-semibold hover:bg-blue-200 mb-2"
          >
            Sign Up
          </button>
            <div className="flex justify-center py-4">
              <div className="h-px w-20 bg-gray-300" />
            </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
