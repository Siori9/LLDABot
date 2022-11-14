import { Id, Tag } from "../Autres/AutresTypes"

export interface DroitsUtilisateur {
    tag: Tag
    id: Id
    role: 'admin' | 'modo'
}
