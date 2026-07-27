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

        if (Array.isArray(data)) setTaches(data);
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
    <div className="min-h-screen bg-gray-100">
      <div className="flex items-center justify-center">
        <h1 className="font-bold text-2xl">Mes tâches</h1>
      </div>
      <input
        className="border mx-2 rounded-2xl bg-white px-2"
        type="text"
        value={nouveauTitre}
        onChange={(e) => setNouveauTitre(e.target.value)}
      />
      <button
        className="border mx-2 px-2 rounded-2xl bg-white hover:bg-gray-300 hover:cursor-pointer"
        onClick={() => handleAjouter(nouveauTitre)}
      >
        Ajouter
      </button>
      <ul className="my-2 max-w-2xl mx-auto">
        {taches.map((tache: Tache) => (
          <li
            className="border px-2 bg-white rounded-lg shadow p-4 mb-2"
            key={tache.id}
          >
            {" "}
            {tache.titre}{" "}
            <button
              className="hover:cursor-pointer hover:text-red-500"
              onClick={() => handleSupprimer(tache.id)}
            >
              {" "}
              X{" "}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TachesPage;
