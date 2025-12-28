"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaUser, FaLock } from "react-icons/fa";

const Register = () => {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errorOverallState, setErrorOverallState] = useState("");
  const [errorNameState, setErrorNameState] = useState("");
  const [errorEmailState, setErrorEmailState] = useState("");
  const [errorPassState, setErrorPassState] = useState("");

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sanitizeInput = (input) => input.trim();
  const isAlphabetOnly = (text) => /^[A-Za-z\s]+$/.test(text);
  const charLength = (text, min, max) =>
    text.length >= min && text.length <= max;
  const regEmailTest = (email) => /^\S+@\S+\.\S+$/.test(email);

  const handleRegister = (e) => {
    e.preventDefault();

    setErrorOverallState("");
    setErrorNameState("");
    setErrorEmailState("");
    setErrorPassState("");

    let errorOverall = 1;

    const nameField_get = sanitizeInput(form.name);
    const emailField_get = sanitizeInput(form.email);
    const passField_get = sanitizeInput(form.password);
    const rePassField_get = sanitizeInput(form.confirmPassword);

    if (nameField_get === "") {
      setErrorNameState("Please enter your name");
      errorOverall = 0;
    } else if (!isAlphabetOnly(nameField_get)) {
      setErrorNameState("Only alphabets are allowed");
      errorOverall = 0;
    } else if (!charLength(nameField_get, 3, 35)) {
      setErrorNameState("Name should be between 3 to 35 characters");
      errorOverall = 0;
    }

    if (emailField_get === "") {
      setErrorEmailState("Please enter your email");
      errorOverall = 0;
    } else if (!regEmailTest(emailField_get)) {
      setErrorEmailState("Invalid email format");
      errorOverall = 0;
    }

    if (passField_get === "") {
      setErrorPassState("Please enter password");
      errorOverall = 0;
    } else if (!charLength(passField_get, 6, 35)) {
      setErrorPassState("Password should be between 6 to 35 characters");
      errorOverall = 0;
    }

    if (passField_get !== rePassField_get) {
      setErrorPassState("Passwords do not match");
      errorOverall = 0;
    }

    if (errorOverall === 0) {
      setErrorOverallState("Please correct the highlighted errors.");
      return;
    }

    // ✅ Save user data in localStorage (dummy backend)
    setLoading(true);
    const userData = {
      name: nameField_get,
      email: emailField_get,
      password: passField_get,
    };
    localStorage.setItem("registeredUser", JSON.stringify(userData));
    setTimeout(() => {
      setLoading(false);
      alert("Registration successful! You can now login.");
      router.push("/login");
    }, 1000);
  };

  return (
    <section
      className="flex items-center justify-center min-h-screen relative overflow-hidden mt-15"
      style={{
        backgroundImage: `url("/images/reg1.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl p-10 w-lg border border-purple-100 flex flex-col justify-center mt-20 mb-23">
        <h1 className="text-4xl font-extrabold text-purple-800 mb-8 text-center">
          Register
        </h1>

        {errorOverallState && (
          <p className="text-center text-red-600 mb-4 font-semibold">
            {errorOverallState}
          </p>
        )}

        <form onSubmit={handleRegister} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Name
            </label>
            {errorNameState && (
              <p className="text-red-600 text-sm mb-1">{errorNameState}</p>
            )}
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-purple-500">
              <span className="px-3 text-purple-600">
                <FaUser />
              </span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full p-3 bg-white text-gray-800 placeholder-gray-400 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>
            {errorEmailState && (
              <p className="text-red-600 text-sm mb-1">{errorEmailState}</p>
            )}
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
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Password
            </label>
            {errorPassState && (
              <p className="text-red-600 text-sm mb-1">{errorPassState}</p>
            )}
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
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Confirm Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-purple-500">
              <span className="px-3 text-purple-600">
                <FaLock />
              </span>
              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                required
                className="w-full p-3 bg-white text-gray-800 placeholder-gray-400 focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-linear-to-r from-purple-600 to-purple-800 hover:scale-105 cursor-pointer"
            } text-white py-3 rounded-lg font-semibold transition-transform shadow-md`}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <p className="text-sm text-center text-gray-500 mt-6">
          Already have an account?{" "}
          <span
            onClick={() => router.push("/login")}
            className="text-purple-700 font-semibold cursor-pointer hover:underline"
          >
            Login here
          </span>
        </p>
      </div>
    </section>
  );
};

export default Register;
