"use client";

import { useState } from "react";
import { Search, Eye } from "lucide-react";

import Sidebar from "../components/Sidebar";
import ProfilManager from "../components/ProfilManager";

type RiwayatStok = {
  tanggal: string;
  jenis: "Masuk" | "Keluar";
  barang: string;
  sku: string;
  jumlah: number;
  pemasokTujuan: string;
  catatan: string;
};

/* =========================================
   DATA CONTOH
========================================= */

const semuaData: RiwayatStok[] = [
  {
    tanggal: "SKU - 001",
    jenis: "Masuk",
    barang: "Laptop Asus",
    sku: "SKU-001",
    jumlah: 20,
    pemasokTujuan: "PT Technido",
    catatan: "",
  },
  {
    tanggal: "SKU - 001",
    jenis: "Keluar",
    barang: "",
    sku: "",
    jumlah: -5,
    pemasokTujuan: "",
    catatan: "",
  },
  {
    tanggal: "SKU - 002",
    jenis: "Masuk",
    barang: "Mouse Logitech",
    sku: "SKU-002",
    jumlah: 30,
    pemasokTujuan: "PT Sumber Jaya",
    catatan: "",
  },
  {
    tanggal: "SKU - 003",
    jenis: "Masuk",
    barang: "Keyboard Mechanical",
    sku: "SKU-003",
    jumlah: 15,
    pemasokTujuan: "CV Teknologi",
    catatan: "",
  },
  {
    tanggal: "SKU - 002",
    jenis: "Keluar",
    barang: "Mouse Logitech",
    sku: "SKU-002",
    jumlah: -10,
    pemasokTujuan: "Penjualan",
    catatan: "",
  },
  {
    tanggal: "SKU - 004",
    jenis: "Masuk",
    barang: "Monitor LG",
    sku: "SKU-004",
    jumlah: 12,
    pemasokTujuan: "PT Digital",
    catatan: "",
  },
  {
    tanggal: "SKU - 005",
    jenis: "Masuk",
    barang: "Printer Epson",
    sku: "SKU-005",
    jumlah: 8,
    pemasokTujuan: "PT Office",
    catatan: "",
  },
  {
    tanggal: "SKU - 004",
    jenis: "Keluar",
    barang: "Monitor LG",
    sku: "SKU-004",
    jumlah: -3,
    pemasokTujuan: "Penjualan",
    catatan: "",
  },
  {
    tanggal: "SKU - 006",
    jenis: "Masuk",
    barang: "Flashdisk 64GB",
    sku: "SKU-006",
    jumlah: 40,
    pemasokTujuan: "PT Data Jaya",
    catatan: "",
  },
  {
    tanggal: "SKU - 007",
    jenis: "Masuk",
    barang: "Harddisk 1TB",
    sku: "SKU-007",
    jumlah: 10,
    pemasokTujuan: "CV Komputer",
    catatan: "",
  },
  {
    tanggal: "SKU - 006",
    jenis: "Keluar",
    barang: "Flashdisk 64GB",
    sku: "SKU-006",
    jumlah: -8,
    pemasokTujuan: "Penjualan",
    catatan: "",
  },
  {
    tanggal: "SKU - 008",
    jenis: "Masuk",
    barang: "Kabel HDMI",
    sku: "SKU-008",
    jumlah: 25,
    pemasokTujuan: "PT Elektronik",
    catatan: "",
  },
  {
    tanggal: "SKU - 009",
    jenis: "Masuk",
    barang: "Webcam",
    sku: "SKU-009",
    jumlah: 18,
    pemasokTujuan: "PT Digital",
    catatan: "",
  },
  {
    tanggal: "SKU - 008",
    jenis: "Keluar",
    barang: "Kabel HDMI",
    sku: "SKU-008",
    jumlah: -6,
    pemasokTujuan: "Penjualan",
    catatan: "",
  },
  {
    tanggal: "SKU - 010",
    jenis: "Masuk",
    barang: "Headset",
    sku: "SKU-010",
    jumlah: 20,
    pemasokTujuan: "PT Audio",
    catatan: "",
  },
  {
    tanggal: "SKU - 010",
    jenis: "Keluar",
    barang: "Headset",
    sku: "SKU-010",
    jumlah: -4,
    pemasokTujuan: "Penjualan",
    catatan: "",
  },
  {
    tanggal: "SKU - 011",
    jenis: "Masuk",
    barang: "RAM 16GB",
    sku: "SKU-011",
    jumlah: 14,
    pemasokTujuan: "PT Komputer",
    catatan: "",
  },
  {
    tanggal: "SKU - 012",
    jenis: "Masuk",
    barang: "SSD 512GB",
    sku: "SKU-012",
    jumlah: 16,
    pemasokTujuan: "PT Storage",
    catatan: "",
  },
  {
    tanggal: "SKU - 011",
    jenis: "Keluar",
    barang: "RAM 16GB",
    sku: "SKU-011",
    jumlah: -5,
    pemasokTujuan: "Penjualan",
    catatan: "",
  },
  {
    tanggal: "SKU - 013",
    jenis: "Masuk",
    barang: "Kamera CCTV",
    sku: "SKU-013",
    jumlah: 10,
    pemasokTujuan: "PT Security",
    catatan: "",
  },
];


