import { Collection } from 'discord.js';
import mongoose, { Schema, Types, model } from 'mongoose';

export interface Creature {
    nom: string
    imageUrl: string
    description: string
    attaques: Types.ObjectId[]
    lieuxHabitat: {
        lieu: Types.ObjectId
        rarete: number
    }[]
    loot?:Collection<Types.ObjectId,number>
    lvl: number
    capturePossible: boolean
}

const schemaCreature = new Schema<Creature>({
    nom: { type: String, required: true },
    imageUrl: { type: String, required: true },
    description: { type: String, required: true },
    attaques: { type: [mongoose.Schema.Types.ObjectId], ref: 'Attaque', required: true},
    lieuxHabitat:[{
        lieu: { type: mongoose.Schema.Types.ObjectId, ref: 'Place', required: true},
        rarete: { type: Number, required: true },
    }],
    loot: {type: Collection<Types.ObjectId,Number>, ref: 'Item' || 'Ressource' || 'Utilitaire' || 'ObjetQuete' || 'Equipement'},
    lvl: { type: Number, required: true },
    capturePossible: { type: Boolean, required: true },
});

export const CreatureEntity = model<Creature>('Creature', schemaCreature);