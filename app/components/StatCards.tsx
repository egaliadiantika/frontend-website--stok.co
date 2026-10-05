export default function StatCards() {
  return (
    <div className="stat-cards">

      {/* Total SKU */}
      <div className="stat-card cursor-pointer transition-all duration-150 hover:shadow-md active:scale-[0.99]">
        <div className="stat-icon sku-icon">
          <svg
            width="35"
            height="35"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="4" y="5" width="16" height="14" rx="2" />
            <line x1="7" y1="9" x2="17" y2="9" />
            <line x1="7" y1="14" x2="13" y2="14" />
          </svg>
        </div>

        <strong>–</strong>
        <span>Total SKU</span>
      </div>

      {/* Total Stok */}
      <div className="stat-card cursor-pointer transition-all duration-150 hover:shadow-md active:scale-[0.99]">
        <div className="stat-icon stock-icon">
          <svg
            width="35"
            height="35"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <ellipse cx="12" cy="6" rx="7" ry="3" />
            <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
            <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
          </svg>
        </div>

        <strong>–</strong>
        <span>Total Stok</span>
      </div>

      {/* Penerima Hari Ini */}
      <div className="stat-card cursor-pointer transition-all duration-150 hover:shadow-md active:scale-[0.99]">
        <div className="stat-icon warning-icon">
          <svg
            width="35"
            height="35"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 3L2 21h20L12 3z" />
            <rect
              x="11"
              y="9"
              width="2"
              height="6"
              fill="white"
            />
            <rect
              x="11"
              y="17"
              width="2"
              height="2"
              fill="white"
            />
          </svg>
        </div>

        <strong>–</strong>
        <span>Menipis</span>
      </div>

      {/* Penerima Bulan Ini */}
      <div className="stat-card cursor-pointer transition-all duration-150 hover:shadow-md active:scale-[0.99]">
        <div className="stat-icon calendar-icon">
          <svg
            width="35"
            height="35"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect
              x="4"
              y="5"
              width="16"
              height="15"
              rx="2"
            />
            <line x1="8" y1="3" x2="8" y2="7" />
            <line x1="16" y1="3" x2="16" y2="7" />
            <line x1="4" y1="10" x2="20" y2="10" />
            <path d="M8 14h8" />
            <path d="M8 17h5" />
          </svg>
        </div>

        <strong>–</strong>
        <span>Habis</span>
      </div>

    </div>
  );
}