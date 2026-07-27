import React from "react";

const InspirationCard = ({ title, description, example }) => {
  return (
    <div className="bg-white relative overflow-hidden rounded-2xl p-5 sm:p-6 w-full shadow-md border border-transparent hover:border-[#b026ff]/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group min-w-0">
      <div className="absolute inset-0 bg-linear-to-br from-[#f5e1ff]/20 to-[#ede0ff]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <h3 className="font-semibold text-[#7a00cc] mb-2 relative z-10 text-sm sm:text-base">
        {title}
      </h3>
      <p className="text-gray-600 text-xs sm:text-sm relative z-10 leading-relaxed">{description}</p>
      <div className="mt-3 sm:mt-4 text-xs text-gray-500 relative z-10 break-words">
        Example: "{example}"
      </div>
    </div>
  );
};

export default InspirationCard;
