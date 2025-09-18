import React from "react";
import { useRouter } from "next/router";

export default function AuthorCard({ author }) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/author/${author.id}`)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "12px",
        margin: "10px 0",
        background: "#fff",
        cursor: "pointer",
        boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
      }}
    >
      <img
        src={author.avatar || "/images/avatar-default.png"}
        alt={author.name}
        width={50}
        height={50}
        style={{ borderRadius: "50%", objectFit: "cover" }}
      />
      <div>
        <h4 style={{ margin: 0, color: "#333" }}>{author.name}</h4>
        <p style={{ margin: 0, fontSize: "0.9rem", color: "#666" }}>
          {author.bio || "Auteur sur Lisible"}
        </p>
      </div>
    </div>
  );
}