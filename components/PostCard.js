import React from "react";
import { useRouter } from "next/router";

export default function PostCard({ post }) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/post/${post.id}`)}
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "16px",
        margin: "10px 0",
        background: "#fff",
        cursor: "pointer",
        boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
        transition: "transform 0.2s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <h3 style={{ margin: "0 0 8px", fontSize: "1.3rem", color: "#333" }}>
        {post.title}
      </h3>
      <p style={{ margin: 0, color: "#555" }}>{post.excerpt}</p>
      <small style={{ color: "#888" }}>Par {post.author}</small>
    </div>
  );
}