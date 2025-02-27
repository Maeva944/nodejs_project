import { useState } from "react";
import { useRouter } from "next/router";

export default function Register() {
  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    poids: "",
    taille: "",
    email: "",
    date_naissance: "",
    password: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      router.push("/login"); // Redirection après inscription
    } else {
      alert("Erreur lors de l'inscription. Vérifiez vos informations.");
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={handleRegister}>
        <h1>Créer un compte</h1>
        <input type="text" name="nom" placeholder="Nom" value={form.nom} onChange={handleChange} required />
        <input type="text" name="prenom" placeholder="Prénom" value={form.prenom} onChange={handleChange} required />
        <input type="number" name="poids" placeholder="Poids (kg)" value={form.poids} onChange={handleChange} required />
        <input type="number" name="taille" placeholder="Taille (cm)" value={form.taille} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <input type="date" name="date_naissance" value={form.date_naissance} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Mot de passe" value={form.password} onChange={handleChange} required />
        <button type="submit">S'inscrire</button>
      </form>

      <style jsx>{`
        .register-container {
          max-width: 400px;
          margin: auto;
          padding: 20px;
          text-align: center;
        }
        input {
          display: block;
          width: 100%;
          padding: 10px;
          margin: 10px 0;
          border: 1px solid #ddd;
          border-radius: 5px;
        }
        button {
          background: #ff4d4d;
          color: white;
          padding: 10px;
          border: none;
          cursor: pointer;
          border-radius: 5px;
        }
        button:hover {
          background: #ff3333;
        }
      `}</style>
    </div>
  );
}
