"use client";

import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="font-poppins text-gray-900">
      {/* HERO SECTION */}
      <section className="bg-[url('/images/contacthero.jpeg')] relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center text-white px-8 md:px-2 pt-4 mt-24">
        <h2 className="text-4xl font-extrabold text-[#ffb703] mb-3 z-10">
          We’d Love to Hear From You
        </h2>
        <p className="text-lg max-w-2xl text-white text-center z-10">
          Whether you’re managing multiple accounts, scheduling posts, or
          analyzing your brand’s growth, reach out to us. Let’s plan, post, and
          grow your social media presence together!
        </p>
      </section>

      {/* CONTACT INFO SECTION */}
      <section className="relative bg-linear-to-br from-[#fdf4ff] via-[#fff9f3] to-[#fef6ff] py-24 px-8 min-h-screen overflow-hidden">
        {/* Background Glows */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#e6d2ff] rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#ffe7b3] rounded-full blur-3xl opacity-40" />

        <div className="relative z-10 text-center mb-16">
          <h2 className="text-5xl font-extrabold text-[#6b1f97] mb-4">
            Let’s <span className="text-[#ebab09]">Get in Touch</span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            Have a question, collaboration idea, or feedback? We’d love to hear
            from you!
          </p>
        </div>

        <div className="relative z-10 grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* PHONE */}
          <div className="bg-white/40 backdrop-blur-lg border border-[#7a00cc] rounded-3xl shadow-lg hover:-translate-y-2 transition-all duration-500 p-8 text-center">
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-linear-to-br from-[#efac02] to-[#ffd75b] mb-5">
              <i className="fas fa-phone text-2xl text-white" />
            </div>
            <h3 className="text-xl font-extrabold text-[#7a00cc] mb-2">
              Call Us
            </h3>
            <p>+92-26673678</p>
            <p>+92-36726495</p>
          </div>

          {/* EMAIL */}
          <div className="bg-white/40 backdrop-blur-lg border border-[#7a00cc] rounded-3xl shadow-lg hover:-translate-y-2 transition-all duration-500 p-8 text-center md:-mt-10">
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-linear-to-br from-[#6b1f97] to-[#9d55cc] mb-5">
              <i className="fas fa-envelope text-2xl text-white" />
            </div>
            <h3 className="text-xl font-extrabold text-[#7a00cc] mb-2">
              Email Us
            </h3>
            <p>info@socialplanner.com</p>
          </div>

          {/* ADDRESS */}
          <div className="bg-white/40 backdrop-blur-lg border border-[#7a00cc] rounded-3xl shadow-lg hover:-translate-y-2 transition-all duration-500 p-8 text-center">
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-linear-to-br from-[#efac02] to-[#ffd75b] mb-5">
              <i className="fas fa-map-marker-alt text-2xl text-white" />
            </div>
            <h3 className="text-xl font-extrabold text-[#7a00cc] mb-2">
              Visit Us
            </h3>
            <p>Gujrat, Pakistan - 50700</p>
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="relative bg-linear-to-br from-[#2a0054] via-[#3b007d] to-[#4f00b5] min-h-screen flex items-center justify-center py-12 px-8">
        <div className="absolute inset-0 bg-[url('/images/contacthero.jpeg')] bg-cover bg-center opacity-15" />
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 w-full max-w-6xl grid lg:grid-cols-2 gap-10 items-center">
          {/* IMAGE SIDE */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-2">
              Let’s Talk ✨
            </h2>
            <p className="text-white/70 mb-8">
              Have questions or a project idea? Fill out the form below.
            </p>

            <Image
              src="/images/contact.svg"
              alt="Contact illustration"
              width={420}
              height={420}
              className="ml-10 hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* FORM */}
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-10 shadow-2xl">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("✅ Message sent successfully!");
              }}
              className="flex flex-col gap-5"
            >
              {/* Full Name */}
              <input
                type="text"
                placeholder="Full Name *"
                required
                className="w-full bg-white/10 text-white placeholder-white/70 px-4 py-3 rounded-xl outline-none border border-white/20
                 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/60 transition"
              />

              {/* Email */}
              <input
                type="email"
                placeholder="Email Address *"
                required
                className="w-full bg-white/10 text-white placeholder-white/70 px-4 py-3 rounded-xl outline-none border border-white/20
                 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/60 transition"
              />

              {/* Phone */}
              <input
                type="number"
                placeholder="Phone Number *"
                required
                className="w-full bg-white/10 text-white placeholder-white/70 px-4 py-3 rounded-xl outline-none border border-white/20
                 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/60 transition"
              />

              {/* Message */}
              <textarea
                rows="4"
                placeholder="Your Message *"
                required
                className="w-full bg-white/10 text-white placeholder-white/70 px-4 py-3 rounded-xl outline-none border border-white/20 resize-none
                 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/60 transition"
              />

              {/* Button */}
              <button
                type="submit"
                className="mt-4 bg-linear-to-r from-yellow-400 to-yellow-500 text-purple-900 font-semibold py-3 rounded-xl
                 hover:scale-[1.03] shadow-md hover:shadow-yellow-500/30 transition-transform duration-300"
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
