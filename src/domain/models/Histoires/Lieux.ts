import { Collection } from 'discord.js';
import { Frequence, Id, Lien } from '../Autres/AutresTypes';
import { IdRessource } from '../Items/Item';
import { IdPnj } from '../Pnjs/Pnj';


export type IdLieux = Id
export type IdRegion = IdLieux
export type IdPlace = IdLieux

export type Temps = Number

export interface Lieu {
    id: IdLieux
    nom: String
    description: String
    lienImage?: Lien
}

export interface Region extends Lieu {
    voyages?: Collection<IdRegion,Temps>
}

export interface Place extends Lieu {
    region: IdRegion
    pnjs: IdPnj[]
    ressource: Collection<IdRessource,Frequence>
    lieuxAdjacents: IdPlace[]
}