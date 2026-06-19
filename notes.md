# Learn
## Option 1 — GitHub (recommandé)
Votre code est déjà sur GitHub. Sur le nouvel ordinateur :

# Cloner le projet
git clone https://github.com/maxandre94/learn.git

# Installer les dépendances React
cd learn/mon-app
npm install

# Installer les dépendances NestJS
cd ../api
npm install
Puis installez les outils globaux :


node --version        # vérifier Node.js (besoin de v24+)
npm install -g typescript
npm install -g @nestjs/cli


## Option 2 — VS Code Live Share
Si vous voulez travailler sur les deux ordinateurs en même temps (collaboration en temps réel), installez l'extension Live Share dans VS Code.

Ce qu'il faut installer sur le nouvel ordinateur
Node.js v24 LTS
VS Code
Git
Extensions VS Code : Prettier, Live Preview
L'option 1 est la bonne — c'est exactement comme ça que les développeurs travaillent en équipe. Commitez toujours avant de changer d'ordinateur.

Maintenant créez api/src/taches/tache.interface.ts.


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

---

## React — Concepts essentiels

```tsx
// Composant
const MonComposant = ({ nom }: { nom: string }) => {
    return <h1>{nom}</h1>
}
export default MonComposant

// useState
const [valeur, setValeur] = useState<string>("")

// Valeur dérivée (pas un state !)
const total = items.reduce((acc, x) => acc + x.prix, 0)

// useEffect — effets de bord uniquement (API, timers)
useEffect(() => {
    const fetchData = async () => {
        const res = await fetch("url")
        const data = await res.json()
        setData(data)
    }
    fetchData()
}, []) // [] = exécuté une seule fois au montage

// Règles fondamentales
// 1. Ne jamais muter le state — toujours créer un nouvel objet
//    ❌ tab.push(x)
//    ✅ setTab([...tab, x])
// 2. Ne stocker en state que ce qu'on ne peut pas calculer
// 3. key= sur l'élément racine du .map()
// 4. className= au lieu de class= en JSX
// 5. Un seul élément racine → utiliser <> </> si besoin
```

**Événements :**
```tsx
<button onClick={() => maFonction()}>Clic</button>
<input onChange={(e) => setTexte(e.target.value)} value={texte} />
<input type="checkbox" onChange={() => toggle(id)} checked={complete} />
```

---

## TypeScript Avancé

```ts
// Generics
const dernier = <T>(tab: T[]): T | undefined => tab.at(-1)

interface ApiResponse<T> {
    data: T
    success: boolean
    message: string
}

// Utility Types
type UserPublic    = Omit<User, "motDePasse">      // supprimer des propriétés
type UserPartial   = Partial<User>                  // toutes optionnelles (PATCH)
type UserResume    = Pick<User, "id" | "nom">       // garder seulement certaines

// Type Guards
if ("race" in animal) { /* c'est un Chien */ }
```

---

## NestJS — Commandes

```bash
npm install -g @nestjs/cli
nest new nom-projet           # créer un projet
cd nom-projet
npm run start:dev             # démarrer en mode développement

# Générer des fichiers
nest generate module nom
nest generate controller nom
nest generate service nom
```

**Architecture :**
```
main.ts           → point d'entrée, démarre le serveur (port 3000)
app.module.ts     → module racine, importe tous les modules
nom/
  nom.module.ts      → déclare controller + service
  nom.controller.ts  → reçoit les requêtes HTTP (@Get, @Post...)
  nom.service.ts     → logique métier
```

**Décorateurs essentiels :**
```ts
@Controller('taches')   // préfixe de route
@Get()                  // GET /taches
@Get(':id')             // GET /taches/1
@Post()                 // POST /taches
@Put(':id')             // PUT /taches/1
@Delete(':id')          // DELETE /taches/1

@Body()                 // récupérer le body de la requête
@Param('id')            // récupérer un paramètre de route
@Injectable()           // classe injectable (service)
```

---

## NestJS — Validation (DTO + class-validator)

```bash
npm install class-validator class-transformer
```

**DTO (Data Transfer Object) — décrit et valide les données entrantes :**
```ts
// src/taches/dto/create-tache.dto.ts
import { IsNotEmpty, IsString } from "class-validator";

export class CreateTacheDto {
    @IsString()
    @IsNotEmpty()
    titre!: string;   // "!" = assertion d'assignation définitive (TS strict)
}
```

**Utilisation dans le controller :**
```ts
@Post()
create(@Body() createTacheDto: CreateTacheDto): Tache {
  return this.tachesService.create(createTacheDto.titre);
}
```

**Activer la validation globalement (main.ts) :**
```ts
import { ValidationPipe } from '@nestjs/common';

app.useGlobalPipes(new ValidationPipe());
```
→ Sans ça, les décorateurs du DTO (`@IsString()`, `@IsNotEmpty()`...) ne sont que des métadonnées inertes : rien ne les vérifie à l'exécution.

---

## NestJS + Prisma + PostgreSQL

```bash
npm install prisma --save-dev
npm install @prisma/client @prisma/adapter-pg pg
npm install --save-dev @types/pg dotenv
npx prisma init           # génère prisma/schema.prisma + .env + prisma.config.ts
npx prisma migrate dev --name init   # crée la table en base + génère le client
npx prisma generate       # régénère le client après changement de schéma
```

**schema.prisma :**
```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
}

model Tache {
  id       Int     @id @default(autoincrement())
  titre    String
  complete Boolean @default(false)
}
```

