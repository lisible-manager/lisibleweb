import { useRouter } from "next/router";
import Layout from "../../components/Layout";

export default function PostPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <h1>Lecture du Texte #{id}</h1>
      <p>Contenu complet de l'œuvre...</p>
    </Layout>
  );
}