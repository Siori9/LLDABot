import { Collection } from 'discord.js';
import { IdItem } from '../Items/Item';
import { IdFamilier } from '../Pnjs/Creature';
import { Frequence, Id } from './AutresTypes';

export type IdCoffre = Id

export interface Coffre {
    id: IdCoffre
    nom: String
    description?: String
    items: {
        nombre: {
            min: number 
            max: number
        }
        listeItem: Collection<IdItem,Frequence> //Item + proba
    }
    argent: {
        min: Number
        max: Number
    }
    xp: {
        min: Number
        max: Number
    }
    familier: Collection<IdFamilier,Frequence> //Familier + proba
}