"use client";

import { useState } from "react";
import {
  Search,
  Pencil,
  Trash2,
} from "lucide-react";

import Sidebar from "../components/Sidebar";
import ProfilManager from "../components/ProfilManager";

type Pemasok = {
  id: number;
  nama: string;
  kontak: string;
  alamat: string;
  kategori: string;
  status: "Aktif" | "Non Aktif";
};

const dataPemasok: Pemasok[] = [
  {
    id: 1,
    nama: "PT ABC Sejahtera",
    kontak:
      "No Telp: 1029383745\nEmail: abc@gmail.com",
    alamat: "Jl. Selamat",
    kategori: "Elektronik",
    status: "Aktif",
  },
  {
    id: 2,
    nama: "",
    kontak: "",
    alamat: "",
    kategori: "",
    status: "Non Aktif",
  },
  {
    id: 3,
    nama: "",
    kontak: "",
    alamat: "",
    kategori: "",
    status: "Aktif",
  },
  {
    id: 4,
    nama: "",
    kontak: "",
    alamat: "",
    kategori: "",
    status: "Aktif",
  },
  {
    id: 5,
    nama: "",
    kontak: "",
    alamat: "",
    kategori: "",
    status: "Aktif",
  },
  {
    id: 6,
    nama: "",
    kontak: "",
    alamat: "",
    kategori: "",
    status: "Aktif",
  },
];

