import Layout from "../components/Layout";
import PostCard from "../components/PostCard";

export default function Bibliotheque() {
  const books = [
    { id: "3", title: "Les Mots et les Songes", excerpt: "Anthologie littéraire", author: "Jean-Paul" },
    { id: "4", title: "Lettres de Feu", excerpt: "Recueil engagé", author: "Rosa" },
  ];

  return (
    <Layout>
      <h1>Bibliothèque</h1>
      {books.map((b) => (
        <PostCard key={b.id} post={b} />
      ))}
    </Layout>
  );
}