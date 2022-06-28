import { Collection } from 'discord.js';
import mongoose, { Schema, Types, model } from 'mongoose';

interface Personnage {
    id: Types.ObjectId
    nom: string
    proprietaire: string
    guide: Types.ObjectId
    selectionne: boolean
    metier?: {
        type: Types.ObjectId
        pointMetier: number
    }
    guild?: Types.ObjectId
    familierPrinc?: Types.ObjectId
    familiers?: {
        id: Types.ObjectId
        type: Types.ObjectId
        nom: string
        niveau: number
        experience: number
    }[]
    niveau: number
    experience: number
    vito: number
    pv: number
    pm: number
    caracteristiques: {
        force: number
        vitalite: number
        resistance: number
        precision: number
        intelligence: number
        rapidite: number
        magie: number
    }
    attaques: Types.ObjectId[]
    attselects?: Types.ObjectId[]
    equipements?: {
        etat: number
        type: Types.ObjectId
    }[]
    items: Types.ObjectId[]
    quetes?: {
        etape: number
        etat?: Collection<Types.ObjectId,number>
        type: Types.ObjectId
        valid: boolean
    }[]
    cristaux?: Types.ObjectId[]
    symbols?: Types.ObjectId[]
}

const schemaPersonnage = new Schema<Personnage>({
    id: { type: mongoose.Schema.Types.ObjectId},
    nom: { type: String, required: true },
    proprietaire: { type: String, required: true },
    guide: { type: mongoose.Schema.Types.ObjectId, ref: 'Guide', required: true},
    selectionne: {type: Boolean, required: true},
    metier: {
        type: {type: mongoose.Schema.Types.ObjectId, ref: 'Metier', required: true},
        pointMetier: {type: Number, required: true}
    },
    guild: {type: mongoose.Schema.Types.ObjectId, ref: 'Guild'},
    familierPrinc: {type: mongoose.Schema.Types.ObjectId},
    familiers: {
        id: {type: mongoose.Schema.Types.ObjectId, required: true},
        type: {type: mongoose.Schema.Types.ObjectId, ref: 'Familier'},
        nom: { type: String, required: true },
        niveau: {type: Number, required: true},
        experience: {type: Number, required: true},
    },
    niveau: {type: Number, required: true},
    experience: {type: Number, required: true},
    vito: {type: Number, required: true},
    pv: {type: Number, required: true},
    pm: {type: Number, required: true},
    caracteristiques: {
        force: {type: Number, required: true},
        vitalite: {type: Number, required: true},
        resistance: {type: Number, required: true},
        precision: {type: Number, required: true},
        intelligence: {type: Number, required: true},
        rapidite: {type: Number, required: true},
        magie: {type: Number, required: true}
    },
    attaques: { type: [mongoose.Schema.Types.ObjectId], ref: 'Attaque', required: true},
    attselects: { type: [mongoose.Schema.Types.ObjectId], ref: 'Attaque'},
    equipements: {
        etat: { type: Number, required: true},
        type: { type: [mongoose.Schema.Types.ObjectId], ref: 'Item'},
    },
    items: {type: [mongoose.Schema.Types.ObjectId], ref: 'Item', required: true},
    quetes: {
        etape: {type: Number, required: true},
        etat: { type: Number},
        type: {type: [mongoose.Schema.Types.ObjectId], ref: 'Quete', required: true},
        valid: { type: Boolean},
    },
    cristaux: {type: [mongoose.Schema.Types.ObjectId], ref: 'Item'},
    symbols: {type: [mongoose.Schema.Types.ObjectId], ref: 'Item'},
});

const PersonnageEntity = model<Personnage>('User', schemaPersonnage);