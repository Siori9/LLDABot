import { Collection } from 'discord.js';
import mongoose, { Schema, Types, model } from 'mongoose';

export interface Item {
    nom: string
    lvl: number
    prixBase?: number
    type: 'Ressource' | 'Utilitaire' | 'ObjetQuete' | 'Equipement' | 'Autre'
    sousType: string
    description: string 
    bonus?: Types.ObjectId[]
    imageUrl: string
}

export interface Ressource extends Item {
    type: 'Ressource'
    lieux: Types.ObjectId[]
    frequence: number
}

export interface Utilitaire extends Item {
    type: 'Utilitaire'
    recette?: Collection<Types.ObjectId,number>
    metier?: {
        type?: Types.ObjectId
        lvl?: number
    }
}

interface ObjetQuete extends Item {
    type: 'ObjetQuete'
    quete: [Types.ObjectId]
    total?: number
}

interface Equipement extends Item {
    type: 'Equipement'
    solid: number
    recette?: Collection<Types.ObjectId,number>
    metier?: {
        type?: Types.ObjectId
        lvl?: number
    }
}

const schemaItem = new Schema<Item>({
    nom: { type: String, required: true },
    lvl: {type: Number, required: true},
    prixBase: {type: Number},
    type: { type: String, required: true },
    sousType: { type: String, required: true },
    description: { type: String, required: true }, 
    bonus: [{type: mongoose.Schema.Types.ObjectId, ref: 'Bonus'}],
    imageUrl: { type: String, required: true },
})

export const ItemEntity = model<Item>('Item', schemaItem);

const schemaRessource = new Schema<Ressource>({
    nom: { type: String, required: true },
    lvl: {type: Number, required: true},
    prixBase: {type: Number},
    type: { type: String, required: true },
    sousType: { type: String, required: true },
    description: { type: String, required: true }, 
    bonus: [{type: mongoose.Schema.Types.ObjectId, ref: 'Bonus'}],
    imageUrl: { type: String, required: true },
    lieux: [{type: mongoose.Schema.Types.ObjectId, ref: 'Place'}],
    frequence: {type: Number}
})

export const RessourceEntity = model<Ressource>('Ressource', schemaRessource);

const schemaUtilitaire = new Schema<Utilitaire>({
    nom: { type: String, required: true },
    lvl: {type: Number, required: true},
    prixBase: {type: Number},
    type: { type: String, required: true },
    sousType: { type: String, required: true },
    description: { type: String, required: true }, 
    bonus: [{type: mongoose.Schema.Types.ObjectId, ref: 'Bonus'}],
    imageUrl: { type: String, required: true },
    recette: { type: Collection<{type: mongoose.Schema.Types.ObjectId, ref: 'Ressource'},{type: Number}>, required: true },
    metier: {
        type: {type: mongoose.Schema.Types.ObjectId, ref: 'Metier'},
        lvl: {type: Number},
    }
})

export const UtilitaireEntity = model<Utilitaire>('Utilitaire', schemaUtilitaire);

const schemaObjetQuete = new Schema<ObjetQuete>({
    nom: { type: String, required: true },
    lvl: {type: Number, required: true},
    prixBase: {type: Number},
    type: { type: String, required: true },
    sousType: { type: String, required: true },
    description: { type: String, required: true }, 
    bonus: [{type: mongoose.Schema.Types.ObjectId, ref: 'Bonus'}],
    imageUrl: { type: String, required: true },
    quete: [{type: mongoose.Schema.Types.ObjectId, ref: 'Quete', required: true}],
    total: {type: Number},
})

export const ObjetQueteEntity = model<ObjetQuete>('ObjetQuete', schemaObjetQuete);

const schemaEquipement = new Schema<Equipement>({
    nom: { type: String, required: true },
    lvl: {type: Number, required: true},
    prixBase: {type: Number},
    type: { type: String, required: true },
    sousType: { type: String, required: true },
    description: { type: String, required: true }, 
    bonus: [{type: mongoose.Schema.Types.ObjectId, ref: 'Bonus'}],
    imageUrl: { type: String, required: true },
    solid: {type: Number, required: true},
    recette: { type: Collection<{type: mongoose.Schema.Types.ObjectId, ref: 'Ressource'},{type: Number}>},
    metier: {
        type: {type: mongoose.Schema.Types.ObjectId, ref: 'Metier'},
        lvl: {type: Number},
    }
})

export const EquipementEntity = model<Equipement>('Equipement', schemaEquipement);