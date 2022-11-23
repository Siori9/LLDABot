import { Id, Tag } from "../Autres/AutresTypes"

export interface DroitsUtilisateur {
    id: Id
    idUtilisateur: Id
    tagUtilisateur: Tag
    role: 'admin' | 'modo'
}

type DroitsUtilisateurCreation = Omit<DroitsUtilisateur, "id">
