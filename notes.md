# Apprentissage Git

## Commandes apprises aujourd'hui
- git config : configurer son identité
- git config --global user.name "Max"
- git config --global user.email "adjoua94@gmail.com"
- git config --list | findstr "user"
- git init : initialiser un repository
- git status : voir l'état des fichiers
- git branch : créer une branche
- git checkout : changer de branche
- git merge namebranche : merger la branche sur la brache actuelle
- git add : Préparer un fichier
- git commit -m	: Sauvegarder un point
- git log --oneline	: Voir l'historique
- git remote add origin https://github.com/maxandre94/learn.git
- git push -u origin master
- git pull : Pour récupérer le code d'un collègue

## Les balises HTML essentielles à retenir
<h1> à <h6>       → titres (du plus important au moins important)
<p>               → paragraphe
<ul> / <ol>       → liste non ordonnée / ordonnée (1. 2. 3.)
<li>              → élément de liste
<a href="...">    → lien
<img src="...">   → image
<div>             → conteneur générique (très utilisé)
<span>            → conteneur inline (pour styliser un mot)
<button>          → bouton
<input>           → champ de saisie
<form>            → formulaire


## CSS

# Flexbox
justify-content: flex-start;   → aligné à gauche (défaut)
justify-content: center;       → centré
justify-content: flex-end;     → aligné à droite
justify-content: space-between;→ espacé, collé aux bords
justify-content: space-around; → espacé uniformément

align-items: center;           → centré verticalement
flex-direction: column;        → empile verticalement
flex-direction: row;           → empile horizontalement (défaut)

# Tailwind
bg-blue-500   →  bg = background,  blue = couleur,  500 = intensité (100 à 900)
text-white    →  text = couleur du texte
p-5           →  p = padding,  5 = taille (1=4px, 2=8px, 4=16px, 5=20px...)
rounded-lg    →  bords arrondis (sm / md / lg / xl / full)
flex          →  display flex
gap-5         →  espace entre les éléments
justify-center→  centrer horizontalement