/* =========================================
   HALAMAN RIWAYAT STOK
========================================= */

export default function RiwayatStokPage() {

  const [tab, setTab] = useState("Semua");

  const [halaman, setHalaman] = useState(1);

  const [cariBarang, setCariBarang] = useState("");

  const [cariPemasok, setCariPemasok] =
    useState("");

  const [jenisStok, setJenisStok] =
    useState("");


  /* =========================================
     JUMLAH DATA PER HALAMAN
  ========================================= */

  const jumlahPerHalaman = 5;


  /* =========================================
     FILTER DATA
  ========================================= */

  const dataFilter = semuaData.filter(
    (item) => {

      const sesuaiTab =
        tab === "Semua" ||
        item.jenis === tab;

      const sesuaiJenis =
        jenisStok === "" ||
        item.jenis === jenisStok;

      const sesuaiBarang =
        item.barang
          .toLowerCase()
          .includes(
            cariBarang.toLowerCase()
          );

      const sesuaiPemasok =
        item.pemasokTujuan
          .toLowerCase()
          .includes(
            cariPemasok.toLowerCase()
          );

      return (
        sesuaiTab &&
        sesuaiJenis &&
        sesuaiBarang &&
        sesuaiPemasok
      );
    }
  );


  /* =========================================
     TOTAL HALAMAN
  ========================================= */

  const totalHalaman = Math.max(
    1,
    Math.ceil(
      dataFilter.length /
        jumlahPerHalaman
    )
  );


  /* =========================================
     DATA PER HALAMAN
  ========================================= */

  const dataHalaman =
    dataFilter.slice(
      (halaman - 1) *
        jumlahPerHalaman,

      halaman *
        jumlahPerHalaman
    );


  /* =========================================
     PINDAH HALAMAN
  ========================================= */

  const pindahHalaman = (
    nomor: number
  ) => {

    if (
      nomor >= 1 &&
      nomor <= totalHalaman
    ) {
      setHalaman(nomor);
    }

  };


  return (

    <div className="flex min-h-screen bg-[#f7f7f7]">


      {/* =====================================
          SIDEBAR
      ===================================== */}

      <Sidebar />


      {/* =====================================
          KONTEN
      ===================================== */}

      <main className="flex-1 px-7 py-5">


        {/* ===================================
            HEADER
        =================================== */}

        <div className="mb-4 flex items-start justify-between">

          <div>

            <h1 className="text-[24px] font-bold leading-tight text-[#111111]">
              Riwayat Stok
            </h1>

            <p className="mt-1 text-[13px] text-gray-500">
              Lihat seluruh riwayat barang
              masuk dan barang keluar dari gudang
            </p>

          </div>


          <ProfilManager />

        </div>


        {/* ===================================
            TAB
        =================================== */}

        <div className="mb-3 flex items-center gap-5">


          {/* SEMUA */}

          <button
            type="button"
            onClick={() => {

              setTab("Semua");

              setHalaman(1);

            }}
            className={`h-7 rounded-[6px] border border-[#20c987] px-4 text-[11px] ${
              tab === "Semua"
                ? "bg-[#dff8ea]"
                : "bg-white"
            }`}
          >
            Semua
          </button>


          {/* STOK MASUK */}

          <button
            type="button"
            onClick={() => {

              setTab("Masuk");

              setHalaman(1);

            }}
            className={`h-7 rounded-[6px] border border-[#20c987] px-4 text-[11px] ${
              tab === "Masuk"
                ? "bg-[#dff8ea]"
                : "bg-white"
            }`}
          >
            Stok Masuk
          </button>


          {/* STOK KELUAR */}

          <button
            type="button"
            onClick={() => {

              setTab("Keluar");

              setHalaman(1);

            }}
            className={`h-7 rounded-[6px] border border-[#20c987] px-4 text-[11px] ${
              tab === "Keluar"
                ? "bg-[#dff8ea]"
                : "bg-white"
            }`}
          >
            Stok Keluar
          </button>

        </div>


        {/* ===================================
            FILTER
        =================================== */}

        <div className="mb-3 w-full rounded-[7px] border border-[#20c987] bg-white p-3">

          <div className="grid grid-cols-[110px_110px_1fr_1fr] gap-[18px]">


            {/* PERIODE */}

            <div>

              <label className="mb-1.5 block text-[11px] text-gray-500">
                Periode
              </label>

              <select
                className="h-7 w-full rounded-[7px] border border-[#20c987] bg-white px-2 text-[10px] outline-none"
              >

                <option value="">
                </option>

                <option value="hari">
                  Hari Ini
                </option>

                <option value="minggu">
                  Minggu Ini
                </option>

                <option value="bulan">
                  Bulan Ini
                </option>

              </select>

            </div>


            {/* JENIS STOK */}

            <div>

              <label className="mb-1.5 block text-[11px] text-gray-500">
                Jenis Stok
              </label>

              <select
                value={jenisStok}
                onChange={(e) => {

                  setJenisStok(
                    e.target.value
                  );

                  setHalaman(1);

                }}
                className="h-7 w-full rounded-[7px] border border-[#20c987] bg-white px-2 text-[10px] outline-none"
              >

                <option value="">
                </option>

                <option value="Masuk">
                  Masuk
                </option>

                <option value="Keluar">
                  Keluar
                </option>

              </select>

            </div>


            {/* CARI BARANG */}

            <div>

              <label className="mb-1.5 block text-[11px] text-gray-500">
                Cari Barang
              </label>

              <div className="relative">

                <Search
                  size={13}
                  strokeWidth={1.7}
                  className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500"
                />

                <input
                  type="text"
                  value={cariBarang}
                  onChange={(e) => {

                    setCariBarang(
                      e.target.value
                    );

                    setHalaman(1);

                  }}
                  className="h-7 w-full rounded-[7px] border border-[#20c987] bg-white pl-7 pr-2 text-[10px] outline-none"
                />

              </div>

            </div>


            {/* CARI PEMASOK */}

            <div>

              <label className="mb-1.5 block text-[11px] text-gray-500">
                Cari Pemasok
              </label>

              <div className="relative">

                <Search
                  size={13}
                  strokeWidth={1.7}
                  className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500"
                />

                <input
                  type="text"
                  value={cariPemasok}
                  onChange={(e) => {

                    setCariPemasok(
                      e.target.value
                    );

                    setHalaman(1);

                  }}
                  className="h-7 w-full rounded-[7px] border border-[#20c987] bg-white pl-7 pr-2 text-[10px] outline-none"
                />

              </div>

            </div>

          </div>

        </div>


        {/* ===================================
            TABEL
        =================================== */}

        <div className="w-full overflow-hidden rounded-[6px] border border-[#20c987]">

          <table className="w-full table-fixed border-collapse text-[10px]">


            {/* =================================
                HEADER TABEL
            ================================= */}

            <thead>

              <tr className="bg-[#f1f2f2]">

                <th className="h-[50px] w-[13%] border border-[#8bdcb7] px-2 font-normal text-gray-600">
                  Tanggal
                </th>

                <th className="h-[50px] w-[14%] border border-[#8bdcb7] px-2 font-normal text-gray-600">
                  Jenis
                </th>

                <th className="h-[50px] w-[17%] border border-[#8bdcb7] px-2 font-normal text-gray-600">
                  Barang
                </th>

                <th className="h-[50px] w-[10%] border border-[#8bdcb7] px-2 font-normal text-gray-600">
                  SKU
                </th>

                <th className="h-[50px] w-[10%] border border-[#8bdcb7] px-2 font-normal text-gray-600">
                  Jumlah
                </th>

                <th className="h-[50px] w-[16%] border border-[#8bdcb7] px-2 font-normal text-gray-600">
                  Pemasok/Tujuan
                </th>

                <th className="h-[50px] w-[12%] border border-[#8bdcb7] px-2 font-normal text-gray-600">
                  Catatan
                </th>

                <th className="h-[50px] w-[8%] border border-[#8bdcb7] px-2 font-normal text-gray-600">
                  Aksi
                </th>

              </tr>

            </thead>


            {/* =================================
                ISI TABEL
            ================================= */}

            <tbody>


              {/* DATA */}

              {dataHalaman.map(
                (item, index) => (

                  <tr
                    key={`${item.sku}-${item.jenis}-${index}`}
                  >


                    {/* TANGGAL */}

                    <td className="h-[54px] border border-[#8bdcb7] px-2 text-center text-[10px]">
                      {item.tanggal}
                    </td>


                    {/* JENIS */}

                    <td className="h-[54px] border border-[#8bdcb7] px-2 text-center">

                      <span
                        className={`inline-flex h-[19px] min-w-[56px] items-center justify-center rounded-full px-2 text-[9px] ${
                          item.jenis ===
                          "Masuk"
                            ? "bg-[#d8f3e5] text-[#4b7c62]"
                            : "bg-[#f5d5d5] text-[#c95a5a]"
                        }`}
                      >
                        {item.jenis}
                      </span>

                    </td>


                    {/* BARANG */}

                    <td className="h-[54px] border border-[#8bdcb7] px-2 text-center">
                      {item.barang}
                    </td>


                    {/* SKU */}

                    <td className="h-[54px] border border-[#8bdcb7] px-2 text-center">
                      {item.sku}
                    </td>


                    {/* JUMLAH */}

                    <td
                      className={`h-[54px] border border-[#8bdcb7] px-2 text-center ${
                        item.jumlah >= 0
                          ? "text-[#42b65c]"
                          : "text-[#ff4d4d]"
                      }`}
                    >
                      {item.jumlah >= 0
                        ? `+ ${item.jumlah}`
                        : item.jumlah}
                    </td>


                    {/* PEMASOK / TUJUAN */}

                    <td className="h-[54px] border border-[#8bdcb7] px-2 text-center">
                      {item.pemasokTujuan}
                    </td>


                    {/* CATATAN */}

                    <td className="h-[54px] border border-[#8bdcb7] px-2 text-center">
                      {item.catatan}
                    </td>


                    {/* AKSI */}

                    <td className="h-[54px] border border-[#8bdcb7] px-2 text-center">

                      <button
                        type="button"
                        onClick={() =>
                          alert(
                            `Detail ${item.barang}`
                          )
                        }
                        className="text-gray-600 transition hover:text-[#20c987]"
                      >

                        <Eye
                          size={14}
                          strokeWidth={1.8}
                        />

                      </button>

                    </td>

                  </tr>

                )
              )}


              {/* =================================
                  BARIS KOSONG
              ================================= */}

              {Array.from({

                length:
                  Math.max(
                    0,
                    jumlahPerHalaman -
                      dataHalaman.length
                  ),

              }).map(
                (_, index) => (

                  <tr
                    key={`empty-${index}`}
                  >

                    <td className="h-[54px] border border-[#8bdcb7]"></td>

                    <td className="h-[54px] border border-[#8bdcb7]"></td>

                    <td className="h-[54px] border border-[#8bdcb7]"></td>

                    <td className="h-[54px] border border-[#8bdcb7]"></td>

                    <td className="h-[54px] border border-[#8bdcb7]"></td>

                    <td className="h-[54px] border border-[#8bdcb7]"></td>

                    <td className="h-[54px] border border-[#8bdcb7]"></td>

                    <td className="h-[54px] border border-[#8bdcb7]"></td>

                  </tr>

                )
              )}

            </tbody>

          </table>

        </div>


        {/* ===================================
            PAGINATION
        =================================== */}

        <div className="mt-3 flex w-full justify-end">

          <div className="flex items-center gap-1">


            {/* PREVIOUS */}

            <button
              type="button"
              disabled={
                halaman === 1
              }
              onClick={() =>
                pindahHalaman(
                  halaman - 1
                )
              }
              className="flex h-7 w-7 items-center justify-center rounded-[5px] border border-[#20c987] bg-white text-[11px] text-gray-700 disabled:cursor-not-allowed disabled:opacity-40"
            >
              ‹
            </button>


            {/* NOMOR HALAMAN */}

            {Array.from(
              {
                length: Math.min(
                  totalHalaman,
                  10
                ),
              },
              (_, index) =>
                index + 1
            ).map(
              (nomor) => (

                <button
                  key={nomor}
                  type="button"
                  onClick={() =>
                    pindahHalaman(
                      nomor
                    )
                  }
                  className={`flex h-7 w-7 items-center justify-center rounded-[5px] border text-[10px] ${
                    halaman === nomor
                      ? "border-[#587653] bg-[#587653] text-white"
                      : "border-[#20c987] bg-white text-gray-700"
                  }`}
                >
                  {nomor}
                </button>

              )
            )}


            {/* TITIK */}

            {totalHalaman > 10 && (

              <span className="px-1 text-[11px] text-gray-600">
                ...
              </span>

            )}


            {/* NEXT */}

            <button
              type="button"
              disabled={
                halaman ===
                totalHalaman
              }
              onClick={() =>
                pindahHalaman(
                  halaman + 1
                )
              }
              className="flex h-7 w-7 items-center justify-center rounded-[5px] border border-[#20c987] bg-white text-[11px] text-gray-700 disabled:cursor-not-allowed disabled:opacity-40"
            >
              ›
            </button>

          </div>

        </div>

      </main>

    </div>

  );
}