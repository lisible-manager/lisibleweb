import { useRouter } from "next/router";
import Layout from "../../components/Layout";

export default function AuthorPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <h1>Profil Auteur : {id}</h1>
      <p>Biographie et textes publiés par cet auteur.</p>
    </Layout>
  );
}