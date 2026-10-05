"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
  const router = useRouter();

  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    router.push("/dashboard");
  };

  const handleForgotPassword = () => {
    if (!email.trim()) {
      return;
    }

    alert("Link reset password akan dikirim ke email kamu.");
    setShowForgotPassword(false);
    setEmail("");
  };

  return (
    <div className="login-card">

      {/* Logo */}
      <div className="login-logo">
        <img
          src="/stock-logo.png"
          alt="stock.co"
          className="stock-logo"
        />
      </div>

      {/* Subtitle */}
      <p className="login-subtitle">
        Inventory Management System
      </p>

      {/* Username */}
      <div className="form-group">
        <label htmlFor="username">
          Email / Username
        </label>

        <div className="input-wrapper">
          <div className="input-icon">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>

          <input
            id="username"
            type="text"
            placeholder="Masukkan email atau username"
          />
        </div>
      </div>

      {/* Password */}
      <div className="form-group">
        <label htmlFor="password">
          Password
        </label>

        <div className="input-wrapper">
          <div className="input-icon">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect
                x="3"
                y="11"
                width="18"
                height="10"
                rx="2"
              />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>

          <input
            id="password"
            type="password"
            placeholder="Masukkan password"
          />
        </div>
      </div>

      {/* Lupa Password */}
      <div className="forgot-wrapper">
        <button
          type="button"
          className="forgot-password"
          onClick={() => setShowForgotPassword(true)}
        >
          Lupa Password?
        </button>
      </div>

      {/* Login */}
      <button
        type="button"
        className="login-button"
        onClick={handleLogin}
      >
        Login
      </button>


      {/* =================================================
          POPUP LUPA PASSWORD
      ================================================= */}

      {showForgotPassword && (
        <div
          className="forgot-password-overlay"
          onClick={() => setShowForgotPassword(false)}
        >
          <div
            className="forgot-password-modal"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Tombol Close */}
            <button
              type="button"
              className="forgot-password-close"
              onClick={() => setShowForgotPassword(false)}
            >
              ×
            </button>

            {/* Judul */}
            <h2>Lupa Password?</h2>

            {/* Deskripsi */}
            <p>
              Masukkan email yang terdaftar untuk
              mendapatkan link reset password.
            </p>

            {/* Input Email */}
            <div className="forgot-password-form-group">
              <label htmlFor="forgot-email">
                Email
              </label>

              <input
                id="forgot-email"
                type="email"
                placeholder="Masukkan email kamu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Tombol */}
            <button
              type="button"
              className="forgot-password-submit"
              onClick={handleForgotPassword}
            >
              Kirim Link Reset
            </button>

            {/* Kembali */}
            <button
              type="button"
              className="forgot-password-back"
              onClick={() => setShowForgotPassword(false)}
            >
              Kembali ke Login
            </button>

          </div>
        </div>
      )}

    </div>
  );
}