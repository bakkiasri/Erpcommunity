import React, { useState } from "react";
import Logo from "../assets/logo.png";
import {
  MdOutlineDashboard,
  MdOutlineGroup,
  MdOutlineArticle,
  MdOutlinePayments,
} from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
function Sidemenu() {
  const [active, setActive] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", link: "/", icon: <MdOutlineDashboard /> },
    { name: "Administrasi", link: "/ad", icon: <MdOutlineGroup /> },
    { name: "Data Master", link: "/dm", icon: <MdOutlineArticle /> },
    { name: "Transaksi", link: "/transaction", icon: <MdOutlinePayments /> },
    { name: "Laporan", link: "/la", icon: <IoSettingsOutline /> },
  ];

  return (
    <div className=" fixed top-0 left-0 h-screen w-57 bg-[#464667] transition-all duration-300 lg:block hidden">
      {/* Logo */}
      <div className="flex items-center gap-2 text-white px-4 py-5 text-lg">
        <span className="text-white font-bold mt-10 text-sm">
          <img src={Logo} alt="logo" />
        </span>
      </div>

      {/* Menu */}
      <div className="flex flex-col ps-5 text-white mt-10 ">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            onClick={() => setActive(item.name)}
            to={item.link}
            className={`flex items-center gap-3 ps-5 py-4 cursor-pointer transition-all relative
              ${
                active === item.name
                  ? "bg-[#2E2E48] rounded-full text-white font-semibold"
                  : ""
              }`}
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.name}</span>
          </Link>
        ))}
      </div>
      <div className="flex justify-center items-center justify-center mt-40 ">
        <button className="flex py-2 gap-3 px-6 bg-white rounded-xl text-black font-semibold">
          <span className="pt-1">
            <FiLogOut />
          </span>
          <span>Logout</span>
        </button>
      </div>
      <p className="mt-5 text-center text-white font-semiblod">
        © 2021 SEMPOA ERP
      </p>
    </div>
  );
}

export default Sidemenu;
