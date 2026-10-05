"use client";

import { useState } from "react";
import { Search } from "lucide-react";

import Sidebar from "../components/Sidebar";
import ProfilManager from "../components/ProfilManager";

export default function StokMasukPage() {
  const [barang, setBarang] = useState("");
  const [pemasok, setPemasok] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [sku, setSku] = useState("");
  const [catatan, setCatatan] = useState("");

  const handleSimpan = () => {
    if (
      !barang ||
      !pemasok ||
      !tanggal ||
      !jumlah ||
      !sku
    ) {
      alert("Silakan lengkapi data terlebih dahulu.");
      return;
    }

    alert("Data stok masuk berhasil disimpan.");

    setBarang("");
    setPemasok("");
    setTanggal("");
    setJumlah("");
    setSku("");
    setCatatan("");
  };

  return (
    <div className="flex min-h-screen bg-[#f7f7f7]">

      {/* =========================
          SIDEBAR
      ========================= */}

      <Sidebar />

      {/* =========================
          KONTEN UTAMA
      ========================= */}

      <main className="flex-1 px-7 py-5">

        {/* =========================
            HEADER
        ========================= */}

        <div className="mb-5 flex items-start justify-between">

          <div>
            <h1 className="text-[28px] font-bold leading-tight text-[#111111]">
              Stok Masuk
            </h1>

            <p className="mt-1 text-[14px] text-gray-500">
              Catatan penerimaan barang baru
            </p>
          </div>

          <ProfilManager />

        </div>


        {/* =========================
            FORM CARD
        ========================= */}

        <section className="min-h-[560px] rounded-[7px] border border-[#22c77a] bg-white px-7 pb-10 pt-6">

          {/* JUDUL FORM */}

          <h2 className="mb-6 text-[19px] font-bold text-[#111111]">
            Form Penerimaan Barang
          </h2>


          {/* =========================
              PILIH BARANG
          ========================= */}

          <div className="mb-6">

            <label
              htmlFor="barang"
              className="mb-2 block text-[13px] text-[#333333]"
            >
              Pilih Barang
            </label>

            <div className="relative">

              <Search
                size={17}
                strokeWidth={1.7}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
              />

              <input
                id="barang"
                type="text"
                value={barang}
                onChange={(e) =>
                  setBarang(e.target.value)
                }
                placeholder="Cari atau pilih barang"
                className="h-11 w-full rounded-[5px] border border-[#22c77a] bg-white pl-10 pr-3 text-[13px] text-gray-700 outline-none placeholder:text-gray-400 focus:border-[#22c77a]"
              />

            </div>

          </div>


          {/* =========================
              BARIS PEMASOK + TANGGAL
          ========================= */}

          <div className="grid grid-cols-2 gap-8">

            {/* PILIH PEMASOK */}

            <div>

              <label
                htmlFor="pemasok"
                className="mb-2 block text-[13px] text-[#333333]"
              >
                Pilih Pemasok
              </label>

              <input
                id="pemasok"
                type="text"
                value={pemasok}
                onChange={(e) =>
                  setPemasok(e.target.value)
                }
                placeholder="Pilih SKU atau nama barang"
                className="h-11 w-full rounded-[5px] border border-[#22c77a] bg-white px-3 text-[13px] text-gray-700 outline-none placeholder:text-gray-400 focus:border-[#22c77a]"
              />

            </div>


            {/* TANGGAL */}

            <div>

              <label
                htmlFor="tanggal"
                className="mb-2 block text-[13px] text-[#333333]"
              >
                Tanggal Barang Masuk
              </label>

              <input
                id="tanggal"
                type="date"
                value={tanggal}
                onChange={(e) =>
                  setTanggal(e.target.value)
                }
                className="h-11 w-full rounded-[5px] border border-[#22c77a] bg-white px-3 text-[13px] text-gray-500 outline-none focus:border-[#22c77a]"
              />

            </div>

          </div>


          {/* =========================
              BARIS JUMLAH + CATATAN
          ========================= */}

          <div className="mt-6 grid grid-cols-2 gap-8">

            {/* JUMLAH MASUK */}

            <div>

              <label
                htmlFor="jumlah"
                className="mb-2 block text-[13px] text-[#333333]"
              >
                Jumlah Masuk
              </label>

              <input
                id="jumlah"
                type="number"
                min="1"
                value={jumlah}
                onChange={(e) =>
                  setJumlah(e.target.value)
                }
                className="h-11 w-full rounded-[5px] border border-[#22c77a] bg-white px-3 text-[13px] text-gray-700 outline-none focus:border-[#22c77a]"
              />

            </div>


            {/* CATATAN */}

            <div>

              <label
                htmlFor="catatan"
                className="mb-2 block text-[13px] text-[#333333]"
              >
                Catatan (Opsional)
              </label>

              <textarea
                id="catatan"
                value={catatan}
                onChange={(e) =>
                  setCatatan(e.target.value)
                }
                placeholder="Tambahkan Catatan..."
                className="h-[120px] w-full resize-none rounded-[5px] border border-[#22c77a] bg-white px-3 py-3 text-[13px] text-gray-700 outline-none placeholder:text-gray-400 focus:border-[#22c77a]"
              />

            </div>

          </div>


          {/* =========================
              SKU
          ========================= */}

          <div className="mt-[-44px] w-[calc(50%-16px)]">

            <label
              htmlFor="sku"
              className="mb-2 block text-[13px] text-[#333333]"
            >
              SKU
            </label>

            <input
              id="sku"
              type="text"
              value={sku}
              onChange={(e) =>
                setSku(e.target.value)
              }
              className="h-11 w-full rounded-[5px] border border-[#22c77a] bg-white px-3 text-[13px] text-gray-700 outline-none focus:border-[#22c77a]"
            />

          </div>


          {/* =========================
              TOMBOL SIMPAN
          ========================= */}

          <div className="mt-10 flex justify-center">

            <button
              type="button"
              onClick={handleSimpan}
              className="h-11 w-[260px] rounded-[5px] bg-[#587653] text-[14px] font-semibold text-white transition hover:bg-[#4e6b4a]"
            >
              Simpan
            </button>

          </div>

        </section>

      </main>

    </div>
  );
}