"use client";

import Link from "next/link";
import Sidebar from "../../components/Sidebar";
import ProfilManager from "../../components/ProfilManager";

export default function DetailStokMasukPage() {
  const dataStokMasuk = [
    {
      tanggal: "02 Juni 2026",
      kode: "SKU-001",
      nama: "Laptop ASUS",
      kategori: "Elektronik",
      jumlah: 5,
      pemasok: "PT Teknologi Jaya",
    },
    {
      tanggal: "07 Juni 2026",
      kode: "SKU-002",
      nama: "Keyboard",
      kategori: "Aksesoris",
      jumlah: 4,
      pemasok: "CV Digital Mandiri",
    },
    {
      tanggal: "12 Juni 2026",
      kode: "SKU-003",
      nama: "Mouse Wireless",
      kategori: "Aksesoris",
      jumlah: 3,
      pemasok: "PT Teknologi Jaya",
    },
    {
      tanggal: "18 Juni 2026",
      kode: "SKU-004",
      nama: "Monitor",
      kategori: "Elektronik",
      jumlah: 6,
      pemasok: "CV Sumber Komputer",
    },
  ];

  return (
    <main className="analisis-page">

      <Sidebar />

      <section className="analisis-content">

        {/* HEADER */}
        <header className="analisis-header">

          <div className="analisis-header-left">

            <Link
              href="/analisis-stok"
              className="detail-back-link flex items-center gap-1"
            >
              <span className="text-[30px] leading-none">
                ←
              </span>

                <span className="text-[18px]">
                      Kembali ke Analisis Stok
                </span>
            </Link>

            <h1>Detail Stok Masuk</h1>

            <p>
              Rincian penerimaan barang berdasarkan data stok masuk.
            </p>

          </div>


          <div className="analisis-header-right">
            <ProfilManager />
          </div>

        </header>


        {/* RINGKASAN */}
        <div className="detail-summary">

          <div className="detail-summary-card">

            <span>
              Total Barang Masuk
            </span>

            <strong>
              18
            </strong>

            <small>
              Juni 2026
            </small>

          </div>


          <div className="detail-summary-card">

            <span>
              Jumlah Transaksi
            </span>

            <strong>
              4
            </strong>

            <small>
              Transaksi penerimaan
            </small>

          </div>


          <div className="detail-summary-card">

            <span>
              Periode
            </span>

            <strong>
              6 Bulan
            </strong>

            <small>
              Januari - Juni 2026
            </small>

          </div>

        </div>


        {/* TABEL */}
        <section className="detail-table-card">

          <div className="detail-table-header">

            <div>

              <h2>
                Rincian Stok Masuk
              </h2>

              <p>
                Daftar barang yang diterima di gudang.
              </p>

            </div>


            <span className="detail-table-period">
              Juni 2026
            </span>

          </div>


          <div className="detail-table-wrapper">

            <table className="detail-table">

              <thead>

                <tr>

                  <th>
                    Tanggal
                  </th>

                  <th>
                    Kode SKU
                  </th>

                  <th>
                    Nama Barang
                  </th>

                  <th>
                    Kategori
                  </th>

                  <th>
                    Jumlah
                  </th>

                  <th>
                    Pemasok
                  </th>

                </tr>

              </thead>


              <tbody>

                {dataStokMasuk.map(
                  (item, index) => (

                    <tr key={index}>

                      <td>
                        {item.tanggal}
                      </td>

                      <td>
                        {item.kode}
                      </td>

                      <td>
                        {item.nama}
                      </td>

                      <td>
                        {item.kategori}
                      </td>

                      <td>
                        {item.jumlah}
                      </td>

                      <td>
                        {item.pemasok}
                      </td>

                    </tr>

                  )
                )}

              </tbody>

            </table>

          </div>

        </section>

      </section>

    </main>
  );
}