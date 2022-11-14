import { Collection } from 'discord.js';
import { IdAttaque } from '../Autres/Attaque';
import { EtatEquipement, Id, Lvl } from '../Autres/AutresTypes';
import { IdCoffreBanque } from '../Commerces/Banque';
import { IdQuete } from '../Histoires/Quete';
import { IdEquipement, IdItem, IdSymbols } from '../Items/Item';
import { IdCreature } from '../Pnjs/Creature';
import { IdGuide, IdPnj } from '../Pnjs/Pnj';
import { IdGuilde } from './Guilde';
import { IdMetier } from './Metier';

export type IdPersonnage = Id

export interface Personnage {
    id: IdPersonnage
    nom: String
    proprietaire: String
    guide: IdGuide
    selectionne: Boolean
    guild?: IdGuilde
    familierPrincipal?: Familier
    familiers?: Familier[]
    niveau: Lvl;
    experience: Number
    vito: Number
    pv: Number
    pm: Number
    attaques: IdAttaque[]
    attaquesSelectionnee?: IdAttaque[]
    equipements?: Collection<IdEquipement,EtatEquipement>
    items: Collection<IdItem,Number>
    quetes?: Quete[]
    nombreCristaux?: Number
    symbols?: IdSymbols[]
    argent: Number
    connaissances?: (IdGuide|IdPnj)[]
    amis?: IdPersonnage[]
    banque?: IdCoffreBanque,
    caracteritiques: Caracteristiques
    metier: MetierPerso
}

export interface Caracteristiques {
    force: Number
    vitalite: Number
    resistance: Number
    precision: Number
    intelligence: Number
    rapidite: Number
    magie: Number
}

export interface MetierPerso {
    type?: IdMetier
    pointMetier?: Number
}

export interface Familier {
    id?: IdCreature
    nom?: string
    niveau?: Number
    experience?: Number
}

export interface Quete {
    type?: IdQuete
    etape?: Number
    etat?: Collection<IdItem|IdCreature,Number>
    valid?: Boolean
}