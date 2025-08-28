import Layout from "../layout/main";
import { ChevronLeft, ChevronRight, List } from "lucide-react";
import { useState, useMemo } from "react";
import usd from "../assets/UnitedStates.png";
import uk from "../assets/UnitedKingdom.png";
import ind from "../assets/Indonesia.png";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Calender from "../components/Calender";
import Lists from "../components/List";
import LineCharts from "../components/Linechart";

function Dashboard() {
  const currencies = [
    { code: usd, symbol: "$", label: "USD", flag: "🇺🇸" },
    { code: ind, symbol: "Rp", label: "IDR", flag: "🇮🇩" },
    { code: uk, symbol: "£", label: "GBP", flag: "🇬🇧" },
    { code: ind, symbol: "€", label: "EUR", flag: "🇪🇺" },
    { code: uk, symbol: "¥", label: "JPY", flag: "🇯🇵" },
    { code: usd, symbol: "A$", label: "AUD", flag: "🇦🇺" },
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? currencies.length - 3 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev >= currencies.length - 3 ? 0 : prev + 1));
  };

  return (
    <Layout>
      <div className="flex flex-col justify-center gap-4 items-center  p-6">
        {/* Row 1 */}
        <div className="flex w-full justify-center items-center gap-4">
          {/* Wallet */}
          <div className="flex-1 flex-row py-3 shadow-xl bg-[#3A3A5A] rounded-3xl">
            <div className="flex text-white ps-7 text-xl font-semibold">
              Wallet
            </div>
            <div className="flex gap-5 text-[#464255] justify-between px-7 py-1">
              <div className="py-1 px-6 rounded-xl shadow bg-[#9797EF]">
                <div className="text-xl">Tabungan</div>
                <div className="text-4xl font-bold">IDR</div>
                <div className="text-4xl font-bold">4,508,342</div>
              </div>
              <div className="py-1 px-6 rounded-xl shadow bg-[#EFEFF2]">
                <div className="text-xl">Tabungan</div>
                <div className="text-4xl font-bold">IDR</div>
                <div className="text-4xl font-bold">4,508,342</div>
              </div>
              <div className="py-1 px-6 rounded-xl shadow bg-[#FA9BE5]">
                <div className="text-xl">Tabungan</div>
                <div className="text-4xl font-bold">IDR</div>
                <div className="text-4xl font-bold">4,508,342</div>
              </div>
            </div>
          </div>

          {/* Currency Selector */}
          <div className="flex-row bg-[#3A3A5A] text-white p-2 rounded-3xl shadow-xl  ">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Select Currency
            </h2>

            <div className="relative flex px-2 items-center">
              {/* Left Arrow */}
              <button
                onClick={prevSlide}
                className="absolute -left-1 p-2 text-white"
              >
                <ChevronLeft size={18} />
              </button>

              {/* Visible 3 currencies */}
              <div className="flex gap-4 px-6 overflow-hidden w-full justify-center ">
                {currencies.slice(current, current + 3).map((cur, idx) => (
                  <div
                    key={idx}
                    className="bg-[#464667] flex flex-col items-center justify-center w-24 h-24 rounded-xl shadow-md"
                  >
                    <img
                      src={cur.code}
                      alt={cur.label}
                      className="w-8 rounded-full h-8"
                    />
                    <span className="text-md font-bold">{cur.symbol}</span>
                    <span className="text-lg font-bold">{cur.label}</span>
                  </div>
                ))}
              </div>

              {/* Right Arrow */}
              <button
                onClick={nextSlide}
                className="absolute -right-1 p-2 text-white"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
        {/* Row 2 */}
        <div className="flex w-full justify-center items-center gap-4">
          {/* Transaction History */}
          <Lists />
          <div className="flex p-0 bg-[#3A3A5A] bg-[#3A3A5A] text-white rounded-xl justify-center items-center ">
            <Calender />
          </div>
        </div>
        {/* Row 3 */}
        <div className="flex w-full justify-start items-center gap-4">
          <div className="flex-1 row py-3 shadow-xl bg-[#3A3A5A] rounded-xl">
            <LineCharts />
          </div>
          <div className="flex-1 flex-col justify-center space-y-9 items-start gap-4">
            {/* Top row: label + percentage */}
            <div className="flex justify-between space-x-4 items-center w-full">
              {" "}
              <div className="flex h-7 w-9 bg-[#FFEADA] rounded-sm shadow-xl"></div>
              <div className="flex-row gap-3 w-full">
                <div className="w-full bg-[#9797D7] rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-[#686892] h-3 rounded-full transition-all duration-300"
                    style={{ width: "57%" }}
                  ></div>
                </div>
                <div className="font-medium text-white">Shopping</div>
              </div>
              <div className="text-[#696969] text-2xl">57%</div>
            </div>
            <div className="flex justify-between space-x-4 items-center w-full">
              {" "}
              <div className="flex h-7 w-9 bg-[#E4F0FF] rounded-sm shadow-xl"></div>
              <div className="flex-row gap-3 w-full">
                <div className="w-full bg-[#9797D7] rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-[#686892] h-3 rounded-full transition-all duration-300"
                    style={{ width: "57%" }}
                  ></div>
                </div>
                <div className="font-medium text-white">Electronics</div>
              </div>
              <div className="text-[#696969] text-2xl">57%</div>
            </div>
            <div className="flex justify-between space-x-4 items-center w-full">
              {" "}
              <div className="flex h-7 w-9 bg-[#E4F0FF] rounded-sm shadow-xl"></div>
              <div className="flex-row gap-3 w-full">
                <div className="w-full bg-[#9797D7] rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-[#686892] h-3 rounded-full transition-all duration-300"
                    style={{ width: "57%" }}
                  ></div>
                </div>
                <div className="font-medium text-white">Travels</div>
              </div>
              <div className="text-[#696969] text-2xl">57%</div>
            </div>
            {/* Progress bar */}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
