// import mongoose, { Schema, Types, model } from 'mongoose';

import { Id } from "../Autres/AutresTypes"
import { IdItem } from "../Items/Item"
import { IdPnj } from "../Pnjs/Pnj"
import { IdGuilde } from "../Users/Guilde"
import { IdPersonnage } from "../Users/Personnage"

export type IdVente = Id

export interface Vente {
    id : IdVente
    lieuVente: 'hotelVente' | IdGuilde | IdPnj //Pnj vendeur
    vendeur: IdPnj | IdPersonnage
    item: IdItem
    nombre: Number
    prix: Number
}