import { Collection } from 'discord.js';
import mongoose, { Schema, Types, model } from 'mongoose';

export interface Coffre {
    nom: string
    description?: string
    items: {
        nombre: {
            min: number 
            max: number
        }
        listeItem: Collection<Types.ObjectId,number> //Item + proba
    }
    argent: {
        min: number
        max: number
    }
    xp: {
        min: number
        max: number
    }
    familier: Collection<Types.ObjectId,number> //Familier + proba
}

const schemaCoffre = new Schema<Coffre>({
    nom: { type: String, required: true },
    description: { type: String },
    items: {
        nombre: {
            min: {type: Number, required: true},
            max: {type: Number, required: true},
        },
        listeItem: {type: Map<Types.ObjectId,Number>, ref: 'Item' || 'Ressource' || 'Utilitaire' || 'Equipement', required: true}
    },
    argent: {
        min: {type: Number, required: true},
        max: {type: Number, required: true},
    },
    xp: {
        min: {type: Number, required: true},
        max: {type: Number, required: true},
    },
    familier: {type: Map<Types.ObjectId,Number>, ref: 'Creature', required: true}
})

export const CoffreEntity = model<Coffre>('Coffre', schemaCoffre);