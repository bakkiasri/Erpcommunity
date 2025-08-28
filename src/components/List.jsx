import { useState, useMemo } from "react";

function Lists() {
  return (
    <div className="flex-row space-y-3 flex-1 bg-[#3A3A5A] rounded-2xl shadow-xl px-8 py-4">
      <div className="flex text-white ps-4 font-semibold text-xl">
        Histori Transaksi
      </div>
      <div className="grid grid-cols-4 gap-4 text-[#AEAEAE] border-b-1 border-[#ECECEC] px-6 p-2">
        <div className="flex justify-center">Penerima</div>
        <div className="flex justify-center">Tipe</div>
        <div className="flex justify-center">Tanggal</div>
        <div className="flex justify-center">Total</div>
      </div>

      {Array(5)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className="grid grid-cols-4  gap-4 border-b border-[#ECECEC] px-6 p-2"
          >
            <div className="flex justify-center text-white">Penerima</div>
            <div className="flex justify-center text-[#AEAEAE]">Tipe</div>
            <div className="flex justify-center text-[#AEAEAE]">Tanggal</div>
            <div className="flex justify-center text-[#74CDFF] font-medium">
              $75
            </div>
          </div>
        ))}
    </div>
  );
}
export default Lists;
