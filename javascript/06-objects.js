const moi = {
    prenom: "Max",
    age: 32,
    metier: "developpeur",
    technologies: ['git','react','html','css','tailwind']
}

function decrireUtilisateur (utilisateur) {
    return `Je suis ${utilisateur.prenom}, j'ai ${utilisateur.age}, ${utilisateur.metier} et je connais ${utilisateur.technologies.length} technologies`;
}
console.log(decrireUtilisateur(moi))