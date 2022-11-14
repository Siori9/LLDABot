import { Collection } from 'discord.js';
import { IdAttaque } from '../Autres/Attaque';
import { Frequence, Id, Lien, Lvl } from '../Autres/AutresTypes';
import { IdLieux } from '../Histoires/Lieux';
import { IdItem } from '../Items/Item';

export type IdCreature = Id
export type IdFamilier = IdCreature

export interface Creature {
    id : IdCreature
    nom : String
    lienPhoto : Lien
    description : String
    attaques : Collection<Frequence,IdAttaque>
    lieuxHabitat : Collection<Frequence,IdLieux>
    loot? : Collection<IdItem,Number>
    lvl : Lvl
    capturePossible : Boolean
}