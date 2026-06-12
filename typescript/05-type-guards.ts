interface Chien {
    nom: string
    race: string
}

interface Chat {
    nom: string
    vieInterieure: boolean
}

type Animal = Chien | Chat;

const decrireAnimal = (animal: Animal): string => {
    return ("race" in animal ? `chien ${animal.nom} ${animal.race}` : `chat ${animal.nom} ${animal.vieInterieure}`)
}

const animal1: Animal = {
    nom: "Rex",
    race: "Caniche"
}
const animal2: Animal = {
    nom: "Cati",
    vieInterieure: false
}

console.log(decrireAnimal(animal1))
console.log(decrireAnimal(animal2))