import mongoose, { Schema, Types, model } from 'mongoose';

export interface Message {
    categorie: string
    contenuMessage: string
    arguments: string[]
    messageSuivant: Types.ObjectId[]
    auteur: Types.ObjectId
    image?: string
}

const schemaMessage = new Schema<Message>({
    categorie: { type: String, required: true },
    contenuMessage: { type: String, required: true },
    arguments: [{ type: String, required: true }],
    messageSuivant: [{type: mongoose.Schema.Types.ObjectId, ref: 'Message', required: true }],
    auteur: {type: mongoose.Schema.Types.ObjectId, ref: 'Pnj', required: true },
    image: { type: String}
})

export const MessageEntity = model<Message>('Message', schemaMessage);