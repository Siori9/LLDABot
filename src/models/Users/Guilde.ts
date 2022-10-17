import { Collection } from 'discord.js';
import mongoose, { Schema, Types, model } from 'mongoose';

export interface Guilde {
    nom: string
    chef: Types.ObjectId
    banque?: Types.ObjectId
    ajoints: Types.ObjectId[]
    lieux?: Types.ObjectId
    membres: Types.ObjectId[]
    description: string
    devise: string
    banniere: string
    argent: number
    trophe?: Types.ObjectId[]
    quetes?: {
        etape?: number
        etat?: Collection<Types.ObjectId,number>
        type?: Types.ObjectId
        valid?: boolean
    }[]
    niveau: number
    experience: number
}

const schemaGuilde = new Schema<Guilde>({
    nom: { type: String, required: true },
    chef: {type: mongoose.Schema.Types.ObjectId, ref: 'Personnage', required: true},
    banque: {type: mongoose.Schema.Types.ObjectId, ref: 'Banque'},
    ajoints: [{type: mongoose.Schema.Types.ObjectId, ref: 'Personnage', required: true}],
    lieux: {type: mongoose.Schema.Types.ObjectId, ref: 'Place'},
    membres: [{type: mongoose.Schema.Types.ObjectId, ref: 'Personnage', required: true}],
    description: { type: String, required: true },
    devise: { type: String, required: true },
    banniere: { type: String, required: true },
    argent: {type: Number, required: true},
    trophe: [{type: mongoose.Schema.Types.ObjectId, ref: 'Item'}],
    quetes: {
        etape: {type: Number},
        etat: { type: Number},
        type: {type: [mongoose.Schema.Types.ObjectId], ref: 'Quete'},
        valid: { type: Boolean},
    },
    niveau: {type: Number, required: true},
    experience: {type: Number, required: true},
});

export const GuildeEntity = model<Guilde>('Guilde', schemaGuilde);