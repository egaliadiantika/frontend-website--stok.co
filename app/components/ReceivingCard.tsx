import Link from "next/link";

export default function ReceivingCard() {
  return (
    <div className="receiving-card">

      <div className="receiving-header">

        <h2>Penerimaan Hari Ini</h2>

        <Link
          href="/penerimaan?from=dashboard"
          className="see-all"
        >
          Lihat Semua
          <span>→</span>
        </Link>

      </div>


      {/* TABLE */}
      <div className="table-wrapper">

        <table>

          <thead>
            <tr>
              <th>No</th>
              <th>Nama Barang</th>
              <th>SKU</th>
              <th>Jumlah Diterima</th>
              <th>Waktu Penerimaan</th>
              <th>Lokasi</th>
            </tr>
          </thead>


          <tbody>

            <tr>
              <td>1.</td>
              <td>Laptop Asus</td>
              <td>ELC-001</td>
              <td>10 unit</td>
              <td>20 September 2026, 10.24</td>
              <td>Rak A</td>
            </tr>

          </tbody>

        </table>

      </div>


      {/* INFO */}
      <div className="dashboard-info">

        <div className="info-icon">
          !
        </div>

        <span>
          Data penerimaan barang hari ini langsung tercatat di sistem.
        </span>

      </div>

    </div>
  );
}