**`.env` (ne jamais committer) :**
```
DATABASE_URL="postgresql://postgres:MOT_DE_PASSE@localhost:5432/taches_db?schema=public"
```

**`main.ts` — charger les variables d'environnement en premier :**
```ts
import 'dotenv/config';   // doit être la 1ère ligne
```

**PrismaService (src/prisma/prisma.service.ts) :**
```ts
import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
    super({ adapter });
  }
  onModuleInit(): Promise<void> {
    return this.$connect();
  }
}
```
→ Prisma 7 nécessite un driver adapter (`@prisma/adapter-pg`) pour les connexions directes à PostgreSQL.

**PrismaModule (src/prisma/prisma.module.ts) :**
```ts
@Module({ providers: [PrismaService], exports: [PrismaService] })
export class PrismaModule {}
```
→ `exports` rend `PrismaService` injectable dans les autres modules.

**Utilisation dans un service :**
```ts
constructor(private readonly prisma: PrismaService) {}

findAll()           → this.prisma.tache.findMany()
findOne(id)         → this.prisma.tache.findUnique({ where: { id } })
create(titre)       → this.prisma.tache.create({ data: { titre } })
update(id, dto)     → this.prisma.tache.update({ where: { id }, data: { ...dto } })
remove(id)          → await this.prisma.tache.delete({ where: { id } })
```
→ Toutes les méthodes Prisma sont async → `Promise<T>` partout dans service et controller.

---

## Docker — Commandes essentielles

```bash
docker compose up -d        # démarrer les conteneurs en arrière-plan
docker compose down         # arrêter et supprimer les conteneurs
docker compose down -v      # idem + supprimer les volumes (reset BDD)
docker compose logs -f      # voir les logs en temps réel
docker ps                   # lister les conteneurs en cours d'exécution
```

**docker-compose.yml — PostgreSQL uniquement :**
```yaml
services:
  ma-base-de-donnees:
    image: postgres:16
    container_name: db
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: MOT_DE_PASSE
      POSTGRES_DB: taches_db
    ports:
      - "5432:5432"      # port_hôte:port_conteneur
    volumes:
      - donnees-postgres:/var/lib/postgresql/data   # persistance des données

volumes:
  donnees-postgres:
```

**Concepts clés :**
- **Image** : modèle figé (ex: `postgres:16` depuis Docker Hub)
- **Conteneur** : instance en cours d'exécution d'une image
- **Volume** : stockage persistant — sans ça, les données disparaissent à chaque `docker compose down`
- **Port** `"5432:5432"` = `hôte:conteneur` — expose le port du conteneur vers votre machine
- Ne pas oublier d'appliquer les migrations sur la nouvelle base : `npx prisma migrate dev`

**Import de type pour une interface utilisée dans une méthode décorée :**
```ts
import type { Tache } from './tache.interface';
```
→ Nécessaire car `emitDecoratorMetadata` (NestJS) tente de référencer les types des méthodes décorées (`@Post()`, etc.), mais une `interface` n'existe pas à l'exécution. `import type` clarifie qu'il s'agit uniquement d'un type, jamais d'une valeur.

---

## NestJS — Mise à jour partielle (PATCH)

**DTO avec propriétés optionnelles (`@IsOptional()`) :**
```ts
import { IsBoolean, IsOptional, IsString } from "class-validator";

export class UpdateTacheDto {
    @IsOptional()
    @IsString()
    titre?: string;

    @IsOptional()
    @IsBoolean()
    complete?: boolean;
}
```

**PUT vs PATCH :**
- `PUT` = remplacer entièrement la ressource (toutes les propriétés attendues)
- `PATCH` = mettre à jour partiellement (seulement les champs envoyés) → adapté à un DTO avec propriétés optionnelles

**Service — fusion immuable sans effet de bord :**
```ts
update(id: number, dto: UpdateTacheDto): Tache | undefined {
  const searchTache = this.taches.find((tache) => tache.id === id);
  if (!searchTache) return undefined;          // guard clause

  const updateTache = {
    ...searchTache,
    titre: dto.titre ?? searchTache.titre,       // garde l'ancienne valeur si absent
    complete: dto.complete ?? searchTache.complete,
  };

  this.taches = this.taches.map((tache) =>
    tache.id === id ? updateTache : tache         // .map() pur, sans effet de bord
  );
  return updateTache;
}
```
- `??` garde la valeur existante si le champ n'est pas fourni dans le DTO (mise à jour partielle).
- Le callback de `.map()` ne doit jamais avoir d'effet de bord (ex: assigner une variable externe) — il doit seulement retourner une valeur transformée.
- Guard clause (`if (!x) return ...`) = sortir tôt plutôt qu'imbriquer la logique dans un `if/else`.

**Controller :**
```ts
@Patch(':id')
update(@Param('id') id: string, @Body() updateTacheDto: UpdateTacheDto): Tache | undefined {
  return this.tachesService.update(+id, updateTacheDto);
}
```

---

## NestJS — Convention REST sur DELETE

Une suppression réussie ne doit **rien retourner** (pas la liste complète, pas l'élément supprimé) — le client n'a pas besoin de retélécharger des données qu'il a déjà.

```ts
// service
remove(id: number): void {
  this.taches = this.taches.filter((tache) => tache.id !== id);
}

// controller
@Delete(':id')
@HttpCode(204)               // 204 No Content = code HTTP conventionnel pour DELETE réussi
remove(@Param('id') id: string): void {
  return this.tachesService.remove(+id);
}
```
