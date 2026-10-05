"use client";

import Link from "next/link";
import Sidebar from "../components/Sidebar";
import ProfilManager from "../components/ProfilManager";

export default function AnalisisStokPage() {
  const dataStokMasuk = [
    { bulan: "Jan", jumlah: 7 },
    { bulan: "Feb", jumlah: 11 },
    { bulan: "Mar", jumlah: 9 },
    { bulan: "Apr", jumlah: 9 },
    { bulan: "Mei", jumlah: 4 },
    { bulan: "Jun", jumlah: 18 },
  ];

  const dataStokKeluar = [
    { bulan: "Jan", jumlah: 5 },
    { bulan: "Feb", jumlah: 8 },
    { bulan: "Mar", jumlah: 6 },
    { bulan: "Apr", jumlah: 10 },
    { bulan: "Mei", jumlah: 3 },
    { bulan: "Jun", jumlah: 12 },
  ];

  return (
    <main className="analisis-page">
      <Sidebar />

      <section className="analisis-content">

        {/* HEADER */}
        <header className="analisis-header">
          <div className="analisis-header-left">
            <h1>Analisis Stok</h1>
            <p>Lihat tren penerimaan barang di gudang.</p>
          </div>

          <div className="analisis-header-right">
            <ProfilManager />
          </div>
        </header>

        {/* GRAFIK STOK MASUK */}
        <StockChart
          title="Stok Masuk"
          data={dataStokMasuk}
          type="masuk"
          detailLink="/analisis-stok/detail-stok-masuk"
          detailText="Detail Stok Masuk"
        />

        {/* GRAFIK STOK KELUAR */}
        <StockChart
          title="Stok Keluar"
          data={dataStokKeluar}
          type="keluar"
          detailLink="/analisis-stok/detail-stok-keluar"
          detailText="Detail Stok Keluar"
        />

      </section>
    </main>
  );
}


/* =========================================================
   COMPONENT GRAFIK
========================================================= */

function StockChart({
  title,
  data,
  type,
  detailLink,
  detailText,
}: {
  title: string;
  data: {
    bulan: string;
    jumlah: number;
  }[];
  type: "masuk" | "keluar";
  detailLink: string;
  detailText: string;
}) {
  return (
    <section className={`stock-chart-card ${type}`}>

      {/* HEADER GRAFIK */}
      <div className="stock-chart-header">

        <div className="stock-chart-title">
          <h2>{title}</h2>

          <span className="chart-period">
            6 Bulan Terakhir
          </span>
        </div>

        {/* DETAIL */}
        <Link
          href={detailLink}
          className="chart-detail-link"
        >
          {detailText}
          <span className="chart-detail-arrow">→</span>
        </Link>

      </div>


      {/* CHART */}
      <div className="chart">

        {/* Y AXIS */}
        <div className="chart-y-axis">
          <span>20</span>
          <span>15</span>
          <span>10</span>
          <span>5</span>
          <span>0</span>
        </div>

        {/* AREA CHART */}
        <div className="chart-area">

          {/* GRID */}
          <div className="chart-grid">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* BARS */}
          <div className="bars">
            {data.map((item) => (
              <div
                className={`bar ${type}`}
                key={item.bulan}
                style={{
                  height: `${(item.jumlah / 20) * 100}%`,
                }}
              >
                <span className="bar-value">
                  {item.jumlah}
                </span>

                <span className="bar-label">
                  {item.bulan}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}