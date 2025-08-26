import React from "react";

function Sidemenu() {
  return (
    <div
      className={`h-screen lg:block hidden bg-[#464667] transition-all duration-300 w-56`}
    >
      <div className="flex items-center gap-2 text-white px-4 py-5 text-lg">
        <span className="text-white font-bold text-sm">SB ADMIN</span>
      </div>

      <div className="text-white space-y-3">
        <div className="flex items-center gap-2 px-5 py-2">
          <span>Dashboard</span>
        </div>

        <div className="flex items-center gap-2 px-5 py-2">
          <select className="bg-transparent text-white text-sm">
            <option>Components</option>
            <option>Buttons</option>
            <option>Cards</option>
          </select>
        </div>

        <div className="flex items-center gap-2 px-5 py-2">
          <span>Utilities</span>
        </div>

        <div className="flex items-center gap-2 px-5 py-2">
          <select className="bg-transparent text-white text-sm">
            <option>Pages</option>
            <option>Login</option>
            <option>Register</option>
            <option>Forget Password</option>
            <option>404 Error</option>
            <option>Blank Page</option>
          </select>
        </div>

        <div className="flex items-center gap-2 px-5 py-2">
          <select className="bg-transparent text-white text-sm">
            <option>Charts</option>
            <option>Chart 1</option>
            <option>Chart 2</option>
          </select>
        </div>

        <div className="flex items-center gap-2 px-5 py-2">
          <div className="flex-row justify-center">
            <p className="text-[12px]">Tables</p>
          </div>
        </div>
      </div>

      <div className="w-full mt-30 flex justify-center items-end">
        <button className="text-white rounded-full p-2 bg-blue-100 hover:bg-blue-200 transition-all duration-300"></button>
      </div>
    </div>
  );
}

export default Sidemenu;
