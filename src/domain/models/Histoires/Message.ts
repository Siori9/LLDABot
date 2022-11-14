
import { Id, Lien } from "../Autres/AutresTypes"
import { IdPnj } from "../Pnjs/Pnj"
import { IdPersonnage } from "../Users/Personnage"



export type IdMessage = Id

export interface Message {
    id : IdMessage
    categorie: String
    contenuMessage: String
    arguments: String[]
    messageSuivant: IdMessage[]
    auteur: IdPersonnage | IdPnj
    lienImage?: Lien
}