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

function Sidemenu({ isOpen, toggleMenu }) {
  const [active, setActive] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", link: "/", icon: <MdOutlineDashboard /> },
    { name: "Administrasi", link: "/ad", icon: <MdOutlineGroup /> },
    { name: "Data Master", link: "/dm", icon: <MdOutlineArticle /> },
    { name: "Transaksi", link: "/transaction", icon: <MdOutlinePayments /> },
    { name: "Laporan", link: "/la", icon: <IoSettingsOutline /> },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:block fixed top-0 left-0 h-screen w-57 bg-[#464667]">
        {/* Logo */}
        <div className="flex items-center gap-2 text-white px-4 py-5 text-lg">
          <img src={Logo} alt="logo" />
        </div>

        {/* Menu */}
        <div className="flex flex-col ps-5 text-white mt-10">
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

        {/* Logout */}
        <div className="flex justify-center mt-40">
          <button className="flex py-2 gap-3 px-6 bg-white rounded-xl text-black font-semibold">
            <FiLogOut className="mt-1" />
            Logout
          </button>
        </div>
        <p className="mt-5 text-center text-white font-semibold">
          © 2021 SEMPOA ERP
        </p>
      </div>

      {/* Mobile & Tab Sidebar (Overlay) */}
      <div
        className={`lg:hidden fixed top-0 left-0 h-screen w-64 bg-[#464667] transform transition-transform duration-300 z-50 
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Close Button */}
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-white text-2xl"
        >
          ✕
        </button>

        {/* Logo */}
        <div className="flex items-center gap-2 text-white px-4 py-5 text-lg mt-6">
          <img src={Logo} alt="logo" />
        </div>

        {/* Menu */}
        <div className="flex flex-col ps-5 text-white mt-10">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              onClick={() => {
                setActive(item.name);
                toggleMenu(); // close after click
              }}
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
      </div>
    </>
  );
}

export default Sidemenu;
