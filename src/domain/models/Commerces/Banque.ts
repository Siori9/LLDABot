import { Collection } from 'discord.js';
import { Id, Lvl } from '../Autres/AutresTypes';
import { IdItem } from '../Items/Item';
import { IdPersonnage } from '../Users/Personnage';


export type IdCoffreBanque = Id

export interface Banque {
    proprietaire: IdPersonnage
    contenue: Collection<IdItem,Number>
    lvl: Lvl
}