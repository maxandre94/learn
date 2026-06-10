# Notes de développement — Max

---

## GIT

```bash
git config --global user.name "Max"
git config --global user.email "max@emiciv.fr"
git config --list | findstr "user"

git init                          # initialiser un repo
git status                        # voir l'état des fichiers
git add fichier.js                # préparer un fichier
git add .                         # préparer tous les fichiers modifiés
git commit -m "message"           # sauvegarder un point
git log --oneline                 # voir l'historique

git branch nom-branche            # créer une branche
git checkout nom-branche          # changer de branche
git checkout -b nom-branche       # créer + changer en une commande
git merge nom-branche             # fusionner dans la branche courante

git remote add origin URL         # lier au repo GitHub
git push -u origin master         # premier push (crée le lien)
git push                          # push suivants
git pull                          # récupérer les changements
```

---

## HTML — Balises essentielles

```html
<h1> à <h6>          titres (du plus grand au plus petit)
<p>                  paragraphe
<ul> / <ol>          liste à puces / numérotée
<li>                 élément de liste
<a href="url" target="_blank">  lien (target="_blank" = nouvel onglet)
<img src="url" alt="desc">      image
<div>                conteneur bloc (très utilisé)
<span>               conteneur inline (styliser un mot)
<button>             bouton (actions JS)
<input>              champ de saisie
<form>               formulaire
```

- `<a>` = navigation → `<button>` = action
- Le `<script>` se met juste avant `</body>`

---

## CSS — Concepts clés

**Box model :** chaque élément = contenu + padding + border + margin

**Centrer une page :**
```css
max-width: 600px;
margin: 0 auto;
```

**Flexbox :**
```css
display: flex;
flex-direction: row | column;
justify-content: flex-start | center | flex-end | space-between | space-around;
align-items: center | flex-start | flex-end;
gap: 20px;
```

**Pseudo-classes :**
```css
a:hover { }    /* au survol */
:focus { }     /* au focus */
```

---

## Tailwind — Classes utilitaires

```
Couleurs      bg-blue-500  text-white  text-gray-600     (100→900)
Tailles       p-5  px-4  py-2  m-4  mx-auto  mt-6        (1=4px)
Texte         text-xl  text-3xl  font-bold  font-semibold
Layout        flex  flex-col  gap-5  justify-center  items-center
Largeur       w-full  max-w-2xl  mx-auto
Bords         rounded  rounded-lg  rounded-xl  rounded-full
Ombre         shadow  shadow-lg
Hover         hover:bg-blue-600  hover:underline
Responsive    md:text-xl  lg:flex
```

---

## JavaScript — Fondamentaux

```js
// Variables
const prenom = "Max"           // ne change jamais
let age = 32                   // peut changer

// Types
string, number, boolean, null, undefined

// Template literals
`Bonjour ${prenom}, tu as ${age} ans`

// Conditions
if (age >= 18) { } else { }
age >= 18 ? "majeur" : "mineur"    // ternaire

// Boucles
for (let i = 1; i <= 10; i++) { }

// Fonctions
function maFonction(param) { return param }
const maFonction = (param) => param   // arrow function

// Tableaux
const tab = [1, 2, 3]
tab.length                          // nombre d'éléments
tab[0]                              // premier élément
tab.at(-1)                          // dernier élément
tab.map(x => x * 2)                 // transformer
tab.filter(x => x > 5)             // filtrer
tab.find(x => x > 5)               // trouver le premier
tab.reduce((acc, x) => acc + x, 0) // réduire (ex: somme)
[...tab].sort((a, b) => a - b)     // trier sans muter

// Objets
const user = { prenom: "Max", age: 32 }
user.prenom
user["prenom"]

// DOM
document.getElementById("monId")
element.textContent = "nouveau texte"
element.addEventListener("click", () => { })
```

---

## Asynchrone

```js
// Promise
const maPromesse = new Promise((resolve, reject) => {
    setTimeout(() => resolve("résultat"), 1000)
})

// async/await (syntaxe moderne)
const main = async () => {
    try {
        const resultat = await maPromesse
        console.log(resultat)
    } catch (err) {
        console.error(err)
    }
}
main()
```

---

## TypeScript

```ts
// Typer une variable
const prenom: string = "Max"
const age: number = 32
const actif: boolean = true

// Interface (typer un objet)
interface Produit {
    nom: string
    prix: number
    description?: string              // ? = optionnel
    categorie: "food" | "tech"        // union type
}

// Fonction typée
const maFonction = (param: string): number => {
    return param.length
}

// Compiler et exécuter
tsc fichier.ts
node fichier.js
```

---

## React — Commandes

```bash
npm create vite@latest mon-app -- --template react-ts
cd mon-app
npm install
npm install -D tailwindcss @tailwindcss/vite
npm run dev       # démarrer le serveur de développement
npm run build     # compiler pour la production
```

**Configuration Tailwind dans `vite.config.ts` :**
```ts
import tailwindcss from '@tailwindcss/vite'
plugins: [react(), tailwindcss()]
```

**`src/index.css` :**
```css
@import "tailwindcss";
```
