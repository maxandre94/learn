import { useEffect, useState } from "react";

type Tache = {
  id: number;
  titre: string;
  complete: boolean;
};

const TachesPage = () => {
  const [taches, setTaches] = useState<Tache[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("token") ?? '';
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/taches", {
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

  return (
    <div>
      <ul>
        {taches.map((tache: Tache) => (
          <li key={tache.id}> {tache.titre} </li>
        ))}
      </ul>
    </div>
  );
};

export default TachesPage;
