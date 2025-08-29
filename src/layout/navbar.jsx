import { FaSearch, FaEnvelope, FaBell } from "react-icons/fa";

function Navbars() {
  return (
    <div className="flex items-center justify-between bg-transparent px-8 py-2">
      {/* Left: Company Name */}
      <div className="text-white tracking-wide font-bold text-lg">
        PT. Kapzet Teknologi Informasi
      </div>

      {/* Center: Search Bar */}
      <div className="flex items-center w-3/4 max-w-lg bg-[#3b3b58] rounded-full px-4 py-1 shadow-xl">
        <input
          type="text"
          placeholder="Search ..."
          className="bg-transparent text-white text-sm w-full outline-none placeholder-gray-300"
        />
        <FaSearch className="text-gray-300 ml-2" />
      </div>

      {/* Right: Icons + Profile */}
      <div className="flex items-center gap-10 text-white">
        <FaEnvelope className="cursor-pointer hover:text-gray-300" />
        <FaBell className="cursor-pointer hover:text-gray-300" />

        {/* Profile */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-sm font-bold text-white">
            A
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold">Andrew</span>
            <span className="text-sm text-gray-300">Admin account</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbars;
