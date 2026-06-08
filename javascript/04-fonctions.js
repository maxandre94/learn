function calculerIMC(poids,taille){
    const imc = poids / (taille * taille)
    return parseFloat(imc.toFixed(1))
}

console.log(calculerIMC(79,1.85))