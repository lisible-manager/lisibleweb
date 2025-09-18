import { useState } from "react";
import { auth, googleProvider } from "../firebaseConfig";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/router";
import Layout from "../components/Layout";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/dashboard");
    } catch (err) {
      alert("Erreur : " + err.message);
    }
  }

  async function handleGoogleLogin() {
    try {
      await signInWithPopup(auth, googleProvider);
      router.push("/dashboard");
    } catch (err) {
      alert("Erreur : " + err.message);
    }
  }

  return (
    <Layout>
      <h1>Connexion</h1>
      <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: 10, maxWidth: 400 }}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Se connecter</button>
      </form>
      <button onClick={handleGoogleLogin} style={{ marginTop: 10, background: "#DB4437", color: "#fff" }}>
        Se connecter avec Google
      </button>
      <p>
        Pas encore de compte ? <a href="/register">Inscrivez-vous</a>
      </p>
      <p>
        <a href="#" onClick={() => alert("Récupération de mot de passe via Firebase Console activée")}>
          Mot de passe oublié ?
        </a>
      </p>
    </Layout>
  );
}