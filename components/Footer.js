import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#f1f1f1", padding: "20px", marginTop: "40px", textAlign: "center" }}>
      <p>Production : La Belle Littéraire</p>
      <p>📍 36 rue Des Rosiers, Delmas - Ouest, Haïti</p>

      <form action="https://formspree.io/f/mldwvgdw" method="POST" style={{ marginTop: "10px" }}>
        <input type="email" name="email" placeholder="Votre email" required style={{ padding: "8px", borderRadius: 4, border: "1px solid #ccc" }} />
        <button type="submit" style={{ padding: "8px 12px", marginLeft: "5px", background: "#4CAF50", color: "#fff", border: "none", borderRadius: 4 }}>S'abonner</button>
      </form>

      <div style={{ marginTop: "10px" }}>
        <a href="https://www.facebook.com/share/1H6Vtrg6Fi/" target="_blank">Facebook</a> •
        <a href="https://www.instagram.com/labellelitteraire?igsh=cmZsd25rM2Flcm9h" target="_blank"> Instagram</a> •
        <a href="https://www.threads.net/@labellelitteraire" target="_blank"> Threads</a> •
        <a href="https://wa.me/50948321317" target="_blank"> WhatsApp</a>
      </div>
    </footer>
  );
}