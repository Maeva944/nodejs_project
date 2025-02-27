import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  return (
    <div className="container">
      <header>
        <h1>Bienvenue dans notre Salle de Sport</h1>
        <p>Rejoignez-nous et atteignez vos objectifs de fitness avec nos coachs expérimentés.</p>
        <button onClick={() => router.push('/abonnements')}>Voir les abonnements</button>
        <button onClick={() => router.push('/login')}>Connexion</button>
        <button onClick={() => router.push('/register')}>Inscription</button>
      </header>

      <section className="features">
        <div className="feature">
          <h2>Des Coachs Expérimentés</h2>
          <p>Nos coachs certifiés vous accompagnent à chaque étape.</p>
        </div>
        <div className="feature">
          <h2>Programmes Personnalisés</h2>
          <p>Adaptez votre entraînement selon vos objectifs.</p>
        </div>
        <div className="feature">
          <h2>Accès illimité</h2>
          <p>Profitez de la salle et des équipements 24/7.</p>
        </div>
      </section>

      <footer>
        <p>© 2025 - Salle de Sport | Tous droits réservés.</p>
      </footer>

      <style jsx>{`
        .container {
          text-align: center;
          padding: 20px;
        }
        header {
          background: #222;
          color: white;
          padding: 40px;
          border-radius: 10px;
        }
        button {
          margin-top: 10px;
          padding: 10px 20px;
          border: none;
          background: #ff4d4d;
          color: white;
          font-size: 16px;
          cursor: pointer;
          border-radius: 5px;
        }
        button:hover {
          background: #ff3333;
        }
        .features {
          display: flex;
          justify-content: center;
          margin-top: 30px;
        }
        .feature {
          margin: 10px;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 10px;
          width: 30%;
        }
        footer {
          margin-top: 40px;
          padding: 20px;
          background: #222;
          color: white;
          border-radius: 10px;
        }
      `}</style>
    </div>
  )
}
