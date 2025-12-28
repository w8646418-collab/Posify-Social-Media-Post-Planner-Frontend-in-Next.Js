"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaUser, FaLock } from "react-icons/fa";

const Login = () => {
  const router = useRouter();

  const [form, setForm] = useState({ email: "", password: "" });
  const [errorEmailState, setErrorEmailState] = useState("");
  const [errorPassState, setErrorPassState] = useState("");
  const [errorOverallState, setErrorOverallState] = useState("");
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sanitizeInput = (input) => input.trim();
  const charLength = (text, min, max) =>
    text.length >= min && text.length <= max;
  const regEmailTest = (email) => /^\S+@\S+\.\S+$/.test(email);

  const handleLogin = (e) => {
    e.preventDefault();

    setErrorEmailState("");
    setErrorPassState("");
    setErrorOverallState("");

    let errorOverall = 1;
    const emailField_get = sanitizeInput(form.email);
    const passField_get = sanitizeInput(form.password);

    if (!emailField_get) {
      setErrorEmailState("Please enter your email");
      errorOverall = 0;
    } else if (!regEmailTest(emailField_get)) {
      setErrorEmailState("Invalid email format");
      errorOverall = 0;
    }

    if (!passField_get) {
      setErrorPassState("Please enter your password");
      errorOverall = 0;
    } else if (!charLength(passField_get, 6, 35)) {
      setErrorPassState("Password must be between 6 and 35 characters");
      errorOverall = 0;
    }

    if (errorOverall === 0) {
      setErrorOverallState("Please correct the highlighted errors.");
      return;
    }

    setLoading(true);

    // ✅ Check localStorage for registered user
    const registeredUser = JSON.parse(localStorage.getItem("registeredUser"));
    setTimeout(() => {
      if (!registeredUser) {
        setErrorOverallState("No user found. Please register first.");
      } else if (
        registeredUser.email !== emailField_get ||
        registeredUser.password !== passField_get
      ) {
        setErrorOverallState("Invalid email or password.");
      } else {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userName", registeredUser.name);
        alert("Login successful!");
        router.push("/dashboard");
      }
      setLoading(false);
    }, 800);
  };

  if (!mounted) return null;

  return (
    <section
      className="flex items-center justify-center min-h-screen relative overflow-hidden mt-15"
      style={{
        backgroundImage: `url("/images/login1.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl p-10 w-md border border-purple-100 flex flex-col justify-center">
        <h1 className="text-4xl font-extrabold text-purple-800 mb-8 text-center">
          Login
        </h1>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-purple-500">
              <span className="px-3 text-purple-600">
                <FaUser />
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full p-3 bg-white text-gray-800 placeholder-gray-400 focus:outline-none"
              />
            </div>
            {errorEmailState && (
              <p className="text-red-600 text-sm mt-1">{errorEmailState}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-purple-500">
              <span className="px-3 text-purple-600">
                <FaLock />
              </span>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
                className="w-full p-3 bg-white text-gray-800 placeholder-gray-400 focus:outline-none"
              />
            </div>
            {errorPassState && (
              <p className="text-red-600 text-sm mt-1">{errorPassState}</p>
            )}
          </div>

          {errorOverallState && (
            <p className="text-red-700 text-center text-sm mt-3 font-medium">
              {errorOverallState}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`w-full ${
              loading
                ? "bg-gray-400"
                : "bg-linear-to-r from-purple-600 to-purple-800 hover:scale-105 cursor-pointer"
            } text-white py-3 rounded-lg font-semibold transition-transform shadow-md`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-sm text-center text-gray-500 mt-6">
          Don’t have an account?{" "}
          <span
            onClick={() => router.push("/registration")}
            className="text-purple-700 font-semibold cursor-pointer hover:underline"
          >
            Register here
          </span>
        </p>
      </div>
    </section>
  );
};

export default Login;
