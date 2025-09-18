import { useRouter } from "next/router";
export default function AuthorPage() {
  const router = useRouter();
  return <h1>Auteur: {router.query.id}</h1>;
}