"use client"; // Client Component

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50 border-b-4 border-b-[#d8a406]">
      <div className="max-w-7xl mx-auto px-8 py-1.5">
        <div className="flex items-center justify-between">
          {/* === Logo === */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="flex flex-row items-center space-x-2">
              <div className="w-15 h-15">
                <img src="/images/postify.svg" alt="logo" />
              </div>
              <div>
                <span className="text-[#4f0581] font-extrabold text-3xl group-hover:text-[#efac02] transition-colors duration-300">
                  Post
                </span>
                <span className="text-[#efac02] font-extrabold text-3xl group-hover:text-[#4f0581] transition-colors duration-300">
                  ify
                </span>
              </div>
            </div>
          </Link>

          {/* === Navigation Links === */}
          <div>
            <nav className="flex justify-center items-center space-x-4 bg-transparent py-4">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Contact Us", href: "/contact" },
                { name: "Registration", href: "/registration" },
                { name: "Login", href: "/login" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-full text-lg font-bold transition-all duration-300 ${
                    isActive(link.href) ? "text-[#efac02]" : "text-[#4f0581]"
                  } hover:opacity-80`}
                >
                  {link.name}
                  <span
                    className={`absolute left-0 bottom-0 w-full h-0.75 bg-[#efac02] rounded-full transform transition-transform duration-300 origin-left ${
                      isActive(link.href) ? "scale-x-100" : "scale-x-0"
                    } hover:scale-x-100`}
                  ></span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
