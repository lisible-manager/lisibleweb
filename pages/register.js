import { useState } from "react";
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import Layout from "../components/Layout";

export default function Register() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister(e) {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/dashboard");
    } catch (err) {
      alert("Erreur : " + err.message);
    }
  }

  return (
    <Layout>
      <h1>Inscription</h1>
      <form onSubmit={handleRegister} style={{ display: "flex", flexDirection: "column", gap: 10, maxWidth: 400 }}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">S'inscrire</button>
      </form>
      <p>
        Déjà inscrit ? <a href="/login">Connectez-vous</a>
      </p>
    </Layout>
  );
}