import React from "react";

const FeatureHomeCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white border border-[#41058b] rounded-2xl p-5 sm:p-6 lg:p-8 shadow-md hover:shadow-xl hover:border-[#b026ff]/60 hover:-translate-y-2 transition-all duration-300 text-center">
      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center bg-linear-to-br from-[#f5e1ff] to-[#ede0ff] rounded-xl mb-4 sm:mb-5 mx-auto shadow-inner shrink-0">
        {icon}
      </div>

      <h3 className="text-lg sm:text-xl font-bold text-[#3b0066] mb-2">
        {title}
      </h3>
      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default FeatureHomeCard;
