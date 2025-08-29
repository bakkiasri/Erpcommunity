import Layout from "../layout/main";
import { FiSearch } from "react-icons/fi";
import { MdEdit } from "react-icons/md";
import { AiOutlineBars } from "react-icons/ai";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

function Transaction() {
  return (
    <Layout>
      <div className="p-4 space-y-6">
        {/* Jurnal Umum */}
        <div className="bg-[#3A3A5A] rounded-xl shadow-xl p-5 text-white">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold">Jurnal Umum</h2>
            <div className="flex items-center gap-3">
              <button className="bg-[#56CCF2] flex text-black text-sm px-3 py-1 rounded-md flex items-center gap-2">
                <IoSettingsOutline className="" />
              </button>
              <button className="bg-[#56CCF2] flex text-black text-sm px-3 py-1 rounded-md flex items-center gap-2">
                <span>Download CSV</span>
                <span className="p-0">
                  <MdOutlineFileDownload className="" height={17} />
                </span>
              </button>
              <button className="bg-[#56CCF2] flex text-black text-sm px-3 py-1 rounded-md flex items-center gap-2">
                <span>Export</span>
                <span className="p-0">
                  <MdOutlineFileDownload className="" height={17} />
                </span>
              </button>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="shadow-xl rounded-full px-4 py-2 text-sm outline-none"
                />
                <FiSearch className="absolute right-3 top-2 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-separate border-spacing-y-1">
              <thead>
                <tr className="bg-[#4D4D6C] shadow-lg text-gray-300">
                  <th className="px-3 py-1 rounded-l-lg text-center">
                    Tanggal
                  </th>
                  <th className="px-3 py-1 text-center">No. Referensi</th>
                  <th className="px-3 py-1 text-center">Deskripsi</th>
                  <th className="px-3 py-1 text-center">Nominal</th>
                  <th className="px-3 py-1 text-center">Status</th>
                  <th className="px-3 py-1 rounded-r-lg text-center"> </th>
                </tr>
              </thead>
              <tbody>
                {Array(1)
                  .fill(0)
                  .map((_, i) => (
                    <tr key={i} className="bg-[#626288] shadow-lg transition">
                      <td className="px-3 py-1 rounded-l-md text-center">
                        Tanggal
                      </td>
                      <td className="px-3 py-1 text-center">No. Referensi</td>
                      <td className="px-3 py-1 text-center">Deskripsi</td>
                      <td className="px-3 py-1 text-center">Nominal</td>
                      <td className="px-3 py-1 text-center">
                        <span className="bg-[#579AFF] px-2 py-1 rounded-full text-xs font-semibold">
                          Status
                        </span>
                      </td>
                      <td className="px-3 py-1 flex gap-3 rounded-r-md justify-center">
                        <AiOutlineBars className="cursor-pointer text-white" />
                        <MdEdit className="cursor-pointer  text-white" />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <div className="w-3/4  rounded-lg">
              {/* Header */}
              <div className="grid grid-cols-3 font-semibold border-b p-1">
                <div>Nama Akun</div>
                <div className="text-center">Debit</div>
                <div className="text-center">Kredit</div>
              </div>

              {/* Row 1 */}
              <div className="grid grid-cols-3  p-1">
                <div>Kas</div>
                <div className="text-center">Rp. 0,-</div>
                <div className="text-center">Rp. 15.000.000,-</div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-3 p-1">
                <div>Piutang</div>
                <div className="text-center">Rp. 15.000.000,-</div>
                <div className="text-center">Rp. 0,-</div>
              </div>

              {/* Row 3 */}
            </div>{" "}
            <table className="w-full text-sm border-separate border-spacing-y-1">
              <thead>
                <tr className="bg-[#4D4D6C] shadow-lg text-gray-300">
                  <th className="px-3 py-1 rounded-l-lg text-center">
                    Tanggal
                  </th>
                  <th className="px-3 py-1 text-center">No. Referensi</th>
                  <th className="px-3 py-1 text-center">Deskripsi</th>
                  <th className="px-3 py-1 text-center">Nominal</th>
                  <th className="px-3 py-1 text-center">Status</th>
                  <th className="px-3 py-1 rounded-r-lg text-center"> </th>
                </tr>
              </thead>
              <tbody>
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <tr key={i} className="bg-[#626288] shadow-lg transition">
                      <td className="px-3 py-1 rounded-l-md text-center">
                        Tanggal
                      </td>
                      <td className="px-3 py-1 text-center">No. Referensi</td>
                      <td className="px-3 py-1 text-center">Deskripsi</td>
                      <td className="px-3 py-1 text-center">Nominal</td>
                      <td className="px-3 py-1 text-center">
                        <span className="bg-[#579AFF] px-2 py-1 rounded-full text-xs font-semibold">
                          Status
                        </span>
                      </td>
                      <td className="px-3 py-1 flex gap-3 rounded-r-md justify-center">
                        <AiOutlineBars className="cursor-pointer text-white" />
                        <MdEdit className="cursor-pointer  text-white" />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* Pagination */}

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Invoice */}
          <div className="flex-row space-y-1 flex-1 bg-[#3A3A5A] rounded-2xl shadow-xl px-8 py-4">
            <div className="flex text-white ps-4 font-semibold text-xl">
              Histori Transaksi
            </div>
            <div className="grid grid-cols-4 gap-4 text-[#AEAEAE] border-b-1 border-[#ECECEC] px-6 p-1">
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
                  className="grid grid-cols-4  gap-4 border-b border-[#ECECEC] px-6 p-1"
                >
                  <div className="flex justify-center text-white">Penerima</div>
                  <div className="flex justify-center text-[#AEAEAE]">Tipe</div>
                  <div className="flex justify-center text-[#AEAEAE]">
                    Tanggal
                  </div>
                  <div className="flex justify-center text-[#74CDFF] font-medium">
                    $75
                  </div>
                </div>
              ))}
          </div>
          {/* Payments & Expenses */}
          <div className="bg-[#2E2E48] flex rounded-xl gap-6 shadow-lg p-5 text-white">
            <h3>Pembayaran & Biaya</h3>
            <div className="bg-gradient-to-r from-blue-600 to-cyan-400 rounded-xl p-5 text-white mb-4">
              <p className="text-sm">cloudcash</p>
              <p className="text-xs">PREMIUM ACCOUNT</p>
              <div className="text-lg tracking-widest mt-4">
                5789 **** **** 2847
              </div>
              <div className="flex justify-between text-sm mt-2">
                <span>Mike Smith</span>
                <span>06/21</span>
              </div>
            </div>

            <div className="space-y-1 text-sm">
              <p>
                Current balance:{" "}
                <span className="text-cyan-400">Rp 15.000.000</span>
              </p>
              <p>
                Income: <span className="text-green-400">Rp 0</span>
              </p>
              <p>
                Outcome: <span className="text-red-400">Rp 15.000.000</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Transaction;
