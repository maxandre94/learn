import { useState } from "react";
const VITE_API_URL = import.meta.env.VITE_API_URL;

const LoginPage = ({ onConnexion }: { onConnexion: (token: string) => void }) => {

  const [email, setEmail] = useState<string>("");
  const [motDePasse, setMotDePasse] = useState<string>("");

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    const res = await fetch(`${VITE_API_URL}/auth/connexion`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, motDePasse })
    });
    const data = await res.json()
    localStorage.setItem('token', data.access_token)
    onConnexion(data.access_token)
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <input
          type="password"
          value={motDePasse}
          onChange={(e) => setMotDePasse(e.target.value)}
          placeholder="mot de passe"
        />
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};

export default LoginPage;
