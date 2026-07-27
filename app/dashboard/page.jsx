"use client";

import React from "react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-purple-50 overflow-x-hidden">
      <nav className="bg-white shadow-md px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex justify-between items-center sticky top-0 z-30">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-900">Dashboard</h1>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl text-sm sm:text-base font-semibold transition">
          Logout
        </button>
      </nav>

      <header className="max-w-7xl mx-auto py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-purple-800 break-words">
          Welcome to your Dashboard
        </h2>
        <p className="mt-2 sm:mt-3 text-gray-700 text-sm sm:text-base lg:text-lg">
          Manage your posts and plan hashtags easily.
        </p>
      </header>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8 pb-10 sm:pb-12 lg:pb-16">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg p-5 sm:p-6 lg:p-8 flex flex-col gap-5 sm:gap-6 min-w-0">
          <h3 className="text-xl sm:text-2xl font-bold text-purple-800 break-words">Create Post</h3>
          <input
            type="text"
            placeholder="Post Title"
            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
          <textarea
            placeholder="Post Content"
            rows={4}
            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-purple-500 focus:outline-none resize-none"
          />
          <select className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-purple-500 focus:outline-none">
            <option>---Select Platform---</option>
            <option>Facebook</option>
            <option>Instagram</option>
            <option>Twitter</option>
            <option>TikTok</option>
            <option>YouTube</option>
          </select>
          <input
            type="datetime-local"
            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
          <button className="w-full bg-linear-to-r from-purple-600 to-purple-800 text-white py-3 sm:py-3.5 text-sm sm:text-base rounded-lg font-semibold md:hover:scale-[1.02] transition-transform shadow-md">
            Create Post
          </button>
        </div>

        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg p-5 sm:p-6 lg:p-8 flex flex-col gap-5 sm:gap-6 min-w-0">
          <h3 className="text-xl sm:text-2xl font-bold text-purple-800 break-words">
            Hashtag Planner
          </h3>
          <input
            type="text"
            placeholder="Enter Keyword / Topic"
            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
          <button className="w-full bg-linear-to-r from-purple-600 to-purple-800 text-white py-3 sm:py-3.5 text-sm sm:text-base rounded-lg font-semibold md:hover:scale-[1.02] transition-transform shadow-md">
            Generate Hashtags
          </button>
          <div className="flex flex-wrap gap-2 mt-2 sm:mt-4">
            <span className="px-3 py-1.5 sm:py-2 bg-purple-100 text-purple-700 text-xs sm:text-sm rounded-full break-words">
              #Example
            </span>
            <span className="px-3 py-1.5 sm:py-2 bg-purple-100 text-purple-700 text-xs sm:text-sm rounded-full break-words">
              #SocialMedia
            </span>
            <span className="px-3 py-1.5 sm:py-2 bg-purple-100 text-purple-700 text-xs sm:text-sm rounded-full break-words">
              #Marketing
            </span>
          </div>
        </div>

        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg p-5 sm:p-6 lg:p-8 flex flex-col gap-5 sm:gap-6 min-w-0 sm:col-span-2 lg:col-span-1">
          <h3 className="text-xl sm:text-2xl font-bold text-purple-800 break-words">
            Automatic Posting
          </h3>
          <p className="text-gray-700 text-sm sm:text-base">
            Schedule posts to be published automatically. (UI only)
          </p>
          <input
            type="text"
            placeholder="Post Title"
            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
          <textarea
            placeholder="Post Content"
            rows={4}
            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-purple-500 focus:outline-none resize-none"
          />
          <select className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-purple-500 focus:outline-none">
            <option>---Select Platform---</option>
            <option>Facebook</option>
            <option>Instagram</option>
            <option>Twitter</option>
            <option>TikTok</option>
            <option>YouTube</option>
          </select>
          <input
            type="datetime-local"
            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
          <button className="w-full bg-linear-to-r from-purple-600 to-purple-800 text-white py-3 sm:py-3.5 text-sm sm:text-base rounded-lg font-semibold md:hover:scale-[1.02] transition-transform shadow-md">
            Schedule Post
          </button>
        </div>
      </div>
    </div>
  );
}
