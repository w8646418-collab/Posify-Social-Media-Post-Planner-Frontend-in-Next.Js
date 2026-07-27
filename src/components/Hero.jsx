"use client"
import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="relative flex items-center min-h-screen sm:min-h-screen md:min-h-screen bg-cover bg-center text-white px-4 sm:px-6 md:px-8 pt-20 sm:pt-24 md:pt-4 pb-12 sm:pb-16"
      style={{
        backgroundImage: "url('/images/hero.jpeg')",
      }}
    >
      <div className="absolute inset-0 bg-black/30 sm:bg-black/20"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row md:justify-end">
        <div className="flex flex-col w-full md:max-w-xl md:mr-6 lg:mr-16 xl:mr-20 text-center md:text-right">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
            Plan. Schedule.{" "}
            <span className="text-white opacity-90">Shine Online.</span>
          </h1>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-gray-100/90 leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]">
            Create your perfect content calendar, automate your posts, and elevate
            your brand — all from one beautifully designed platform.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-end gap-3 sm:gap-4 md:gap-5 pt-5 sm:pt-6">
            <Link
              href="/registration"
              className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-[#5C0E8A] font-bold rounded-full shadow-lg hover:shadow-white/20 hover:scale-105 transition-all duration-300 text-sm sm:text-base text-center"
            >
              Get Started
            </Link>
            <Link
              href="/services"
              className="px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-[#efac02] hover:border-[#efac02] hover:text-white transition-all duration-300 text-sm sm:text-base text-center"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
