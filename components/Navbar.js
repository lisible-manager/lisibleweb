import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "15px 30px", background: "#fff", boxShadow: "0 2px 8px rgba(0,0,0,0.1)", position: "sticky", top: 0, zIndex: 1000 }}>
      <div style={{ display: "flex", gap: "20px" }}>
        <Link href="/bibliotheque">Bibliothèque</Link>
        <Link href="/login">Connexion</Link>
      </div>
      <div style={{ position: "relative" }} onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
        <button style={{ background: "#4CAF50", color: "#fff", border: "none", padding: "8px 12px", borderRadius: 5, cursor: "pointer" }}>
          Menu 🟰
        </button>
        {isDropdownOpen && (
          <div style={{ position: "absolute", left: 0, background: "#fff", boxShadow: "0 4px 12px rgba(0,0,0,0.15)", borderRadius: 6, padding: 10, display: "flex", flexDirection: "column", gap: 8 }}>
            <Link href="/homepage">Accueil</Link>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/qui-sommes-nous">À propos</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/terms">Termes & Conditions</Link>
          </div>
        )}
      </div>
    </nav>
  );
}