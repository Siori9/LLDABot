import mongoose, { Schema, Types, model } from 'mongoose';

export interface Pnj {
    nom: string
    imageUrl?: string
    famille: 'Emmeraude' | 'Rubis' | 'Saphir' | 'Améthyste' | 'Prophète' | 'Orbe de feu' | 'autre'
    description: string
    age?: number
    devise?: string
    lieu?: Types.ObjectId
    metier?: string
}

export interface Guide extends Pnj {
    quete: Types.ObjectId
    attaques: {
        type: Types.ObjectId
        lvl: number
    }[]
    bonus?: {
        type: Types.ObjectId
        lvl: number
    }[]
}

const schemaGuide = new Schema<Guide>({
    nom: { type: String, required: true },
    imageUrl: { type: String},
    famille: { type: String, required: true },
    description: { type: String, required: true },
    age: { type: Number },
    devise: { type: String,},
    lieu: {type: mongoose.Schema.Types.ObjectId, ref: 'Place'},
    metier: { type: String},
    quete: {type: mongoose.Schema.Types.ObjectId, ref: 'Quete', required: true },
    attaques: [{
        type: { type: mongoose.Schema.Types.ObjectId, ref: 'Attaque', required: true},
        lvl: { type: Number, required: true },
    }],
    bonus: [{
        type: { type: mongoose.Schema.Types.ObjectId, ref: 'Bonus', required: true},
        lvl: { type: Number, required: true },
    }]
})

export const GuideEntity = model<Guide>('Guide', schemaGuide);

const schemaPnj = new Schema<Pnj>({
    nom: { type: String, required: true },
    imageUrl: { type: String},
    famille: { type: String, required: true },
    description: { type: String, required: true },
    age: { type: Number },
    devise: { type: String},
    lieu: {type: mongoose.Schema.Types.ObjectId, ref: 'Place'},
    metier: { type: String}
})

export const PnjEntity = model<Pnj>('Pnj', schemaPnj);