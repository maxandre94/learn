"use strict";
const p1 = {
    nom: "banane",
    prix: 200,
    disponible: false,
    description: "ce produit est bio",
    categorie: "alimentaire"
};
const p2 = {
    nom: "clavier",
    prix: 2500,
    disponible: true,
    categorie: "electronique"
};
const afficherProduit = (produit) => {
    return `le produit ${produit.nom} au prix ${produit.prix} est ${produit.disponible ? "disponible" : "indisponible"} ${produit.description ? "de description " + produit.description : ""} de la categorie ${produit.categorie}.`;
};
console.log(afficherProduit(p1));
console.log(afficherProduit(p2));
