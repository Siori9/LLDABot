import { Collection } from 'discord.js';
import mongoose, { Schema, Types, model } from 'mongoose';

export interface Lieu {
    nom: string
    description: string
    imageUrl?: string
}

export interface Region extends Lieu {
    voyages?: Collection<Types.ObjectId,number>
}

export interface Place extends Lieu {
    region: Types.ObjectId
    pnjs: Types.ObjectId[]
    ressource: Collection<Types.ObjectId,number>
    lieuxAdjacents: Types.ObjectId[]
}

const schemaRegion = new Schema<Region>({
    nom: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String},
    voyages: { type:Collection<Types.ObjectId,Number>, ref: 'Region'}
});

export const RegionEntity = model<Region>('Region', schemaRegion);

const schemaPlace = new Schema<Place>({
    nom: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String},
    region: { type: mongoose.Schema.Types.ObjectId, ref: 'Region', required: true},
    pnjs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Pnj', required: true}],
    ressource: { type:Collection<Types.ObjectId,Number>, ref: 'Ressource', required: true},
    lieuxAdjacents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Place', required: true}]
});

export const PlaceEntity = model<Place>('Place', schemaPlace);

