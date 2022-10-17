import Collection from '@discordjs/collection';
import mongoose, { Schema, Types, model, Model } from 'mongoose';

export interface Quete {
    nom: string
    type: "principal" | "guide" | "secondaire" | "speciale"
    description: string
    etape?: number
    depart?: {
        dialogue?: Types.ObjectId
        lieu?: Types.ObjectId
        pnj?: Types.ObjectId
    }
    fin: {
        quetesuivante?: Types.ObjectId
        dialogue?: Types.ObjectId
        finserie: boolean
    }
    objectif: ObjectifQuete
    recompense: {
        argent?: number
        xp?:number
        item?: {
            type: Types.ObjectId
            nbr: number
        }
        familier?: Types.ObjectId
    }
}

export type ObjectifQuete = TuerCreatureObjectifQuete | ParlerPnjObjectifQuete | RecupererItemObjectifQuete

export enum ObjectifQueteType {
    TuerCreature, ParlerPnj, RecupererItem
}

interface BaseObjectifQuete {
    type: ObjectifQueteType
}

interface TuerCreatureObjectifQuete extends BaseObjectifQuete {
    type: ObjectifQueteType.TuerCreature
    creatures: Collection<Types.ObjectId, number>
}

interface ParlerPnjObjectifQuete extends BaseObjectifQuete {
    type: ObjectifQueteType.ParlerPnj
    pnj: Types.ObjectId
    dialogues: Types.ObjectId[]
}

interface RecupererItemObjectifQuete extends BaseObjectifQuete {
    type: ObjectifQueteType.RecupererItem
    items: Collection<Types.ObjectId, number>
}



const schemaQuete = new Schema<Quete>({
    nom: { type: String, required: true },
    type: { type: String, required: true },
    description: { type: String, required: true },
    etape: {type: Number},
    depart: {
        lieu: {type: mongoose.Schema.Types.ObjectId, ref: 'Place'},
        pnj: {type: mongoose.Schema.Types.ObjectId, ref: 'Pnj'},
        dialogue: {type: mongoose.Schema.Types.ObjectId, ref: 'Dialogue'},
    },
    fin: {
        quetesuivante: {type: mongoose.Schema.Types.ObjectId, ref: 'Quete'},
        dialogue: {type: mongoose.Schema.Types.ObjectId, ref: 'Dialogue'},
        finserie: { type: Boolean, required: true },
    },
    objectif: {
        type: Types.Subdocument, required: true
    },
    recompense: {
        argent: {type: Number},
        xp:{type: Number},
        item: [{
            type: {type: mongoose.Schema.Types.ObjectId, ref: 'Item' || 'Ressource' || 'Utilitaire' || 'ObjetQuete' || 'Equipement'},
            nbr: {type: Number},
        }],
        familier: {type: mongoose.Schema.Types.ObjectId, ref: 'Creature'},
    }
});

export const QueteEntity = model<Quete>('Quete', schemaQuete);