"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (path) => pathname === path;

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact Us", href: "/contact" },
    { name: "Registration", href: "/registration" },
    { name: "Login", href: "/login" },
  ];

  return (
    <nav
      className={`bg-white ${
        scrolled ? "shadow-lg" : "shadow-md"
      } fixed top-0 left-0 w-full z-50 border-b-4 border-b-[#d8a406] transition-shadow duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-1.5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-1 sm:space-x-2 group shrink-0">
            <div className="flex flex-row items-center space-x-1 sm:space-x-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14">
                <img src="/images/postify.svg" alt="Postify logo" className="w-full h-full object-contain" />
              </div>
              <div className="leading-none">
                <span className="text-[#4f0581] font-extrabold text-xl sm:text-2xl md:text-3xl group-hover:text-[#efac02] transition-colors duration-300">
                  Post
                </span>
                <span className="text-[#efac02] font-extrabold text-xl sm:text-2xl md:text-3xl group-hover:text-[#4f0581] transition-colors duration-300">
                  ify
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center justify-center space-x-1 xl:space-x-2 bg-transparent py-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-2 xl:px-3 2xl:px-4 py-2 rounded-full text-sm xl:text-base 2xl:text-lg font-bold transition-all duration-300 ${
                  isActive(link.href) ? "text-[#efac02]" : "text-[#4f0581]"
                } hover:opacity-80`}
              >
                {link.name}
                <span
                  className={`absolute left-0 bottom-0 w-full h-0.5 bg-[#efac02] rounded-full transform transition-transform duration-300 origin-left ${
                    isActive(link.href) ? "scale-x-100" : "scale-x-0"
                  } hover:scale-x-100`}
                ></span>
              </Link>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-[#4f0581] hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-300 transition-colors"
          >
            {mobileOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 top-14.25 sm:top-16 bg-white/98 backdrop-blur-md z-40 transition-all duration-300 ${
          mobileOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-3 pointer-events-none"
        }`}
      >
        <div className="px-4 pt-4 pb-8 space-y-1 sm:space-y-2 overflow-y-auto max-h-[calc(100vh-64px)]">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-4 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-bold transition-all duration-200 border-l-4 ${
                isActive(link.href)
                  ? "text-[#efac02] bg-purple-50 border-[#efac02]"
                  : "text-[#4f0581] hover:bg-purple-50 border-transparent hover:border-purple-200"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
