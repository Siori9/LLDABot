import { Id } from "./AutresTypes"

export type IdBonus = Id

export interface Bonus {
    id : IdBonus
    nom: String
    description?: String
    cible: TypesBonus
    valeur: Number
}

export enum TypesBonus {'force' , 'vitalite' , 'resistance' , 'precision' , 'intelligence' , 'rapidite' , 'magie' , 'attaque' , 'attaque-distance' , 'attaque-contact' , 'attaque-magique' , 'defense' , 'defense-magique' , 'esquive' , 'esquive-magique' , 'fuite' , 'fuite-magique' , 'endormissement' , 'feu' , 'eau' , 'nature' , 'illusion' , 'pm' , 'pv' , 'vitesse' , 'fortune' , 'fortune-xp' , 'fortune-argent' , 'fortune-ressource' , 'seduction' /*attraper des familier*/ }