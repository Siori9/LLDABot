import mongoose, { Schema, Types, model } from 'mongoose';

export interface Vente {
    lieuVente: 'hotelVente' | Types.ObjectId //Pnj vendeur
    vendeur: Types.ObjectId
    item: Types.ObjectId
    nombre: number
    prix: number
}

const schemaVente = new Schema<Vente>({
    lieuVente: { type: String || Types.ObjectId, ref: 'Pnj' || 'Guilde', required: true },
    vendeur: { type: mongoose.Schema.Types.ObjectId, ref: 'Pnj' || 'Personnage', required: true },
    item: {type: mongoose.Schema.Types.ObjectId, ref: 'Item' || 'Ressource' || 'Utilitaire' || 'ObjetQuete' || 'Equipement', required: true },
    nombre: {type: Number, required: true},
    prix: {type: Number, required: true}
})

export const VenteEntity = model<Vente>('Vente', schemaVente);