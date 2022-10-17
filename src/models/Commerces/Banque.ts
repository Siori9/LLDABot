import { Collection } from 'discord.js';
import mongoose, { Schema, Types, model } from 'mongoose';

export interface Banque {
    proprietaire: Types.ObjectId
    contenue: Collection<Types.ObjectId,number>
    lvl: number
}

const schemaBanque = new Schema<Banque>({
    proprietaire:  { type: mongoose.Schema.Types.ObjectId, ref: 'Guilde' || 'Personnage', required: true },
    contenue: { type: Collection<Types.ObjectId,Number>, ref: 'Item' || 'Ressource' || 'Utilitaire' || 'ObjetQuete' || 'Equipement', required: true },
    lvl: {type: Number, required: true}
})

export const BanqueEntity = model<Banque>('Banque', schemaBanque);