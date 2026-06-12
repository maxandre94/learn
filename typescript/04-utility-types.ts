interface Utilisateur {
    id: number
    nom: string
    email: string
    age: number
    motDePasse: string
}

type UtilisateurPublic = Omit<Utilisateur, "motDePasse" | "age">
type UtilisateurModifiable = Partial<Utilisateur>
type UtilisateurResume = Pick<Utilisateur, "id" | "nom">