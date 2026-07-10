import { useEffect, useState } from "react";
const VITE_API_URL = import.meta.env.VITE_API_URL;

type Tache = {
  id: number;
  titre: string;
  complete: boolean;
};

const TachesPage = () => {
  const [taches, setTaches] = useState<Tache[]>([]);
  const [nouveauTitre, setNouveauTitre] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token") ?? "";
    const fetchData = async () => {
      try {
        const res = await fetch(`${VITE_API_URL}/taches`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();

        if (data) setTaches(data);
      } catch (err) {
        console.error("Une erreur est survenue :", err);
      }
    };
    fetchData();
  }, []);

  const handleAjouter = (titre: string) => {
    if (titre !== "") {
      const token = localStorage.getItem("token");
      const fetchData = async () => {
        try {
          const res = await fetch(`${VITE_API_URL}/taches`, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ titre: nouveauTitre }),
          });
          const nouvelleTache = await res.json();

          if (nouvelleTache) {
            setTaches([...taches, nouvelleTache]);
            setNouveauTitre("");
          }
        } catch (err) {
          console.error("Une erreur est survenue :", err);
        }
      };
      fetchData();
    }
  };

  const handleSupprimer = (id: number) => {
    if (id) {
      const token = localStorage.getItem("token");
      const fetchData = async () => {
        try {
          await fetch(`${VITE_API_URL}/taches/${id}`, {
            method: "DELETE",
            headers: { Authorization: `Bearer ${token}` },
          });

          setTaches(taches.filter((t) => t.id !== id));
        } catch (err) {
          console.error("Une erreur est survenue :", err);
        }
      };
      fetchData();
    }
  };

  return (
    <div className="flex justify-center bg-gray-500">
      <input
        type="text"
        value={nouveauTitre}
        onChange={(e) => setNouveauTitre(e.target.value)}
      />
      <button onClick={() => handleAjouter(nouveauTitre)}>Ajouter</button>
      <ul>
        {taches.map((tache: Tache) => (
          <li key={tache.id}>
            {" "}
            {tache.titre}
            {" "}
            <button onClick={() => handleSupprimer(tache.id)}> X </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TachesPage;
