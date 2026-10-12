
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  AlertCircle,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Layers3,
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
  { id: 1, sku: "SKU-001", nama: "Laptop", kategori: "Elektronik", stok: 5, lokasi: "A1" },
  { id: 2, sku: "SKU-002", nama: "Mouse", kategori: "Aksesoris", stok: 12, lokasi: "A2" },
  { id: 3, sku: "SKU-003", nama: "Keyboard", kategori: "Aksesoris", stok: 0, lokasi: "B1" },
  { id: 4, sku: "SKU-004", nama: "Monitor", kategori: "Elektronik", stok: 20, lokasi: "B2" },
  { id: 5, sku: "SKU-005", nama: "Kursi Kantor", kategori: "Furniture", stok: 7, lokasi: "A1" },
];

export default function SkuDatabasePage() {
  const [data, setData] = useState<SKUData[]>(initialData);
  const [search, setSearch] = useState("");
  const [kategori, setKategori] = useState("Semua Kategori");
  const [lokasi, setLokasi] = useState("Semua Lokasi");
  const [status, setStatus] = useState("Semua Status");
  const [currentPage, setCurrentPage] = useState(1);
  const [editData, setEditData] = useState<SKUData | null>(null);

  const itemsPerPage = 5;

  const getStatus = (stok: number) => {
    if (stok === 0) return "Habis";
    if (stok <= 5) return "Menipis";
    return "Tersedia";
  };

  const filteredData = useMemo(() => {
    return data.filter((item) => {
      const keyword = search.toLowerCase();

      const cocokSearch =
        item.sku.toLowerCase().includes(keyword) ||
        item.nama.toLowerCase().includes(keyword) ||
        item.kategori.toLowerCase().includes(keyword);

      const cocokKategori =
        kategori === "Semua Kategori" || item.kategori === kategori;

      const cocokLokasi =
        lokasi === "Semua Lokasi" || item.lokasi === lokasi;

      const cocokStatus =
        status === "Semua Status" || getStatus(item.stok) === status;

      return cocokSearch && cocokKategori && cocokLokasi && cocokStatus;
    });
  }, [data, search, kategori, lokasi, status]);

  const totalPages = Math.max(1, Math.ceil(filteredData.length / itemsPerPage));
  const safePage = Math.min(currentPage, totalPages);
  const startIndex = (safePage - 1) * itemsPerPage;
  const currentData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  const totalSKU = data.length;
  const skuAktif = data.filter((item) => item.stok > 0).length;
  const stokHabis = data.filter((item) => item.stok === 0).length;
  const totalKategori = new Set(data.map((item) => item.kategori)).size;

  const kategoriList = [...new Set(data.map((item) => item.kategori))];
  const lokasiList = [...new Set(data.map((item) => item.lokasi))];

  const handleSave = (updatedItem: SKUData) => {
    setData((previous) =>
      previous.map((item) => item.id === updatedItem.id ? updatedItem : item)
    );
    setEditData(null);
  };

  const handleDelete = (id: number) => {
    if (!window.confirm("Apakah kamu yakin ingin menghapus SKU ini?")) return;

    setData((previous) => previous.filter((item) => item.id !== id));
    setCurrentPage(1);
  };

  const resetFilter = () => {
    setSearch("");
    setKategori("Semua Kategori");
    setLokasi("Semua Lokasi");
    setStatus("Semua Status");
    setCurrentPage(1);
  };

  return (
    <div className="sku-page">
      <Sidebar />

      <main className="sku-main">
        <header className="sku-topbar">
          <div>
            <p>Dashboard / SKU Database</p>
            <h1>SKU Database</h1>
          </div>
          <ProfilManager />
        </header>

        <section className="sku-content">
          <div className="sku-page-heading">
            <div>
              <h2>Database SKU</h2>
              <p>Kelola data barang yang digunakan.</p>
            </div>

            <Link href="/sku-database/tambah" className="sku-add-button">
              <Plus size={16} />
              Tambah SKU
            </Link>
          </div>

          <div className="sku-summary-grid">
            <div className="sku-summary-card">
              <div>
                <p>Total SKU</p>
                <h3>{totalSKU}</h3>
                <span>Seluruh produk</span>
              </div>
              <div className="sku-summary-icon"><Layers3 size={21} /></div>
            </div>

            <div className="sku-summary-card">
              <div>
                <p>SKU Aktif</p>
                <h3>{skuAktif}</h3>
                <span>Masih memiliki stok</span>
              </div>
              <div className="sku-summary-icon"><CheckCircle2 size={21} /></div>
            </div>

            <div className="sku-summary-card">
              <div>
                <p>Stok Habis</p>
                <h3>{stokHabis}</h3>
                <span>Perlu segera diisi</span>
              </div>
              <div className="sku-summary-icon sku-summary-danger"><AlertCircle size={21} /></div>
            </div>

            <div className="sku-summary-card">
              <div>
                <p>Total Kategori</p>
                <h3>{totalKategori}</h3>
                <span>Kategori barang</span>
              </div>
              <div className="sku-summary-icon"><Layers3 size={21} /></div>
            </div>
          </div>

          <div className="sku-table-card">
            <div className="sku-toolbar">
              <div className="sku-search">
                <Search size={16} />
                <input
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setCurrentPage(1);
                  }}
                  placeholder="Cari barang atau SKU..."
                />
              </div>

              <div className="sku-filters">
                <select
                  value={kategori}
                  onChange={(e) => {
                    setKategori(e.target.value);
                    setCurrentPage(1);
                  }}
                >
                  <option>Semua Kategori</option>
                  {kategoriList.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>

                <select
                  value={lokasi}
                  onChange={(e) => {
                    setLokasi(e.target.value);
                    setCurrentPage(1);
                  }}
                >
                  <option>Semua Lokasi</option>
                  {lokasiList.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>

                <select
                  value={status}
                  onChange={(e) => {
                    setStatus(e.target.value);
                    setCurrentPage(1);
                  }}
                >
                  <option>Semua Status</option>
                  <option>Tersedia</option>
                  <option>Menipis</option>
                  <option>Habis</option>
                </select>

                <button className="sku-reset-button" onClick={resetFilter} type="button">
                  Reset
                </button>
              </div>
            </div>

            <div className="sku-table-scroll">
              <table className="sku-table">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>SKU</th>
                    <th>Nama Barang</th>
                    <th>Kategori</th>
                    <th>Stok</th>
                    <th>Lokasi</th>
                    <th>Status</th>
                    <th>Aksi</th>
                  </tr>
                </thead>

                <tbody>
                  {currentData.length > 0 ? (
                    currentData.map((item, index) => {
                      const itemStatus = getStatus(item.stok);

                      return (
                        <tr key={item.id}>
                          <td>{startIndex + index + 1}</td>
                          <td className="sku-code">{item.sku}</td>
                          <td className="sku-product-name">{item.nama}</td>
                          <td>{item.kategori}</td>
                          <td>{item.stok}</td>
                          <td>{item.lokasi}</td>
                          <td>
                            <span className={`sku-status sku-status-${itemStatus.toLowerCase()}`}>
                              {itemStatus}
                            </span>
                          </td>
                          <td>
                            <div className="sku-row-actions">
                              <button
                                type="button"
                                title="Edit SKU"
                                onClick={() => setEditData(item)}
                              >
                                <Pencil size={15} />
                              </button>
                              <button
                                type="button"
                                title="Hapus SKU"
                                className="sku-delete-action"
                                onClick={() => handleDelete(item.id)}
                              >
                                <Trash2 size={15} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan={8} className="sku-empty">
                        Data SKU tidak ditemukan.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div className="sku-pagination">
              <p>
                Menampilkan <strong>{currentData.length}</strong> dari{" "}
                <strong>{filteredData.length}</strong> SKU
              </p>

              <div className="sku-pagination-buttons">
                <button
                  type="button"
                  aria-label="Halaman sebelumnya"
                  disabled={safePage === 1}
                  onClick={() => setCurrentPage((page) => Math.max(page - 1, 1))}
                >
                  <ChevronLeft size={17} />
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    type="button"
                    key={page}
                    className={safePage === page ? "active" : ""}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </button>
                ))}

                <button
                  type="button"
                  aria-label="Halaman berikutnya"
                  disabled={safePage === totalPages}
                  onClick={() => setCurrentPage((page) => Math.min(page + 1, totalPages))}
                >
                  <ChevronRight size={17} />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {editData && (
        <UpdateStokModal
          mode="edit"
          initialData={editData}
          onClose={() => setEditData(null)}
          onSave={handleSave}
        />
      )}
    </div>
  );
}