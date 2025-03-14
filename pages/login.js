import { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem("token", data.token);
      router.push("/"); 
    } else {
      alert("Identifiants incorrects. Essayez à nouveau.");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <h1>Connexion</h1>
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Mot de passe" value={form.password} onChange={handleChange} required />
        <button type="submit">Se connecter</button>
      </form>

      <style jsx>{`
        .login-container {
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
