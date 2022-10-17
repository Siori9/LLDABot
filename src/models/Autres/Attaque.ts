import mongoose, { Schema, Types, model } from 'mongoose';

export interface Attaque {
    nom: string
    description: string
    type: "magique" | "contact" | "distance" | "autre"
    bonus: Types.ObjectId[]
    degat:{
        min: number
        max: number
    }
    pm: number
}

const schemaAttaque = new Schema<Attaque>({
    nom: { type: String, required: true },
    description: { type: String, required: true },
    type: { type: String, required: true },
    bonus: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Bonus', required: true}],
    degat:{
        min: {type: Number, required: true},
        max: {type: Number, required: true},
    },
    pm: {type: Number, required: true},
});

export const AttaqueEntity = model<Attaque>('Attaque', schemaAttaque);