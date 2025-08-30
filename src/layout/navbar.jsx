import { FaSearch, FaEnvelope, FaBell, FaBars } from "react-icons/fa";

function Navbars({ toggleMenu }) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between bg-transparent px-4 sm:px-8 py-2 gap-3 sm:gap-0">
      {/* Left: Company Name + Toggle Button (for mobile) */}
      <div className="flex items-center justify-between w-full sm:w-auto">
        <div className="text-white tracking-wide font-bold text-base sm:text-lg text-center sm:text-left">
          PT. Kapzet Teknologi Informasi
        </div>
        {/* Toggle Button (hidden in lg) */}
        <button className="text-white text-xl sm:hidden" onClick={toggleMenu}>
          <FaBars />
        </button>
      </div>

      {/* Center: Search Bar */}
      <div className="w-full sm:w-3/4 lg:max-w-lg">
        <div className="flex items-center bg-[#3b3b58] rounded-full px-3 sm:px-4 py-1 shadow-xl">
          <input
            type="text"
            placeholder="Search ..."
            className="bg-transparent text-white text-sm w-full outline-none placeholder-gray-300"
          />
          <FaSearch className="text-gray-300 ml-2" />
        </div>
      </div>

      {/* Right: Icons + Profile */}
      <div className="flex items-center gap-4 sm:gap-6 lg:gap-10 text-white">
        <FaEnvelope className="cursor-pointer hover:text-gray-300" />
        <FaBell className="cursor-pointer hover:text-gray-300" />

        {/* Profile */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-sm font-bold text-white">
            A
          </div>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-xs sm:text-sm font-semibold">Andrew</span>
            <span className="text-xs sm:text-sm text-gray-300">
              Admin account
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbars;
