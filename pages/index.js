import Layout from "../components/Layout";
import PostCard from "../components/PostCard";

export default function Home() {
  const posts = [
    { id: "1", title: "La poésie du futur", excerpt: "Un voyage dans l'âme...", author: "Ben Johnson Juste" },
    { id: "2", title: "Le roman du siècle", excerpt: "Découvrez un chef-d'œuvre moderne...", author: "Marie Paul" },
  ];

  return (
    <Layout>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Bienvenue sur Lisible 📚</h1>
      {posts.map((p) => (
        <PostCard key={p.id} post={p} />
      ))}
    </Layout>
  );
}