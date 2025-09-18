import Layout from "../components/Layout";

export default function Contact() {
  return (
    <Layout>
      <h1>Contact</h1>
      <p>Écrivez-nous à : <strong>contact@labellelitteraire.com</strong></p>
      <form action="https://formspree.io/f/mldwvgdw" method="POST" style={{ display: "flex", flexDirection: "column", gap: 10, maxWidth: 400 }}>
        <input type="text" name="name" placeholder="Votre nom" required />
        <input type="email" name="email" placeholder="Votre email" required />
        <textarea name="message" placeholder="Votre message" rows={5} required></textarea>
        <button type="submit">Envoyer</button>
      </form>
    </Layout>
  );
}