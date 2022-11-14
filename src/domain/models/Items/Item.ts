import { Collection } from 'discord.js';
import { EtatEquipement, Frequence, Id, Lien, Lvl } from '../Autres/AutresTypes';
import { IdBonus } from '../Autres/Bonus';
import { IdQuete } from '../Histoires/Quete';
import { IdMetier } from '../Users/Metier';


export type IdItem = Id
export type IdRessource = IdItem
export type IdEquipement = IdItem
export type IdCristaux = IdItem
export type IdSymbols = IdItem

export interface Item {
    id : IdItem
    nom : String
    prixBase : Number
    type: 'Ressource' | 'Utilitaire' | 'ObjetQuete' | 'Equipement' | 'Cristaux' | 'Symbols' | 'Autre'
    sousType: String
    description: String
    bonus?: IdBonus
    lienPhoto: Lien
}

export interface Ressource extends Item {
    type: 'Ressource'
    lieux: IdItem[]
    frequence: Frequence
}

export interface Utilitaire extends Item {
    type: 'Utilitaire'
    recette?: Collection<IdRessource,number>
    metier?: Collection<IdMetier,Lvl>
}

export interface ObjetQuete extends Item {
    type: 'ObjetQuete'
    quete: IdQuete[]
    total?: number
}

export interface Equipement extends Item {
    type: 'Equipement'
    solid: EtatEquipement
    recette?: Collection<IdRessource,number>
    metier?: Collection<IdMetier,Lvl>
}

export interface Symbols extends Item {
    type: 'Symbols'
    sousType: String
}