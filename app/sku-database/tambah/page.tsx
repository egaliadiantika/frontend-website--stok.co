
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Laptop,
  Package,
  Armchair,
  Warehouse,
  Boxes,
} from "lucide-react";

import Sidebar from "../../components/Sidebar";
import ProfilManager from "../../components/ProfilManager";

const kategoriBarang = [
  { nama: "Elektronik", Icon: Laptop },
  { nama: "Aksesoris", Icon: Package },
  { nama: "Furniture", Icon: Armchair },
  { nama: "Peralatan Gudang", Icon: Warehouse },
  { nama: "Lainnya", Icon: Boxes },
];

export default function TambahSKUPage() {
  const [nama, setNama] = useState("");
  const [kategori, setKategori] = useState("");
  const [stok, setStok] = useState("");
  const [lokasi, setLokasi] = useState("");
  const [deskripsi, setDeskripsi] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!nama.trim() || !kategori || stok === "" || !lokasi.trim()) {
      alert("Mohon lengkapi semua data wajib.");
      return;
    }

    if (!Number.isInteger(Number(stok)) || Number(stok) < 0) {
      alert("Jumlah stok harus berupa bilangan bulat minimal 0.");
      return;
    }

    // Data belum disimpan permanen karena belum dihubungkan
    // dengan state bersama atau backend.
    alert("Form berhasil divalidasi. Penyimpanan SKU perlu dihubungkan ke tabel utama.");

    // Setelah penyimpanan dihubungkan, navigasi dapat dilakukan di sini.
  }

  return (
    <div className="sku-page">
      <Sidebar />

      <main className="sku-main">
        <header className="sku-topbar">
          <div>
            <p>Dashboard / SKU Database / Tambah SKU</p>
            <h1>Tambah SKU</h1>
          </div>
          <ProfilManager />
        </header>

        <section className="sku-content">
          <div className="sku-page-heading">
            <div>
              <h2>Tambah SKU</h2>
              <p>Tambahkan data barang baru ke sistem.</p>
            </div>
          </div>

          <div className="sku-form-layout">
            <form className="sku-form-card" onSubmit={handleSubmit}>
              <div className="sku-form-group">
                <label htmlFor="sku-nama">Nama Barang</label>
                <input
                  id="sku-nama"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  placeholder="Masukkan nama barang"
                  required
                />
              </div>

              <div className="sku-form-group">
                <label htmlFor="sku-kategori">Kategori</label>
                <select
                  id="sku-kategori"
                  value={kategori}
                  onChange={(e) => setKategori(e.target.value)}
                  required
                >
                  <option value="">Pilih kategori</option>
                  {kategoriBarang.map((item) => (
                    <option key={item.nama} value={item.nama}>
                      {item.nama}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sku-form-group">
                <label htmlFor="sku-stok">Jumlah Stok</label>
                <input
                  id="sku-stok"
                  type="number"
                  min="0"
                  step="1"
                  value={stok}
                  onChange={(e) => setStok(e.target.value)}
                  placeholder="Masukkan jumlah stok"
                  required
                />
              </div>

              <div className="sku-form-group">
                <label htmlFor="sku-lokasi">Rak / Lokasi</label>
                <input
                  id="sku-lokasi"
                  value={lokasi}
                  onChange={(e) => setLokasi(e.target.value)}
                  placeholder="Contoh: A1"
                  required
                />
              </div>

              <div className="sku-form-group">
                <label htmlFor="sku-deskripsi">Deskripsi (Opsional)</label>
                <textarea
                  id="sku-deskripsi"
                  rows={3}
                  value={deskripsi}
                  onChange={(e) => setDeskripsi(e.target.value)}
                  placeholder="Tambahkan deskripsi barang..."
                />
              </div>

              <div className="sku-form-actions">
                <Link href="/sku-database" className="sku-cancel-button">
                  Batal
                </Link>
                <button type="submit" className="sku-save-button">
                  Simpan
                </button>
              </div>
            </form>

            <aside className="sku-category-card">
              <h3>Kategori Barang</h3>

              {kategoriBarang.map(({ nama: namaKategori, Icon }) => (
                <button
                  type="button"
                  key={namaKategori}
                  onClick={() => setKategori(namaKategori)}
                  className={`sku-category-item ${
                    kategori === namaKategori ? "selected" : ""
                  }`}
                >
                  <span className="sku-category-icon">
                    <Icon size={17} />
                  </span>
                  <span>{namaKategori}</span>
                </button>
              ))}
            </aside>
          </div>
        </section>
      </main>
    </div>
  );
}