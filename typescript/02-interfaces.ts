interface Produit {
    nom: string
    prix: number
    disponible: boolean
    description?: string
    categorie: "alimentaire" | "electronique"
}

const p1: Produit = {
    nom: "banane",
    prix: 200,
    disponible: false,
    description: "ce produit est bio",
    categorie: "alimentaire"
}

const p2: Produit = {
    nom: "clavier",
    prix: 2500,
    disponible: true,
    categorie: "electronique"
}

const afficherProduit = (produit: Produit) => {
    return `le produit ${produit.nom} au prix ${produit.prix} est ${produit.disponible ? "disponible" : "indisponible"} ${produit.description ? "de description "+produit.description : ""} de la categorie ${produit.categorie}.`;
}

console.log(afficherProduit(p1))
console.log(afficherProduit(p2))