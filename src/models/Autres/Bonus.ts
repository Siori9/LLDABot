import mongoose, { Schema, Types, model } from 'mongoose';

export interface Bonus {
    nom: string
    description?: string
    cible: 'force' | 'vitalite' | 'resistance' | 'precision' | 'intelligence' | 'rapidite' | 'magie' | 'attaque' | 'attaque-distance' | 'attaque-contact' | 'attaque-magique' | 'defense' | 'defense-magique' | 'esquive' | 'esquive-magique' | 'fuite' | 'fuite-magique' | 'endormissement' | 'feu' | 'eau' | 'nature' | 'illusion' | 'pm' | 'pv' | 'vitesse' | 'fortune' | 'fortune-xp' | 'fortune-argent' | 'fortune-ressource' | 'seduction' /*attraper des familier*/ 
    valeur: number
}


const schemaBonus = new Schema<Bonus>({
    nom: { type: String, required: true },
    description: { type: String },
    cible: { type: String, required: true },
    valeur: { type: Number, required: true }
})

export const BonusEntity = model<Bonus>('Bonus', schemaBonus);