import { Collection } from 'discord.js';
import mongoose, { Schema, Types, model } from 'mongoose';

interface DroitsUtilisateur {
    tag: string
    id: string
    role: 'admin' | 'modo'
}

const schemaDroitsUtilisateur = new Schema<DroitsUtilisateur>({
    tag:  { type: String, required: true },
    id:  { type: String, required: true },
    role:  { type: String, required: true },
})

export const DroitsUtilisateurEntity = model<DroitsUtilisateur>('DroitsUtilisateur', schemaDroitsUtilisateur);