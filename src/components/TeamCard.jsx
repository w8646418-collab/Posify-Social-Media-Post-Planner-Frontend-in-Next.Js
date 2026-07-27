const TeamCard = ({ name, role, description, image }) => {
  return (
    <div className="relative bg-white border border-[#e5d4ff] rounded-3xl mt-14 sm:mt-16 md:mt-20 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 p-5 sm:p-6 md:p-8 flex flex-col items-center text-center">
      {/* Profile Image with ring */}
      <div className="absolute -top-10 sm:-top-12 md:-top-16 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full bg-[#ee9507] p-[3px] shadow-lg">
        <div className="w-full h-full rounded-full overflow-hidden bg-white shadow-md">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="mt-10 sm:mt-12 md:mt-14 lg:mt-16">
        <h3 className="text-xl sm:text-2xl font-extrabold text-[#d8a406] mb-1 break-words">{name}</h3>
        <p className="text-xs sm:text-sm text-[#4f0581] font-bold mb-2 sm:mb-3">{role}</p>
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>

      {/* Subtle bottom glow */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-linear-to-r from-transparent via-[#b026ff]/30 to-transparent rounded-b-3xl"></div>
    </div>
  );
};

export default TeamCard;
