"use client";
import React from "react";
import Link from "next/link";

const CtaCard = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-linear-to-r from-[#2e004f] to-[#4a0078] text-white text-center relative overflow-hidden">
      {/* subtle glowing overlay */}
      <div className="absolute inset-0 bg-[radial-linear(circle_at_center,rgba(255,215,0,0.15)_0%,transparent_70%)]"></div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 tracking-wide">
          Ready to Shine Brighter?
        </h2>

        <p className="text-white/90 mb-6 sm:mb-8 lg:mb-10 max-w-xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed px-2">
          Take your digital presence to the next level with our elegant and
          effortless post planner.
        </p>

        <Link
          href="/dashboard"
          className="inline-block px-6 sm:px-8 lg:px-10 py-2.5 sm:py-3 lg:py-4 bg-linear-to-r from-yellow-400 to-yellow-500 text-[#2e004f] font-semibold rounded-full shadow-lg hover:shadow-yellow-400/40 hover:scale-105 transition-all duration-300 text-sm sm:text-base"
        >
          Start Free Trial
        </Link>
      </div>
    </section>
  );
};

export default CtaCard;
