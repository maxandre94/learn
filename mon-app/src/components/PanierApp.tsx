import { useState } from "react";

interface Produit {
  id: number;
  nom: string;
  prix: number;
}

interface ArticlePanier {
  produit: Produit;
  quantite: number;
}

const Panier = () => {
  const [produits, setProduit] = useState<Produit[]>([
    { id: 1, nom: "banane", prix: 1000 },
    { id: 2, nom: "crême", prix: 5000 },
    { id: 3, nom: "ciment", prix: 2000 },
    { id: 4, nom: "tapis", prix: 8500 },
    { id: 5, nom: "bissap", prix: 500 },
  ]);
  const [panier, setPanier] = useState<ArticlePanier[]>([]);
  const [texte, setTexte] = useState<string>('');

  const total = panier.reduce((acc, p) => acc + p.quantite * p.produit.prix, 0);
  const produitFilters = produits.filter((p) => p.nom.includes(texte))

  const ajouterAuPanier = (produit: Produit) => {
    const recherche = panier.find(
      (p: ArticlePanier) => p.produit.id === produit.id,
    );
    if (recherche) {
      setPanier(
        panier.map((p) =>
          p.produit.id === produit.id ? { ...p, quantite: p.quantite + 1 } : p,
        ),
      );
    } else {
      const articlePanier = {
        produit: produit,
        quantite: 1,
      };
      setPanier([...panier, articlePanier]);
    }
  };

  const retirerAuPanier = (id: number) => {
    const tab = panier.filter((p) => p.produit.id !== id);
    setPanier(tab);
  };

  return (
    <div className="p-5">
      <div>
        <input type="text" className="bg-gray-400 rounded-4xl px-2" onChange={(e) => setTexte(e.target.value)}/>
        <ul>
          {produitFilters.map((produit) => (
            <div key={produit.id} className="flex gap-2 p-2">
              <li>
                {produit.nom} {produit.prix}F
              </li>
              <button
                className="text-white bg-blue-500 px-2 rounded-2xl hover:bg-blue-600 hover:cursor-pointer"
                onClick={() => ajouterAuPanier(produit)}
              >
                Ajouter au panier
              </button>
            </div>
          ))}
        </ul>
      </div>

      <div className="py-5">
        <h2>Panier</h2>
        <ul>
          {panier.map((p) => (
            <div key={p.produit.id} className="flex gap-2 p-2">
              <li>
                {p.produit.nom} {p.quantite} {p.quantite * p.produit.prix}F
              </li>
              <button
                className="text-white bg-red-500 px-2 rounded-2xl hover:bg-red-600 hover:cursor-pointer"
                onClick={() => retirerAuPanier(p.produit.id)}
              >
                Retirer
              </button>
            </div>
          ))}
          <li>Total: {total}</li>
        </ul>
      </div>
    </div>
  );
};

export default Panier;
