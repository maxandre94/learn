let compteur = 0
const btn = document.getElementById("btn")
const init = document.getElementById("init")

btn.addEventListener("click", () => {
    compteur++
    document.getElementById("compteur").textContent = compteur
})

init.addEventListener("click", () => {
    compteur = 0
    document.getElementById("compteur").textContent = compteur
})