export default function DataPemasokPage() {
  const [search, setSearch] = useState("");
  const [halaman, setHalaman] = useState(1);

  const filteredData = dataPemasok.filter((item) =>
    item.nama
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const handleEdit = (id: number) => {
    alert(`Edit pemasok ${id}`);
  };

  const handleDelete = (id: number) => {
    alert(`Hapus pemasok ${id}`);
  };

  const handlePage = (page: number) => {
    if (page < 1 || page > 10) {
      return;
    }

    setHalaman(page);
  };

  return (
    <div className="flex min-h-screen bg-[#f7f7f7]">

      {/* =====================================
          SIDEBAR
      ===================================== */}

      <Sidebar />


      {/* =====================================
          KONTEN UTAMA
      ===================================== */}

      <main className="flex-1 px-[10px] py-[18px]">

        {/* ===================================
            HEADER
        =================================== */}

        <div className="mb-[16px] flex items-start justify-between">

          <div>

            <h1 className="text-[20px] font-bold leading-tight text-[#111111]">
              Data Pemasok
            </h1>

            <p className="mt-[4px] text-[11px] text-gray-500">
              Kelola data pemasok yang bekerja sama dengan gudang
            </p>

          </div>

          <ProfilManager />

        </div>


        {/* ===================================
            SEARCH
        =================================== */}

        <div className="mb-[34px]">

          <div className="relative w-[490px]">

            <Search
              size={18}
              strokeWidth={1.8}
              className="absolute left-[12px] top-1/2 -translate-y-1/2 text-[#111827]"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setHalaman(1);
              }}
              placeholder="Cari nama pemasok"
              className="
                h-[40px]
                w-full
                rounded-[6px]
                border
                border-[#20c987]
                bg-white
                pl-[43px]
                pr-[12px]
                text-[11px]
                text-gray-700
                outline-none
                placeholder:text-gray-400
                focus:border-[#20c987]
              "
            />

          </div>

        </div>


        {/* ===================================
            TABEL DATA PEMASOK
        =================================== */}

        <div className="w-full overflow-hidden rounded-[6px] border border-[#20c987] bg-white">

          <table className="w-full table-fixed border-collapse">

            {/* =================================
                HEADER TABEL
            ================================= */}

            <thead>

              <tr className="bg-[#f1f2f2]">

                <th
                  className="
                    h-[48px]
                    w-[6%]
                    border
                    border-[#8bdcb7]
                    px-1
                    text-center
                    text-[10px]
                    font-normal
                    text-gray-600
                  "
                >
                  NO
                </th>

                <th
                  className="
                    h-[48px]
                    w-[14%]
                    border
                    border-[#8bdcb7]
                    px-2
                    text-center
                    text-[10px]
                    font-normal
                    text-gray-600
                  "
                >
                  Nama Pemasok
                </th>

                <th
                  className="
                    h-[48px]
                    w-[17%]
                    border
                    border-[#8bdcb7]
                    px-2
                    text-center
                    text-[10px]
                    font-normal
                    text-gray-600
                  "
                >
                  Kontak
                </th>

                <th
                  className="
                    h-[48px]
                    w-[13%]
                    border
                    border-[#8bdcb7]
                    px-2
                    text-center
                    text-[10px]
                    font-normal
                    text-gray-600
                  "
                >
                  Alamat
                </th>

                <th
                  className="
                    h-[48px]
                    w-[12%]
                    border
                    border-[#8bdcb7]
                    px-2
                    text-center
                    text-[10px]
                    font-normal
                    leading-[12px]
                    text-gray-600
                  "
                >
                  Kategori
                  <br />
                  Barang
                </th>

                <th
                  className="
                    h-[48px]
                    w-[12%]
                    border
                    border-[#8bdcb7]
                    px-2
                    text-center
                    text-[10px]
                    font-normal
                    text-gray-600
                  "
                >
                  Status
                </th>

                <th
                  className="
                    h-[48px]
                    w-[9%]
                    border
                    border-[#8bdcb7]
                    px-2
                    text-center
                    text-[10px]
                    font-normal
                    text-gray-600
                  "
                >
                  Aksi
                </th>

              </tr>

            </thead>


            {/* =================================
                BODY TABEL
            ================================= */}

            <tbody>

              {filteredData.map((item) => (

                <tr key={item.id}>

                  {/* NO */}

                  <td
                    className="
                      h-[52px]
                      border
                      border-[#8bdcb7]
                      px-1
                      text-center
                      text-[10px]
                      text-gray-700
                    "
                  >
                    {item.id}
                  </td>


                  {/* NAMA PEMASOK */}

                  <td
                    className="
                      h-[52px]
                      border
                      border-[#8bdcb7]
                      px-2
                      text-center
                      text-[10px]
                      text-gray-700
                    "
                  >
                    {item.nama}
                  </td>


                  {/* KONTAK */}

                  <td
                    className="
                      h-[52px]
                      whitespace-pre-line
                      border
                      border-[#8bdcb7]
                      px-2
                      text-left
                      align-middle
                      text-[9px]
                      leading-[12px]
                      text-gray-600
                    "
                  >
                    {item.kontak}
                  </td>


                  {/* ALAMAT */}

                  <td
                    className="
                      h-[52px]
                      border
                      border-[#8bdcb7]
                      px-2
                      text-center
                      text-[9px]
                      text-gray-600
                    "
                  >
                    {item.alamat}
                  </td>


                  {/* KATEGORI */}

                  <td
                    className="
                      h-[52px]
                      border
                      border-[#8bdcb7]
                      px-2
                      text-center
                      text-[9px]
                      text-gray-600
                    "
                  >
                    {item.kategori}
                  </td>


                  {/* STATUS */}

                  <td
                    className="
                      h-[52px]
                      border
                      border-[#8bdcb7]
                      px-2
                      text-center
                    "
                  >

                    {item.status === "Aktif" ? (

                      <span
                        className="
                          inline-flex
                          min-w-[52px]
                          items-center
                          justify-center
                          rounded-full
                          bg-[#dff8e8]
                          px-[9px]
                          py-[6px]
                          text-[9px]
                          text-[#4b7c62]
                        "
                      >
                        Aktif
                      </span>

                    ) : (

                      <span
                        className="
                          inline-flex
                          min-w-[52px]
                          items-center
                          justify-center
                          rounded-full
                          bg-[#ff9b9b]
                          px-[8px]
                          py-[6px]
                          text-[9px]
                          text-[#7d3d3d]
                        "
                      >
                        Non Aktif
                      </span>

                    )}

                  </td>


                  {/* AKSI */}

                  <td
                    className="
                      h-[52px]
                      border
                      border-[#8bdcb7]
                      px-1
                      text-center
                    "
                  >

                    <div className="flex items-center justify-center gap-[10px]">

                      <button
                        type="button"
                        onClick={() =>
                          handleEdit(item.id)
                        }
                        className="
                          text-gray-500
                          transition
                          hover:text-[#20c987]
                        "
                      >

                        <Pencil
                          size={14}
                          strokeWidth={1.8}
                        />

                      </button>


                      <button
                        type="button"
                        onClick={() =>
                          handleDelete(item.id)
                        }
                        className="
                          text-[#ff4d4d]
                          transition
                          hover:text-red-700
                        "
                      >

                        <Trash2
                          size={14}
                          strokeWidth={1.8}
                        />

                      </button>

                    </div>

                  </td>

                </tr>

              ))}


              {/* =================================
                  BARIS KOSONG
              ================================= */}

              {Array.from({
                length: Math.max(
                  0,
                  6 - filteredData.length
                ),
              }).map((_, index) => (

                <tr key={`empty-${index}`}>

                  <td className="h-[52px] border border-[#8bdcb7]" />

                  <td className="h-[52px] border border-[#8bdcb7]" />

                  <td className="h-[52px] border border-[#8bdcb7]" />

                  <td className="h-[52px] border border-[#8bdcb7]" />

                  <td className="h-[52px] border border-[#8bdcb7]" />

                  <td className="h-[52px] border border-[#8bdcb7]" />

                  <td className="h-[52px] border border-[#8bdcb7]" />

                </tr>

              ))}

            </tbody>

          </table>

        </div>


        {/* ===================================
            PAGINATION
        =================================== */}

        <div className="mt-[24px] flex w-full justify-end">

          <div className="flex items-center gap-[5px]">

            {/* PREVIOUS */}

            <button
              type="button"
              disabled={halaman === 1}
              onClick={() =>
                handlePage(halaman - 1)
              }
              className="
                flex
                h-[23px]
                w-[23px]
                items-center
                justify-center
                rounded-[5px]
                border
                border-[#20c987]
                bg-white
                text-[11px]
                text-gray-600
                disabled:cursor-not-allowed
                disabled:opacity-40
              "
            >
              ‹
            </button>


            {/* PAGE 1 */}

            <button
              type="button"
              onClick={() => handlePage(1)}
              className={`
                flex
                h-[23px]
                w-[23px]
                items-center
                justify-center
                rounded-[5px]
                border
                text-[10px]
                ${
                  halaman === 1
                    ? "border-[#587653] bg-[#587653] text-white"
                    : "border-[#20c987] bg-white text-gray-700"
                }
              `}
            >
              1
            </button>


            {/* PAGE 2 */}

            <button
              type="button"
              onClick={() => handlePage(2)}
              className={`
                flex
                h-[23px]
                w-[23px]
                items-center
                justify-center
                rounded-[5px]
                border
                text-[10px]
                ${
                  halaman === 2
                    ? "border-[#587653] bg-[#587653] text-white"
                    : "border-[#20c987] bg-white text-gray-700"
                }
              `}
            >
              2
            </button>


            {/* PAGE 3 */}

            <button
              type="button"
              onClick={() => handlePage(3)}
              className={`
                flex
                h-[23px]
                w-[23px]
                items-center
                justify-center
                rounded-[5px]
                border
                text-[10px]
                ${
                  halaman === 3
                    ? "border-[#587653] bg-[#587653] text-white"
                    : "border-[#20c987] bg-white text-gray-700"
                }
              `}
            >
              3
            </button>


            {/* DOT */}

            <span className="px-[3px] text-[11px] text-gray-600">
              ...
            </span>


            {/* PAGE 10 */}

            <button
              type="button"
              onClick={() => handlePage(10)}
              className={`
                flex
                h-[23px]
                w-[23px]
                items-center
                justify-center
                rounded-[5px]
                border
                text-[10px]
                ${
                  halaman === 10
                    ? "border-[#587653] bg-[#587653] text-white"
                    : "border-[#20c987] bg-white text-gray-700"
                }
              `}
            >
              10
            </button>


            {/* NEXT */}

            <button
              type="button"
              disabled={halaman === 10}
              onClick={() =>
                handlePage(halaman + 1)
              }
              className="
                flex
                h-[23px]
                w-[23px]
                items-center
                justify-center
                rounded-[5px]
                border
                border-[#20c987]
                bg-white
                text-[11px]
                text-gray-600
                disabled:cursor-not-allowed
                disabled:opacity-40
              "
            >
              ›
            </button>

          </div>

        </div>

      </main>

    </div>
  );
}
