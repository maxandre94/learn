"use strict";
const decrireAnimal = (animal) => {
    return ("race" in animal ? `chien ${animal.nom} ${animal.race}` : `chat ${animal.nom} ${animal.vieInterieure}`);
};
const animal1 = {
    nom: "Rex",
    race: "Caniche"
};
const animal2 = {
    nom: "Cati",
    vieInterieure: false
};
console.log(decrireAnimal(animal1));
console.log(decrireAnimal(animal2));
