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
      className="flex items-center justify-center min-h-screen relative overflow-hidden px-4 py-12 sm:py-16"
      style={{
        backgroundImage: `linear-gradient(rgba(79, 5, 129, 0.25), rgba(79, 5, 129, 0.3)), url("/images/login1.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 bg-white/85 backdrop-blur-md shadow-2xl rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 w-full max-w-md mx-auto border border-purple-100 flex flex-col justify-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-purple-800 mb-6 sm:mb-8 text-center">
          Login
        </h1>

        <form onSubmit={handleLogin} className="space-y-5 sm:space-y-6">
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
              Email Address
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-purple-500">
              <span className="px-2.5 sm:px-3 text-purple-600 shrink-0">
                <FaUser className="w-4 h-4 sm:w-5 sm:h-5" />
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full px-0 py-2.5 sm:py-3 pr-3 text-sm sm:text-base bg-white text-gray-800 placeholder-gray-400 focus:outline-none min-w-0"
              />
            </div>
            {errorEmailState && (
              <p className="text-red-600 text-xs sm:text-sm mt-1 break-words">{errorEmailState}</p>
            )}
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
              Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-purple-500">
              <span className="px-2.5 sm:px-3 text-purple-600 shrink-0">
                <FaLock className="w-4 h-4 sm:w-5 sm:h-5" />
              </span>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
                className="w-full px-0 py-2.5 sm:py-3 pr-3 text-sm sm:text-base bg-white text-gray-800 placeholder-gray-400 focus:outline-none min-w-0"
              />
            </div>
            {errorPassState && (
              <p className="text-red-600 text-xs sm:text-sm mt-1 break-words">{errorPassState}</p>
            )}
          </div>

          {errorOverallState && (
            <p className="text-red-700 text-center text-xs sm:text-sm mt-2 sm:mt-3 font-medium break-words">
              {errorOverallState}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`w-full ${
              loading
                ? "bg-gray-400"
                : "bg-linear-to-r from-purple-600 to-purple-800 md:hover:scale-[1.02] cursor-pointer"
            } text-white py-2.5 sm:py-3 text-sm sm:text-base rounded-lg font-semibold transition-transform shadow-md`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-xs sm:text-sm text-center text-gray-500 mt-5 sm:mt-6 break-words">
          Don&rsquo;t have an account?{" "}
          <span
            onClick={() => router.push("/registration")}
            className="text-purple-700 font-semibold cursor-pointer hover:underline whitespace-nowrap"
          >
            Register here
          </span>
        </p>
      </div>
    </section>
  );
};

export default Login;
