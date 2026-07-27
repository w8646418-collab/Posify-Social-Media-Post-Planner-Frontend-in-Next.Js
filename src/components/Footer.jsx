import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-[#d8c9ff] text-[#3b0066]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <span className="text-xl sm:text-2xl font-extrabold text-[#5C0E8A] tracking-wide">
                Postify
              </span>
            </div>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Streamline your social media workflow with smart scheduling,
              planning, and automation tools designed for creators.
            </p>

            <div className="flex gap-3 sm:gap-4 mt-4 sm:mt-5 text-[#5C0E8A] font-semibold">
              <span><FaFacebook size={24} className="sm:w-6 sm:h-6" /></span>
              <span><FaTwitter size={24} className="sm:w-6 sm:h-6" /></span>
              <span><FaInstagramSquare size={24} className="sm:w-6 sm:h-6" /></span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#5C0E8A] mb-3 sm:mb-4">
              Quick Links
            </h3>
            <ul className="space-y-1 sm:space-y-2 text-gray-700 text-sm sm:text-base">
              <li>
                <a
                  href="/"
                  className="hover:text-[#b026ff] transition-all duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-[#b026ff] transition-all duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:text-[#b026ff] transition-all duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-[#b026ff] transition-all duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#5C0E8A] mb-3 sm:mb-4">Contact</h3>
            <ul className="space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base">
              <li className="flex items-center gap-2">
                <span className="shrink-0"><FaEnvelope size={22} className="text-[#5C0E8A] w-5 h-5 sm:w-6 sm:h-6"/></span>
                <span className="break-all">info@Postify.com</span>
              </li>
              <li className="flex items-start gap-2 flex-wrap">
                <span className="shrink-0 mt-0.5"><FaSquarePhone size={22} className="text-[#5C0E8A] w-5 h-5 sm:w-6 sm:h-6"/></span>
                <span>+92-36726495</span>
                <span className="hidden sm:inline">,</span>
                <span>+92-26673678</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-[#e3d7ff] mt-8 sm:mt-10 pt-4 sm:pt-6 text-center">
          <p className="text-gray-600 text-xs sm:text-sm">
            © 2025 <span className="font-semibold text-[#5C0E8A]">Postify</span>.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
