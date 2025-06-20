import React, { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User created:", userCredential.user);
      alert("Signup successful!");
    } catch (error) {
      console.error("Error signing up:", error.message);
      alert(error.message);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4">
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-100 via-white to-blue-200 -z-10" />
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Sign up</h2>
          <p className="text-sm mt-1">
            Already joined?{" "}
            <a href="#" className="text-blue-950 font-semibold">
              Login now
            </a>
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
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
              placeholder="Password (min. 8 character)"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950"
              required
            />
          </div>

          <div className="flex items-center">
            <input
              id="terms"
              type="checkbox"
              className="w-4 h-4 text-blue-950 border-gray-300 rounded focus:ring-blue-950"
              required
            />
            <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
              I agree with{" "}
              <span className="font-semibold">Terms & Conditions</span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-950 text-white py-3 rounded-lg font-semibold hover:bg-blue-900"
          >
            Join Us
          </button>

          <div className="flex justify-center py-4">
            <div className="h-px w-20 bg-gray-300" />
          </div>

        
        </form>
      </div>
    </div>
  );
};

export default Signup;
