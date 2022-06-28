import { Collection } from 'discord.js';
import mongoose, { Schema, Types, model } from 'mongoose';

interface Item {
    nom: string
    lvl: number
    prixBase?: number
    type: 'Ressource' | 'Utilitaire' | 'ObjetQuete' | 'Equipement' | 'Autre'
    sousType: string
    description: string 
    bonus?: {
        caract: string //'caracteristique' | 'defense' | 'attaque' | 'esquive' | 'fuite' | 'xp' | 'pm' | 'pv' | 'vitesse'
        type: '+' | '%'
        valeur: number
    }[]
    imageUrl: string
}

interface Ressource extends Item {
    lieux: Types.ObjectId[]
    frequence: number
}

interface Utilitaire extends Item {
    recette?: Collection<Types.ObjectId,number>
}

interface ObjetQuete extends Item {
    quete: [Types.ObjectId]
    total?: number
}

interface Equipement extends Item {
    solid: number
}
