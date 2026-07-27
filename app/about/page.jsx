"use client";

import TeamCard from "../../src/components/TeamCard";

export default function About() {
  return (
    <div className="min-h-screen bg-linear-to-b from-white via-blue-50 to-indigo-100 text-gray-800 overflow-x-hidden">
      {/* SECTION 1: HERO */}
      <section
        className="relative flex items-center justify-center min-h-screen sm:min-h-screen md:min-h-screen bg-cover bg-center text-white px-4 sm:px-6 md:px-8 pt-20 sm:pt-24 md:pt-4 pb-12 sm:pb-16"
        style={{ backgroundImage: "url('/images/abouthero copy.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-4xl px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 sm:mb-4 text-white drop-shadow-md">
            About Social Planner
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-indigo-100 max-w-2xl mx-auto px-2">
            Your trusted partner in social media management — helping creators,
            brands, and businesses plan smarter, post consistently, and grow
            effortlessly.
          </p>
        </div>
      </section>

      {/* SECTION 2: TEAM */}
      <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#fbfafc] via-[#e7e4ea] to-[#d6d5d6] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#350650] mb-3 sm:mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10 sm:mb-12 lg:mb-16 text-sm sm:text-base px-2">
            Passionate minds behind SocialPlanner — blending creativity,
            strategy, and technology to make social media effortless.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-5xl mx-auto">
            <TeamCard
              name="Hafsa Abdul Razzaq"
              role="Frontend Developer"
              description="Focused on elegant design and seamless user experiences."
              image="/images/hafsa.jpeg"
            />
            <TeamCard
              name="Tasmia Anwar"
              role="Backend Developer"
              description="Crafting responsive and dynamic user interfaces."
              image="/images/tasmia.jpeg"
            />
            <TeamCard
              name="Amna Amjad"
              role="Project Manager"
              description="Ensuring smooth collaboration and timely delivery."
              image="/images/amna.jpeg"
            />
          </div>
        </div>
      </section>

      {/* SECTION 3: MISSION + OFFERS + CONTACT */}
      <section className="py-16 sm:py-20 bg-linear-to-br from-[#e8d5f5] via-[#dabef1] to-[#ddc9ef] overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-[#5c2484] mb-6 sm:mb-10 lg:mb-14">
            What We Offer
          </h2>
          <p className="text-center text-gray-700 max-w-2xl mx-auto mb-10 sm:mb-12 lg:mb-14 text-sm sm:text-base lg:text-lg leading-relaxed px-2">
            Discover tools designed to simplify your workflow, boost engagement,
            and help your brand shine across every platform.
          </p>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {/* Mission */}
            <div className="bg-white p-5 sm:p-6 lg:p-8 rounded-2xl border border-[#41058b]/30 hover:border-[#b026ff]/60 shadow-md hover:shadow-xl hover:scale-[1.01] lg:hover:scale-[1.02] transition-all duration-500">
              <h2 className="text-xl sm:text-2xl font-bold text-[#5c2484] mb-3 sm:mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 leading-relaxed mb-2 sm:mb-3 text-sm sm:text-base">
                <strong className="text-[#210753] font-semibold">
                  We help creators and businesses plan, design, and publish
                  content without stress.
                </strong>{" "}
                We believe that managing social media should be simple, efficient,
                and effective. Our mission is to empower content creators,
                businesses, and social media managers with tools that streamline
                their workflow and maximize online presence.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                We're committed to providing intuitive features that save you time
                while helping you maintain consistent engagement with your
                audience across all platforms.
              </p>
            </div>

            {/* What We Offer */}
            <div className="bg-white p-5 sm:p-6 lg:p-8 rounded-2xl border border-[#41058b]/30 hover:border-[#b026ff]/60 shadow-md hover:shadow-xl hover:scale-[1.01] lg:hover:scale-[1.02] transition-all duration-500">
              <h2 className="text-xl sm:text-2xl font-bold text-[#5c2484] mb-4 sm:mb-6">
                What We Offer
              </h2>

              {[
                {
                  title: "Smart Scheduling",
                  desc: "Plan and schedule your posts with precision timing.",
                },
                {
                  title: "Hashtag Intelligence",
                  desc: "Generate relevant hashtags to boost your visibility.",
                },
                {
                  title: "Automation Tools",
                  desc: "Streamline your workflow with automated posting features.",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3 sm:space-x-4 mb-3 sm:mb-5 group">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-linear-to-br from-[#f5e1ff] to-[#ede0ff] rounded-lg flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-[#7a00cc]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-[#3b0066] font-semibold text-sm sm:text-base">{item.title}</h3>
                    <p className="text-gray-600 text-xs sm:text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT PLANNING SECTION */}
      <section className="relative bg-purple-50 py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* LEFT TEXT */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#4b1c6f] mb-2 sm:mb-6 leading-tight">
              Solving the Chaos of Content Planning
            </h2>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-4 sm:mb-8 max-w-lg">
              We eliminate the stress of daily posting and help you plan,
              design, and publish content without burnout.
            </p>

            <div className="space-y-3 sm:space-y-6">
              {[
                {
                  emoji: "✅",
                  title: "No More Posting Stress",
                  text: "Plan ahead and stay consistent without last-minute panic.",
                },
                {
                  emoji: "⚙️",
                  title: "Automated Scheduling",
                  text: "Set your posts once and let the system handle the rest.",
                },
                {
                  emoji: "🗓️",
                  title: "One-Click Content Calendar",
                  text: "Visualize everything in a clean, organized calendar.",
                },
                {
                  emoji: "🎨",
                  title: "Design & Post in Minutes",
                  text: "Create eye-catching content without using 5 different tools.",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 sm:gap-4 group">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-white/70 backdrop-blur-sm rounded-xl shadow-md group-hover:scale-110 transition-transform duration-500 shrink-0 text-lg sm:text-xl">
                    {item.emoji}
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-base sm:text-lg font-semibold text-[#4b1c6f] group-hover:text-indigo-700 transition-colors duration-500">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-xs sm:text-sm">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-5 sm:p-8 relative overflow-hidden hover:scale-100 md:hover:scale-105 hover:shadow-2xl transition-transform duration-500 ease-out group">
            <div className="mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-semibold text-[#4b1c6f]  transition-colors duration-500">
                From Overwhelm to Organized
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm">Your workflow, simplified</p>
            </div>

            <ul className="space-y-3 sm:space-y-5">
              {[
                { emoji: "📌", text: "Plan posts in advance" },
                { emoji: "🕒", text: "Schedule once, publish automatically" },
                { emoji: "🎯", text: "Stay consistent across platforms" },
                { emoji: "🚀", text: "Boost engagement effortlessly" },
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 sm:gap-3 group-hover:translate-x-0 md:group-hover:translate-x-1 transition-transform duration-500"
                >
                  <span className="text-xl sm:text-2xl shrink-0">{item.emoji}</span>
                  <span className="text-gray-700 text-xs sm:text-sm">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* TRUST + TESTIMONIALS + LOCATION */}
      <section className="relative bg-linear-to-b from-[#d3cddb] via-indigo-200 to-purple-300 py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#4b1c6f] mb-8 sm:mb-10 lg:mb-14">
            Trusted by Creators & Brands
          </h2>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-12 lg:mb-16 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-5 sm:p-8 shadow-lg hover:scale-100 md:hover:scale-105 hover:shadow-2xl transition-transform duration-500 ease-out">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#4b1c6f]">10K+</h3>
              <p className="text-gray-600 mt-1 sm:mt-2 text-xs sm:text-sm ">Posts Scheduled</p>
            </div>
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-5 sm:p-8 shadow-lg hover:scale-100 md:hover:scale-105 hover:shadow-2xl transition-transform duration-500 ease-out">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#4b1c6f]">5K+</h3>
              <p className="text-gray-600 mt-1 sm:mt-2 text-xs sm:text-sm ">Active Users</p>
            </div>
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-5 sm:p-8 shadow-lg hover:scale-100 md:hover:scale-105 hover:shadow-2xl transition-transform duration-500 ease-out">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#4b1c6f]">4.9 ★</h3>
              <p className="text-gray-600 mt-1 sm:mt-2 text-xs sm:text-sm ">User Ratings</p>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20 max-w-5xl mx-auto">
            {[
              {
                name: "Ayesha Khan",
                text: "Scheduler ne meri posting life itni asaan kar di — now I stay consistent without stress!",
                img: "/images/a.jpeg",
              },
              {
                name: "Daniyal Ahmed",
                text: "Perfect for freelancers and small brands — time saver & super clean UI.",
                img: "/images/b.jpeg",
              },
              {
                name: "Hina R.",
                text: "Team collaboration and scheduling features are game-changing!",
                img: "/images/c.jpeg",
              },
            ].map((user, idx) => (
              <div
                key={idx}
                className="bg-white/90 backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-lg hover:translate-y-0 md:hover:-translate-y-3 hover:shadow-2xl transition-transform duration-500 group relative overflow-hidden"
              >
                <div className="absolute -top-6 sm:-top-10 -right-6 sm:-right-10 w-24 h-24 sm:w-32 sm:h-32 bg-linear-to-br from-indigo-400 via-purple-300 to-pink-300 opacity-20 blur-3xl group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"></div>
                <div className="flex flex-col items-center text-center relative z-10">
                  <img
                    src={user.img}
                    alt={user.name}
                    className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full border-4 border-white mb-3 sm:mb-4 shadow-md object-cover"
                  />
                  <p className="text-gray-700 text-xs sm:text-sm mb-2 sm:mb-3">{user.text}</p>
                  <h4 className="font-semibold text-[#4b1c6f] text-sm sm:text-base">{user.name}</h4>
                </div>
              </div>
            ))}
          </div>

          {/* Location */}
          <div className="py-10 sm:py-12 lg:py-16 px-4 sm:px-6 bg-white rounded-2xl sm:rounded-3xl shadow-xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-[#6b1f97] mb-3 sm:mb-6">
              Our <span className="text-[#ebab09]">Location</span>
            </h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-8 lg:mb-10 text-xs sm:text-sm  px-2">
              Visit us at our office in Gujrat, Pakistan.
            </p>
            <div className="w-full h-56 sm:h-72 md:h-80 lg:h-96 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 border-purple-400">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.0996986839425!2d74.0785!3d32.5742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391ee9c2e3f9177b%3A0xdea3c3cab843046b!2sGujrat%2C%20Punjab%2050700%2C%20Pakistan!5e0!3m2!1sen!2s!4v1702900000000"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl sm:rounded-3xl"
                title="Postify Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
