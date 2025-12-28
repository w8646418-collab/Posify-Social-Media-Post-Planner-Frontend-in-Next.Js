// "use client";

// import React, { useState, useEffect } from "react";
// import PostCreator from "../CreatePost";
// import HashtagGenerator from "../HashtagPlanner";
// import AutoPosting from "../AutoPosting";
// import { useRouter } from "next/navigation";

// export default function Dashboard() {
//   const router = useRouter();
//   const [activeTab, setActiveTab] = useState("create");
//   const [userName, setUserName] = useState("");

//   useEffect(() => {
//     const isLoggedIn = localStorage.getItem("isLoggedIn");
//     const storedName = localStorage.getItem("userName");

//     if (isLoggedIn !== "true") {
//       alert("Please login first!");
//       router.push("/login");
//       return;
//     }

//     setUserName(storedName || "");
//   }, [router]);

//   const handleLogout = () => {
//     localStorage.removeItem("isLoggedIn");
//     localStorage.removeItem("userName");
//     localStorage.removeItem("email");
//     alert("Logged out successfully!");
//     router.push("/login");
//   };

//   return (
//     <div className="min-h-screen bg-linear-to-br bg-purple-100 via-purple-100 to-purple-100 mt-23 pb-15">
//       <div className="flex flex-col md:flex-row justify-between items-center bg-white p-8 mb-8">
//         <h1 className="text-4xl text-purple-900 font-bold">
//           Welcome {userName ? `, ${userName}` : ""}
//         </h1>
//         <button
//           onClick={handleLogout}
//           className="bg-yellow-500 text-white px-6 py-3 rounded-xl mt-4 md:mt-0 font-semibold hover:bg-yellow-600 transition cursor-pointer"
//         >
//           Logout
//         </button>
//       </div>

//       <div className="bg-white p-2 rounded-xl max-w-7xl mx-auto grid grid-cols-3 gap-4 mb-8">
//         {["create", "hashtags", "schedule"].map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`py-3 rounded-xl font-semibold w-full transition-all duration-200 hover:cursor-pointer ${
//               activeTab === tab
//                 ? "bg-purple-800 text-white shadow-md"
//                 : "bg-white text-gray-700"
//             }`}
//           >
//             {tab === "create"
//               ? "✏️ Create Post"
//               : tab === "hashtags"
//               ? "#️⃣ Hashtags"
//               : "🗓️ Auto Posting"}
//           </button>
//         ))}
//       </div>

//       <div className="text-gray-800 rounded-xl max-w-7xl mx-auto">
//         {activeTab === "create" && <PostCreator />}
//         {activeTab === "hashtags" && <HashtagGenerator />}
//         {activeTab === "schedule" && <AutoPosting />}
//       </div>
//     </div>
//   );
// }


"use client";

import React from "react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-purple-50">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-purple-900">Dashboard</h1>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-xl font-semibold transition">
          Logout
        </button>
      </nav>

      {/* Page heading */}
      <header className="max-w-7xl mx-auto py-10 px-4">
        <h2 className="text-4xl font-bold text-purple-800">
          Welcome to your Dashboard
        </h2>
        <p className="mt-2 text-gray-700 text-lg">
          Manage your posts and plan hashtags easily.
        </p>
      </header>

      {/* Sections container */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-4 pb-10">
        {/* Section 1: Create Post */}
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-6">
          <h3 className="text-2xl font-bold text-purple-800">Create Post</h3>
          <input
            type="text"
            placeholder="Post Title"
            className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
          <textarea
            placeholder="Post Content"
            rows={4}
            className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
          <select className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-purple-500 focus:outline-none">
            <option>---Select Platform---</option>
            <option>Facebook</option>
            <option>Instagram</option>
            <option>Twitter</option>
            <option>TikTok</option>
            <option>YouTube</option>
          </select>
          <input
            type="datetime-local"
            className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
          <button className="w-full bg-linear-to-r from-purple-600 to-purple-800 text-white py-3.5 rounded-lg font-semibold hover:scale-105 transition-transform shadow-md">
            Create Post
          </button>
        </div>

        {/* Section 2: Hashtag Planner */}
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-6">
          <h3 className="text-2xl font-bold text-purple-800">
            Hashtag Planner
          </h3>
          <input
            type="text"
            placeholder="Enter Keyword / Topic"
            className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
          <button className="w-full bg-linear-to-r from-purple-600 to-purple-800 text-white py-3.5 rounded-lg font-semibold hover:scale-105 transition-transform shadow-md">
            Generate Hashtags
          </button>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="px-3 py-2 bg-purple-100 text-purple-700 text-sm rounded-full">
              #Example
            </span>
            <span className="px-3 py-2 bg-purple-100 text-purple-700 text-sm rounded-full">
              #SocialMedia
            </span>
            <span className="px-3 py-2 bg-purple-100 text-purple-700 text-sm rounded-full">
              #Marketing
            </span>
          </div>
        </div>

        {/* Section 3: Automatic Posting */}
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-6">
          <h3 className="text-2xl font-bold text-purple-800">
            Automatic Posting
          </h3>
          <p className="text-gray-700">
            Schedule posts to be published automatically. (UI only)
          </p>
          <input
            type="text"
            placeholder="Post Title"
            className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
          <textarea
            placeholder="Post Content"
            rows={4}
            className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
          <select className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-purple-500 focus:outline-none">
            <option>---Select Platform---</option>
            <option>Facebook</option>
            <option>Instagram</option>
            <option>Twitter</option>
            <option>TikTok</option>
            <option>YouTube</option>
          </select>
          <input
            type="datetime-local"
            className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
          <button className="w-full bg-linear-to-r from-purple-600 to-purple-800 text-white py-3.5 rounded-lg font-semibold hover:scale-105 transition-transform shadow-md">
            Schedule Post
          </button>
        </div>
      </div>
    </div>
  );
}
