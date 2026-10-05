"use client";

import { useMemo, useState } from "react";

import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Pencil,
  Plus,
  Search,
  Trash2,
} from "lucide-react";

import Sidebar from "../components/Sidebar";
import ProfilManager from "../components/ProfilManager";
import UpdateStokModal from "./components/UpdateStokModal";

type SKUData = {
  id: number;
  sku: string;
  nama: string;
  kategori: string;
  stok: number;
  lokasi: string;
};

const initialData: SKUData[] = [
  {
    id: 1,
    sku: "SKU - 001",
    nama: "Laptop",
    kategori: "Elektronik",
    stok: 5,
    lokasi: "A1",
  },
  {
    id: 2,
    sku: "SKU - 002",
    nama: "Mouse",
    kategori: "Elektronik",
    stok: 2,
    lokasi: "A2",
  },
];

export default function SkuDatabasePage() {
  // =====================================================
  // DATA
  // =====================================================

  const [data, setData] =
    useState<SKUData[]>(initialData);

  // =====================================================
  // SEARCH
  // =====================================================

  const [search, setSearch] = useState("");

  // =====================================================
  // FILTER
  // =====================================================

  const [showFilter, setShowFilter] =
    useState(false);

  const [filterKategori, setFilterKategori] =
    useState("Semua Kategori");

  const [filterLokasi, setFilterLokasi] =
    useState("Semua Lokasi");

  const [filterStok, setFilterStok] =
    useState("Semua Stok");

  // =====================================================
  // MODAL
  // =====================================================

  const [showModal, setShowModal] =
    useState(false);

  const [editData, setEditData] =
    useState<SKUData | null>(null);

  // =====================================================
  // PAGINATION
  // =====================================================

  const [currentPage, setCurrentPage] =
    useState(1);

  const totalPages = 10;

  // =====================================================
  // STATUS STOK
  // =====================================================

  const getStatus = (stok: number) => {
    if (stok <= 0) {
      return {
        text: "Habis",
        color: "bg-red-400",
      };
    }

    if (stok <= 2) {
      return {
        text: "Menipis",
        color: "bg-yellow-300",
      };
    }

    return {
      text: "Tersedia",
      color: "bg-green-500",
    };
  };

  // =====================================================
  // FILTER DATA
  // =====================================================

  const filteredData = useMemo(() => {
    return data.filter((item) => {
      const keyword =
        search.toLowerCase();

      const cocokSearch =
        item.sku
          .toLowerCase()
          .includes(keyword) ||
        item.nama
          .toLowerCase()
          .includes(keyword) ||
        item.kategori
          .toLowerCase()
          .includes(keyword);

      const cocokKategori =
        filterKategori ===
          "Semua Kategori" ||
        item.kategori === filterKategori;

      const cocokLokasi =
        filterLokasi ===
          "Semua Lokasi" ||
        item.lokasi === filterLokasi;

      const cocokStok =
        filterStok === "Semua Stok" ||
        (filterStok === "Stok Aman" &&
          item.stok > 2) ||
        (filterStok === "Stok Menipis" &&
          item.stok > 0 &&
          item.stok <= 2) ||
        (filterStok === "Stok Habis" &&
          item.stok <= 0);

      return (
        cocokSearch &&
        cocokKategori &&
        cocokLokasi &&
        cocokStok
      );
    });
  }, [
    data,
    search,
    filterKategori,
    filterLokasi,
    filterStok,
  ]);

  // =====================================================
  // DATA HALAMAN
  // =====================================================

  const paginatedData =
    currentPage === 1
      ? filteredData
      : [];

  // =====================================================
  // TAMBAH SKU
  // =====================================================

  const handleAdd = (
    newItem: Omit<SKUData, "id">
  ) => {
    const newData: SKUData = {
      id: Date.now(),
      ...newItem,
    };

    setData((prev) => [
      ...prev,
      newData,
    ]);

    setShowModal(false);
    setCurrentPage(1);
  };

  // =====================================================
  // EDIT SKU
  // =====================================================

  const handleEdit = (
    updatedItem: SKUData
  ) => {
    setData((prev) =>
      prev.map((item) =>
        item.id === updatedItem.id
          ? updatedItem
          : item
      )
    );

    setEditData(null);
  };

  // =====================================================
  // HAPUS SKU
  // =====================================================

  const handleDelete = (id: number) => {
    const yakin = window.confirm(
      "Apakah kamu yakin ingin menghapus SKU ini?"
    );

    if (!yakin) return;

    setData((prev) =>
      prev.filter(
        (item) => item.id !== id
      )
    );
  };

  // =====================================================
  // RESET FILTER
  // =====================================================

  const resetFilter = () => {
    setFilterKategori("Semua Kategori");
    setFilterLokasi("Semua Lokasi");
    setFilterStok("Semua Stok");

    setCurrentPage(1);
    setShowFilter(false);
  };

  // =====================================================
  // PAGINATION
  // =====================================================

  const changePage = (page: number) => {
    if (
      page < 1 ||
      page > totalPages
    ) {
      return;
    }

    setCurrentPage(page);
  };

  // =====================================================
  // JUMLAH BARIS KOSONG
  // =====================================================

  const jumlahBarisKosong = Math.max(
    0,
    8 - paginatedData.length
  );

  // =====================================================
  // RENDER
  // =====================================================

  return (
    <div className="flex min-h-screen bg-white">

      {/* =================================================
          SIDEBAR
      ================================================= */}

      <Sidebar />

      {/* =================================================
          MAIN
      ================================================= */}

      <main className="flex min-h-screen flex-1 flex-col px-6 py-5">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="flex shrink-0 items-start justify-between">

          <div>

            <h1 className="text-2xl font-bold text-[#1A1A1A]">
              SKU Database
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Kelola data barang di gudang
            </p>

          </div>

          <div className="flex items-center">
            <ProfilManager />
          </div>

        </div>

        {/* =================================================
            SEARCH + FILTER + TAMBAH
        ================================================= */}

        <div className="mt-9 flex shrink-0 items-center gap-6">

          {/* SEARCH */}

          <div className="relative w-75">

            <Search
              size={20}
              strokeWidth={1.8}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-700"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Cari SKU, nama barang atau kategori"
              className="h-11 w-full rounded-md border border-[#22C77A] pl-10 pr-3 text-xs outline-none placeholder:text-gray-400"
            />

          </div>

          {/* FILTER */}

          <div className="relative">

            <button
              type="button"
              onClick={() =>
                setShowFilter(!showFilter)
              }
              className="flex h-11 w-30 items-center justify-between rounded-md border border-[#22C77A] px-4 text-sm text-gray-700"
            >
              <span>Filter</span>

              <ChevronDown
                size={20}
                strokeWidth={1.8}
              />
            </button>

            {showFilter && (

              <div className="absolute left-0 top-13 z-30 w-68.75 rounded-md border border-[#22C77A] bg-white p-4 shadow-lg">

                <p className="mb-2 text-xs font-semibold text-gray-700">
                  Kategori
                </p>

                <select
                  value={filterKategori}
                  onChange={(e) => {
                    setFilterKategori(
                      e.target.value
                    );
                    setCurrentPage(1);
                  }}
                  className="mb-4 h-9 w-full rounded-md border border-gray-300 px-2 text-xs outline-none"
                >
                  <option>
                    Semua Kategori
                  </option>

                  <option>
                    Elektronik
                  </option>

                  <option>
                    ATK
                  </option>

                  <option>
                    Kabel
                  </option>

                  <option>
                    Furniture
                  </option>

                  <option>
                    Peralatan Gudang
                  </option>
                </select>

                <p className="mb-2 text-xs font-semibold text-gray-700">
                  Lokasi
                </p>

                <select
                  value={filterLokasi}
                  onChange={(e) => {
                    setFilterLokasi(
                      e.target.value
                    );
                    setCurrentPage(1);
                  }}
                  className="mb-4 h-9 w-full rounded-md border border-gray-300 px-2 text-xs outline-none"
                >
                  <option>
                    Semua Lokasi
                  </option>

                  <option>A1</option>
                  <option>A2</option>
                  <option>B1</option>
                  <option>B2</option>
                </select>

                <p className="mb-2 text-xs font-semibold text-gray-700">
                  Stok
                </p>

                <select
                  value={filterStok}
                  onChange={(e) => {
                    setFilterStok(
                      e.target.value
                    );
                    setCurrentPage(1);
                  }}
                  className="mb-4 h-9 w-full rounded-md border border-gray-300 px-2 text-xs outline-none"
                >
                  <option>
                    Semua Stok
                  </option>

                  <option>
                    Stok Aman
                  </option>

                  <option>
                    Stok Menipis
                  </option>

                  <option>
                    Stok Habis
                  </option>
                </select>

                <button
                  type="button"
                  onClick={resetFilter}
                  className="h-8 w-full rounded-md bg-[#587653] text-xs text-white"
                >
                  Reset Filter
                </button>

              </div>

            )}

          </div>

          {/* TAMBAH SKU */}

          <button
            type="button"
            onClick={() => {
              setEditData(null);
              setShowModal(true);
            }}
            className="ml-auto flex h-11 w-34.25 items-center justify-center gap-2 rounded-md bg-[#587653] text-xs text-white transition hover:bg-[#4d6849]"
          >

            <Plus
              size={20}
              strokeWidth={1.8}
            />

            <span>
              Tambah SKU
            </span>

          </button>

        </div>

        {/* =================================================
            TABEL FULL
        ================================================= */}

        <div className="mt-5 flex-1 overflow-hidden rounded-md border border-[#22C77A]">

          <table className="h-full w-full border-collapse text-sm">

            {/* =================================================
                HEADER TABEL
            ================================================= */}

            <thead>

              <tr className="h-14 bg-[#F5F5F5] text-xs text-gray-700">

                <th className="w-10 border-b border-r border-[#22C77A] px-3 font-normal">
                  NO
                </th>

                <th className="w-24 border-b border-r border-[#22C77A] px-3 font-normal">
                  SKU
                </th>

                <th className="border-b border-r border-[#22C77A] px-3 font-normal">
                  Nama Barang
                </th>

                <th className="border-b border-r border-[#22C77A] px-3 font-normal">
                  Kategori
                </th>

                <th className="w-14 border-b border-r border-[#22C77A] px-3 font-normal">
                  Stok
                </th>

                <th className="w-16 border-b border-r border-[#22C77A] px-3 font-normal">
                  Lokasi
                </th>

                <th className="w-24 border-b border-r border-[#22C77A] px-3 font-normal">
                  Status
                </th>

                <th className="w-28 border-b border-[#22C77A] px-3 font-normal">
                  Aksi
                </th>

              </tr>

            </thead>

            {/* =================================================
                BODY TABEL
            ================================================= */}

            <tbody>

              {/* DATA ASLI */}

              {paginatedData.map(
                (item, index) => {

                  const status =
                    getStatus(item.stok);

                  return (

                    <tr
                      key={item.id}
                      className="h-14 text-xs text-gray-700"
                    >

                      {/* NO */}

                      <td className="border-b border-r border-[#22C77A] text-center">
                        {index + 1}
                      </td>

                      {/* SKU */}

                      <td className="border-b border-r border-[#22C77A] px-3">
                        {item.sku}
                      </td>

                      {/* NAMA */}

                      <td className="border-b border-r border-[#22C77A] text-center">
                        {item.nama}
                      </td>

                      {/* KATEGORI */}

                      <td className="border-b border-r border-[#22C77A] text-center">
                        {item.kategori}
                      </td>

                      {/* STOK */}

                      <td className="border-b border-r border-[#22C77A] text-center">
                        {item.stok}
                      </td>

                      {/* LOKASI */}

                      <td className="border-b border-r border-[#22C77A] text-center">
                        {item.lokasi}
                      </td>

                      {/* STATUS */}

                      <td className="border-b border-r border-[#22C77A]">

                        <div className="flex items-center justify-center gap-2">

                          <span
                            className={`h-3 w-3 rounded-full ${status.color}`}
                          />

                          <span>
                            {status.text}
                          </span>

                        </div>

                      </td>

                      {/* AKSI */}

                      <td className="border-b border-[#22C77A]">

                        <div className="flex items-center justify-center gap-4">

                          <button
                            type="button"
                            onClick={() =>
                              setEditData(item)
                            }
                            title="Edit SKU"
                            className="text-gray-600"
                          >

                            <Pencil
                              size={14}
                              strokeWidth={1.8}
                            />

                          </button>

                          <button
                            type="button"
                            onClick={() =>
                              handleDelete(
                                item.id
                              )
                            }
                            title="Hapus SKU"
                            className="text-red-500"
                          >

                            <Trash2
                              size={15}
                              strokeWidth={1.8}
                            />

                          </button>

                        </div>

                      </td>

                    </tr>

                  );
                }
              )}

              {/* =================================================
                  BARIS KOSONG
              ================================================= */}

              {Array.from({
                length: jumlahBarisKosong,
              }).map((_, index) => (

                <tr
                  key={`empty-${index}`}
                  className="h-14"
                >

                  <td className="border-b border-r border-[#22C77A]" />

                  <td className="border-b border-r border-[#22C77A]" />

                  <td className="border-b border-r border-[#22C77A]" />

                  <td className="border-b border-r border-[#22C77A]" />

                  <td className="border-b border-r border-[#22C77A]" />

                  <td className="border-b border-r border-[#22C77A]" />

                  <td className="border-b border-r border-[#22C77A]" />

                  <td className="border-b border-[#22C77A]" />

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        {/* =================================================
            PAGINATION
        ================================================= */}

        <div className="flex shrink-0 justify-end py-5">

          <div className="flex items-center gap-2">

            {/* PREVIOUS */}

            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() =>
                changePage(
                  currentPage - 1
                )
              }
              className={`flex h-8 w-8 items-center justify-center rounded-md border border-[#22C77A] ${
                currentPage === 1
                  ? "cursor-not-allowed opacity-40"
                  : "hover:bg-[#F1F8F2]"
              }`}
            >

              <ChevronLeft
                size={15}
                strokeWidth={1.8}
              />

            </button>

            {/* 1 */}

            <button
              type="button"
              onClick={() =>
                changePage(1)
              }
              className={`h-8 w-8 rounded-md text-xs ${
                currentPage === 1
                  ? "bg-[#587653] text-white"
                  : "border border-[#22C77A] text-gray-700"
              }`}
            >
              1
            </button>

            {/* 2 */}

            <button
              type="button"
              onClick={() =>
                changePage(2)
              }
              className={`h-8 w-8 rounded-md text-xs ${
                currentPage === 2
                  ? "bg-[#587653] text-white"
                  : "border border-[#22C77A] text-gray-700"
              }`}
            >
              2
            </button>

            {/* 3 */}

            <button
              type="button"
              onClick={() =>
                changePage(3)
              }
              className={`h-8 w-8 rounded-md text-xs ${
                currentPage === 3
                  ? "bg-[#587653] text-white"
                  : "border border-[#22C77A] text-gray-700"
              }`}
            >
              3
            </button>

            {/* DOT */}

            <span className="px-1 text-sm text-gray-500">
              ...
            </span>

            {/* 10 */}

            <button
              type="button"
              onClick={() =>
                changePage(10)
              }
              className={`h-8 w-8 rounded-md text-xs ${
                currentPage === 10
                  ? "bg-[#587653] text-white"
                  : "border border-[#22C77A] text-gray-700"
              }`}
            >
              10
            </button>

            {/* NEXT */}

            <button
              type="button"
              disabled={
                currentPage === totalPages
              }
              onClick={() =>
                changePage(
                  currentPage + 1
                )
              }
              className={`flex h-8 w-8 items-center justify-center rounded-md border border-[#22C77A] ${
                currentPage === totalPages
                  ? "cursor-not-allowed opacity-40"
                  : "hover:bg-[#F1F8F2]"
              }`}
            >

              <ChevronRight
                size={15}
                strokeWidth={1.8}
              />

            </button>

          </div>

        </div>

        {/* =================================================
            MODAL TAMBAH
        ================================================= */}

        {showModal && (
          <UpdateStokModal
            mode="add"
            onClose={() =>
              setShowModal(false)
            }
            onSave={handleAdd}
          />
        )}

        {/* =================================================
            MODAL EDIT
        ================================================= */}

        {editData && (
          <UpdateStokModal
            mode="edit"
            initialData={editData}
            onClose={() =>
              setEditData(null)
            }
            onSave={handleEdit}
          />
        )}

      </main>

    </div>
  );
}