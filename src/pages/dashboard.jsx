import Layout from "../layout/main";

function Dashboard() {
  return (
    <Layout>
      <div className="flex flex-col justify-center gap-6 items-center bg-[#000000] p-6">
        {/* Row 1 */}
        <div className="flex w-full justify-center items-center gap-4">
          <div className="flex-row flex-1 justify-center shadow-xl items-center bg-[#3A3A5A] rounded-xl p-4">
            <div className="flex text-white ps-7 text-xl font-semibold">
              Wallet
            </div>
            <div className="flex gap-5 text-[#464255] justify-between px-3 py-1">
              <div className="py-1  px-3 rounded-xl shadow bg-[#9797EF]">
                <div className="text-xl">Tabugan</div>
                <div className="text-4xl font-bold">IDR</div>
                <div className="text-4xl font-bold">4,508,342</div>
              </div>
              <div className="py-1  px-3 rounded-xl shadow bg-[#EFEFF2]">
                <div className="text-xl">Tabugan</div>
                <div className="text-4xl font-bold">IDR</div>
                <div className="text-4xl font-bold">4,508,342</div>
              </div>
              <div className="py-1  px-3 rounded-xl shadow bg-[#FA9BE5]">
                <div className="text-xl">Tabugan</div>
                <div className="text-4xl font-bold">IDR</div>
                <div className="text-4xl font-bold">4,508,342</div>
              </div>
            </div>
          </div>
          <div className="flex-row flex-1 justify-center items-center rounded-xl shadow-xl bg-[#3A3A5A] p-4">
            <div className="flex text-white ps-2 text-2xl font-bold">
              Wallet
            </div>
            <div className="flex">
              <div>USD</div>
              <div>USD</div>
              <div>USD</div>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex w-full justify-center items-center gap-4">
          <div className="flex-row flex-1 justify-center items-center bg-[#3A3A5A] rounded-2xl shadow-xl px-8 py-4 ">
            <div className="flex text-white ps-4 font-semibold text-xl ">
              Histori Transaksi
            </div>
            <div className="grid grid-cols-4 gap-4 text-[#AEAEAE] border-b-1 border-[#ECECEC] px-6 p-2">
              <div className="flex justify-center items-center">Pemerima</div>
              <div className="flex justify-center items-center">Tipe</div>
              <div className="flex justify-center items-center">Tanggal</div>
              <div className="flex justify-center items-center">Total</div>
            </div>
            <div className="grid grid-cols-4 gap-4 border-b-1 border-[#ECECEC] px-6 p-2">
              <div className="flex justify-center text-white items-center">
                Pemerima
              </div>
              <div className="flex justify-center text-[#AEAEAE] items-center">
                Tipe
              </div>
              <div className="flex justify-center text-[#AEAEAE] items-center">
                Tanggal
              </div>
              <div className="flex justify-center text-[#74CDFF] items-center font-medium">
                $75
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4 border-b-1 border-[#ECECEC] px-6 p-2">
              <div className="flex justify-center text-white items-center">
                Pemerima
              </div>
              <div className="flex justify-center text-[#AEAEAE] items-center">
                Tipe
              </div>
              <div className="flex justify-center text-[#AEAEAE] items-center">
                Tanggal
              </div>
              <div className="flex justify-center text-[#74CDFF] items-center font-medium">
                $75
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4 border-b-1 border-[#ECECEC] px-6 p-2">
              <div className="flex justify-center text-white items-center">
                Pemerima
              </div>
              <div className="flex justify-center text-[#AEAEAE] items-center">
                Tipe
              </div>
              <div className="flex justify-center text-[#AEAEAE] items-center">
                Tanggal
              </div>
              <div className="flex justify-center text-[#74CDFF] items-center font-medium">
                $75
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4 border-b-1 border-[#ECECEC] px-6 p-2">
              <div className="flex justify-center text-white items-center">
                Pemerima
              </div>
              <div className="flex justify-center text-[#AEAEAE] items-center">
                Tipe
              </div>
              <div className="flex justify-center text-[#AEAEAE] items-center">
                Tanggal
              </div>
              <div className="flex justify-center text-[#74CDFF] items-center font-medium">
                $75
              </div>
            </div>
          </div>
          <div className="flex flex-1 justify-center items-center bg-pink-200 p-4">
            second
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
