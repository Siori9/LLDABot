import { Collection } from 'discord.js';
import mongoose, { Schema, Types, model } from 'mongoose';

export interface Metier {
    nom: string
    bonus: {
        type: Types.ObjectId
        lvl: number
    }
    lieuxApprentissage: Types.ObjectId[]
    description: string
    quete?: Types.ObjectId[]
    fabrication: Collection<number,Array<Types.ObjectId>>
}

const schemaMetier = new Schema<Metier>({
    nom: { type: String, required: true },
    bonus: {
        type: {type: mongoose.Schema.Types.ObjectId, ref: 'Bonus'},
        lvl: {type: Number, required: true},
    },
    lieuxApprentissage: [{type: mongoose.Schema.Types.ObjectId, ref: 'Lieux'}],
    description: { type: String, required: true },
    quete: [{type: mongoose.Schema.Types.ObjectId, ref: 'Quete'}],
    fabrication: {type: Collection<Number, Array<Types.ObjectId>>, ref: 'Item' || 'Equipement'}
})

export const MetierEntity = model<Metier>('Metier', schemaMetier);