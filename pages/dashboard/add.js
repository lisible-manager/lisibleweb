import Layout from "../../components/Layout";

export default function AddText() {
  return (
    <Layout>
      <h1>Ajouter un Texte</h1>
      <form style={{ display: "flex", flexDirection: "column", gap: 10, maxWidth: 500 }}>
        <input type="text" placeholder="Titre" required />
        <textarea placeholder="Votre texte" rows={8} required></textarea>
        <button type="submit">Publier</button>
      </form>
    </Layout>
  );
}