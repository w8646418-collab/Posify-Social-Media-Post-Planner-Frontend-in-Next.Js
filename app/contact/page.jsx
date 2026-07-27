"use client";

import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="font-poppins text-gray-900 overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="bg-[url('/images/contacthero.jpeg')] relative flex flex-col items-center justify-center min-h-screen sm:min-h-screen md:min-h-screen bg-cover bg-center text-white px-4 sm:px-6 md:px-8 pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="absolute inset-0 bg-black/30 sm:bg-black/20"></div>
        <div className="relative z-10 max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#ffb703] mb-2 sm:mb-3 z-10">
            We’d Love to Hear From You
          </h2>
          <p className="text-sm sm:text-base md:text-lg max-w-2xl text-white text-center z-10 px-2">
            Whether you’re managing multiple accounts, scheduling posts, or
            analyzing your brand’s growth, reach out to us. Let’s plan, post,
            and grow your social media presence together!
          </p>
        </div>
      </section>

      {/* CONTACT INFO SECTION */}
      <section className="relative bg-linear-to-br from-[#fdf4ff] via-[#fff9f3] to-[#fef6ff] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 min-h-screen overflow-hidden">
        {/* Background Glows */}
        <div className="absolute -top-16 sm:-top-20 -left-16 sm:-left-20 w-64 h-64 sm:w-96 sm:h-96 bg-[#e6d2ff] rounded-full blur-3xl opacity-40 pointer-events-none" />
        <div className="absolute -bottom-20 sm:-bottom-24 -right-16 sm:-right-24 w-64 h-64 sm:w-96 sm:h-96 bg-[#ffe7b3] rounded-full blur-3xl opacity-40 pointer-events-none" />

        <div className="relative z-10 text-center mb-10 sm:mb-12 lg:mb-16 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#6b1f97] mb-3 sm:mb-4">
            Let’s <span className="text-[#ebab09]">Get in Touch</span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg px-2">
            Have a question, collaboration idea, or feedback? We’d love to hear
            from you!
          </p>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8 lg:gap-10 max-w-6xl mx-auto">
          {/* PHONE */}
          <div className="bg-white/40 backdrop-blur-lg border border-[#7a00cc] rounded-2xl sm:rounded-3xl shadow-lg hover:-translate-y-0 md:hover:-translate-y-2 transition-all duration-500 p-6 sm:p-8 text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto flex items-center justify-center rounded-full bg-linear-to-br from-[#efac02] to-[#ffd75b] mb-4 sm:mb-5 shrink-0">
              <svg
                className="w-5 h-5 sm:w-7 sm:h-7 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.58 1 1 0 01-.24 1.01l-2.21 2.2z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold text-[#7a00cc] mb-1 sm:mb-2">
              Call Us
            </h3>
            <p className="text-sm sm:text-base">+92-26673678</p>
            <p className="text-sm sm:text-base">+92-36726495</p>
          </div>

          {/* EMAIL */}
          <div className="bg-white/40 backdrop-blur-lg border border-[#7a00cc] rounded-2xl sm:rounded-3xl shadow-lg hover:-translate-y-0 md:hover:-translate-y-2 md:-mt-6 lg:-mt-10 transition-all duration-500 p-6 sm:p-8 text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto flex items-center justify-center rounded-full bg-linear-to-br from-[#6b1f97] to-[#9d55cc] mb-4 sm:mb-5 shrink-0">
              <svg
                className="w-5 h-5 sm:w-7 sm:h-7 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold text-[#7a00cc] mb-1 sm:mb-2">
              Email Us
            </h3>
            <p className="text-sm sm:text-base break-all">
              info@socialplanner.com
            </p>
          </div>

          {/* ADDRESS */}
          <div className="bg-white/40 backdrop-blur-lg border border-[#7a00cc] rounded-2xl sm:rounded-3xl shadow-lg hover:-translate-y-0 md:hover:-translate-y-2 transition-all duration-500 p-6 sm:p-8 text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto flex items-center justify-center rounded-full bg-linear-to-br from-[#efac02] to-[#ffd75b] mb-4 sm:mb-5 shrink-0">
              <svg
                className="w-5 h-5 sm:w-7 sm:h-7 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold text-[#7a00cc] mb-1 sm:mb-2">
              Visit Us
            </h3>
            <p className="text-sm sm:text-base">Gujrat, Pakistan - 50700</p>
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="relative bg-linear-to-br from-[#2a0054] via-[#3b007d] to-[#4f00b5] min-h-screen flex items-center justify-center py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/contacthero.jpeg')] bg-cover bg-center opacity-15 pointer-events-none" />
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />

        <div className="relative z-10 w-full max-w-6xl grid lg:grid-cols-2 gap-8 sm:gap-10 items-center">
          {/* IMAGE SIDE */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3 lg:mb-2">
              Let’s Talk ✨
            </h2>
            <p className="text-white/70 mb-6 sm:mb-8 text-sm sm:text-base">
              Have questions or a project idea? Fill out the form below.
            </p>

            <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md mx-auto lg:mx-0 lg:ml-6">
              <Image
                src="/images/contact.svg"
                alt="Contact illustration"
                width={420}
                height={420}
                className="w-full h-auto hover:scale-100 md:hover:scale-105 transition-transform duration-700"
                priority={false}
              />
            </div>
          </div>

          {/* FORM */}
          <div className="order-1 lg:order-2 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-10 shadow-2xl w-full">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("✅ Message sent successfully!");
              }}
              className="flex flex-col gap-4 sm:gap-5"
            >
              {/* Full Name */}
              <input
                type="text"
                placeholder="Full Name *"
                required
                className="w-full bg-white/10 text-white placeholder-white/70 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl outline-none border border-white/20 text-sm sm:text-base
                 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/60 transition"
              />

              {/* Email */}
              <input
                type="email"
                placeholder="Email Address *"
                required
                className="w-full bg-white/10 text-white placeholder-white/70 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl outline-none border border-white/20 text-sm sm:text-base
                 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/60 transition"
              />

              {/* Phone */}
              <input
                type="number"
                placeholder="Phone Number *"
                required
                className="w-full bg-white/10 text-white placeholder-white/70 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl outline-none border border-white/20 text-sm sm:text-base
                 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/60 transition"
              />

              {/* Message */}
              <textarea
                rows="4"
                placeholder="Your Message *"
                required
                className="w-full bg-white/10 text-white placeholder-white/70 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl outline-none border border-white/20 resize-none text-sm sm:text-base
                 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/60 transition"
              />

              {/* Button */}
              <button
                type="submit"
                className="mt-2 sm:mt-4 bg-linear-to-r from-yellow-400 to-yellow-500 text-purple-900 font-semibold py-2.5 sm:py-3 rounded-xl text-sm sm:text-base
                 hover:scale-[1.01] md:hover:scale-[1.03] shadow-md hover:shadow-yellow-500/30 transition-transform duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
