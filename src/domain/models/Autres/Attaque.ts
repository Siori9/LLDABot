
import { IdPlace } from "../Histoires/Lieux";
import { Caracteristiques } from "../Users/Personnage";
import { Id, Lvl } from "./AutresTypes";
import { IdBonus } from "./Bonus";

export type IdAttaque = Id

export interface Attaque {
    nom: String
    description: String
    type: TypesAttaque
    bonus: IdBonus[]
    degat:{
        min: Number
        max: Number
    }
    pm: Number
    tauxCaracteristiques: Caracteristiques
    lieuxApprentissage: IdPlace[]
    niveauNecessaire: Lvl
}

export enum TypesAttaque {"magique" , "contact" , "distance" , "autre"}