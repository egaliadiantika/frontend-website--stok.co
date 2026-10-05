"use client";

import Link from "next/link";
import Sidebar from "../../components/Sidebar";
import ProfilManager from "../../components/ProfilManager";

export default function DetailStokKeluarPage() {
  const dataStokKeluar = [
    {
      tanggal: "03 Juni 2026",
      kode: "SKU-001",
      nama: "Laptop ASUS",
      kategori: "Elektronik",
      jumlah: 3,
      tujuan: "Ruang Administrasi",
    },
    {
      tanggal: "08 Juni 2026",
      kode: "SKU-002",
      nama: "Keyboard",
      kategori: "Aksesoris",
      jumlah: 2,
      tujuan: "Ruang Komputer",
    },
    {
      tanggal: "14 Juni 2026",
      kode: "SKU-003",
      nama: "Mouse Wireless",
      kategori: "Aksesoris",
      jumlah: 2,
      tujuan: "Ruang Komputer",
    },
    {
      tanggal: "21 Juni 2026",
      kode: "SKU-004",
      nama: "Monitor",
      kategori: "Elektronik",
      jumlah: 5,
      tujuan: "Ruang Administrasi",
    },
    {
      tanggal: "27 Juni 2026",
      kode: "SKU-005",
      nama: "Printer",
      kategori: "Elektronik",
      jumlah: 0,
      tujuan: "Ruang Tata Usaha",
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

            <h1>
              Detail Stok Keluar
            </h1>

            <p>
              Rincian pengeluaran barang berdasarkan data stok keluar.
            </p>

          </div>


          <div className="analisis-header-right">
            <ProfilManager />
          </div>

        </header>


        {/* SUMMARY */}
        <div className="detail-summary">

          <div className="detail-summary-card">

            <span>
              Total Barang Keluar
            </span>

            <strong>
              12
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
              5
            </strong>

            <small>
              Transaksi pengeluaran
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


        {/* TABLE */}
        <section className="detail-table-card">

          <div className="detail-table-header">

            <div>

              <h2>
                Rincian Stok Keluar
              </h2>

              <p>
                Daftar barang yang telah dikeluarkan dari gudang.
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
                    Tujuan
                  </th>

                </tr>

              </thead>


              <tbody>

                {dataStokKeluar.map(
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
                        {item.tujuan}
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