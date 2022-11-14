import { Collection } from "discord.js";
import { IdAttaque } from "../Autres/Attaque";
import { Id, Lien, Lvl } from "../Autres/AutresTypes";
import { IdBonus } from "../Autres/Bonus";
import { IdPlace } from "../Histoires/Lieux";
import { IdQuete } from "../Histoires/Quete";

export type IdPnj = Id
export type IdGuide = IdPnj

export interface Pnj {
    id : IdPnj
    lienPhoto? : Lien
    famille : 'Emmeraude' | 'Rubis' | 'Saphir' | 'Améthyste' | 'Prophète' | 'Orbe de feu' | 'autre'
    description : String
    age? : Number
    devise? : String
    emplacement? : IdPlace
}

export interface Guide extends Pnj {
    quete : IdQuete
    attaque : Collection<Lvl,IdAttaque>
    bonus? : Collection<Lvl,IdBonus>
}