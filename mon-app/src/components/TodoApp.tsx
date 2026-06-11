import { useState } from "react";

interface Todo {
  id: number;
  texte: string;
  complete: boolean;
}

const TodoApp = () => {
  const [taches, setTaches] = useState<Todo[]>([
    { id: 1, texte: "acheter attiéké", complete: false },
    { id: 2, texte: "laver linge", complete: true },
  ]);

  const labelFiltres = ["Toutes", "Actives", "Complétées"];
  const [texte, setTexte] = useState<string>("");
  const [filtres, setFiltres] = useState<string>("Toutes");
  const tachesFiltrees = taches.filter((tache) => {
    if (filtres === "Actives") return !tache.complete;
    if (filtres === "Complétées") return tache.complete;
    return true;
  });

  const tacheAdd = (texte: string) => {
    if (texte !== "") {
      const tache: Todo = { id: Date.now(), texte: texte, complete: false };
      setTaches([...taches, tache]);
      setTexte("");
    }
  };

  const toggleComplete = (id: number) => {
    const tab: Todo[] = taches.map((tache: Todo) => {
      if (tache.id === id) return { ...tache, complete: !tache.complete };
      return tache;
    });

    setTaches(tab);
  };

  const supprimerTache = (id: number) => {
    const tab = taches.filter((tache) => tache.id !== id);
    setTaches(tab);
  };

  const filtreTache = (label: string) => {
    setFiltres(label);
  };

  return (
    <div className="p-5">
      <div>
        <input
          type="text"
          className="bg-gray-400 rounded-4xl px-2"
          value={texte}
          onChange={(e) => setTexte(e.target.value)}
        />
        <button
          className="bg-blue-500 rounded-4xl px-2 mx-2"
          onClick={() => tacheAdd(texte)}
        >
          Ajouter
        </button>
      </div>

      <div>
        {labelFiltres.map((labelFiltre: string, i: number) => (
          <button
            className="border rounded-4xl px-2 m-2 hover:cursor-pointer hover:text-white hover:bg-gray-400"
            onClick={() => filtreTache(labelFiltre)}
            key={i}
          >
            {labelFiltre}
          </button>
        ))}
      </div>

      <div>
        <ul>
          {tachesFiltrees.map((tachesFiltree: Todo) => (
            <div className="flex gap-2" key={tachesFiltree.id}>
              <input
                className="hover:cursor-pointer"
                type="checkbox"
                name=""
                id=""
                checked={tachesFiltree.complete}
                onChange={() => toggleComplete(tachesFiltree.id)}
              />
              <li
                className={
                  tachesFiltree.complete ? "line-through text-gray-400" : ""
                }
              >
                {tachesFiltree.texte}
              </li>
              <button
                className="text-red-500 hover:cursor-pointer"
                onClick={() => supprimerTache(tachesFiltree.id)}
              >
                x
              </button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoApp;
