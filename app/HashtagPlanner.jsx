"use client";

import React, { useState, useEffect } from "react";

const HashtagPlanner = () => {
  const [keyword, setKeyword] = useState("");
  const [hashtags, setHashtags] = useState([]);
  const [copyMessage, setCopyMessage] = useState("");
  const [platform, setPlatform] = useState("Instagram");
  const [count, setCount] = useState(10);

  useEffect(() => {
    if (copyMessage) {
      const timer = setTimeout(() => setCopyMessage(""), 2000);
      return () => clearTimeout(timer);
    }
  }, [copyMessage]);

  const generateHashtags = () => {
    const kw = keyword.trim().toLowerCase();
    if (!kw) {
      alert("Please enter a keyword first!");
      return;
    }

    const suffixes = [
      "Life",
      "Goals",
      "Daily",
      "Lovers",
      "Community",
      "Inspiration",
      "Vibes",
      "Trends",
      "2025",
    ];
    const suggestions = Array.from({ length: count }, () => {
      const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
      return `#${kw}${suffix}`;
    });

    setHashtags(suggestions);
  };

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
        <h1 className="text-4xl md:text-2xl font-bold text-purple-800 mb-8">
          Generate Hashtags
        </h1>
        <input
          type="text"
          placeholder="Keyword"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="w-full border p-2 rounded mb-4"
        />
        <div className="grid grid-cols-2 gap-3 mb-4">
          {[
            "Business",
            "Lifestyle",
            "Fitness",
            "Food",
            "Travel",
            "Technology",
          ].map((cat) => (
            <button
              key={cat}
              onClick={() => setPlatform(cat)}
              className={`py-2 rounded ${
                platform === cat
                  ? "bg-purple-600 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <button
          onClick={generateHashtags}
          className="w-full bg-purple-700 text-white py-3 rounded-lg"
        >
          Generate Hashtags
        </button>
      </div>

      <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
        <h2 className="text-xl font-semibold text-purple-800 mb-4">
          Generated Hashtags
        </h2>
        {hashtags.length === 0 ? (
          <p className="text-gray-400">Generate hashtags to see them here</p>
        ) : (
          <div className="flex flex-wrap gap-2">
            {hashtags.map((tag, i) => (
              <span
                key={i}
                onClick={() => {
                  navigator.clipboard.writeText(tag);
                  setCopyMessage("Copied!");
                }}
                className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        {copyMessage && <p className="text-green-600 mt-2">{copyMessage}</p>}
      </div>
    </div>
  );
};

export default HashtagPlanner;
