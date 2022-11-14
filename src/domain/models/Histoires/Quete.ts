import Collection from '@discordjs/collection';
import { Id } from '../Autres/AutresTypes';
import { IdItem } from '../Items/Item';
import { IdCreature, IdFamilier } from '../Pnjs/Creature';
import { IdPnj } from '../Pnjs/Pnj';
import { IdPlace } from './Lieux';
import { IdMessage } from './Message';


export type IdQuete = Id

export interface Quete {
    id: IdQuete
    nom: String
    type: "principal" | "guide" | "secondaire" | "speciale"
    description: String
    etape?: Number
    depart?: {
        dialogue?: IdMessage
        lieu?: IdPlace
        pnj?: IdPnj
    }
    fin: {
        queteSuivante?: IdQuete
        dialogue?: IdMessage
        finSerie: Boolean
    }
    objectif: ObjectifQuete
    recompense: {
        
    }
}

export type ObjectifQuete = TuerCreatureObjectifQuete | ParlerPnjObjectifQuete | RecupererItemObjectifQuete


export interface TuerCreatureObjectifQuete {
    type: 'TuerCreature'
    creatures: Collection<IdCreature, Number>
}

export interface ParlerPnjObjectifQuete {
    type: 'ParlerPnj'
    pnj: IdPnj
    dialogue: IdMessage
}

export interface RecupererItemObjectifQuete {
    type: 'RecupererItem'
    items: Collection<IdItem, Number>
}

export interface Recompense {
    argent?: Number
    xp?:Number
    item?:Collection<IdItem,Number>
    familier?: IdFamilier
}