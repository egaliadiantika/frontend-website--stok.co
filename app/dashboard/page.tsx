import Sidebar from "../components/Sidebar";
import StatCards from "../components/StatCards";
import ReceivingCard from "../components/ReceivingCard";
import ProfilManager from "../components/ProfilManager";

export default function DashboardPage() {
  return (
    <main className="dashboard-page">

      <Sidebar />

      {/* MAIN CONTENT */}
      <section className="dashboard-content">

        {/* HEADER */}
        <div className="dashboard-topbar">

          <div className="dashboard-header">
            <h1>Selamat Datang, Manager!</h1>

            <p>
              Berikut ringkasan kondisi inventori hari ini.
            </p>
          </div>

          {/* PROFILE */}
          <ProfilManager />

        </div>

        {/* STAT CARDS */}
        <StatCards />

        {/* PENERIMAAN HARI INI */}
        <ReceivingCard />

      </section>

    </main>
  );
}