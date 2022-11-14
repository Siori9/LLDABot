import { Collection } from 'discord.js';
import { Id, Lvl } from '../Autres/AutresTypes';
import { IdBonus } from '../Autres/Bonus';
import { IdPlace } from '../Histoires/Lieux';
import { IdQuete } from '../Histoires/Quete';
import { IdItem } from '../Items/Item';

export type IdMetier = Id

export interface Metier {
    id : IdMetier
    nom : String
    bonus? : Collection<Lvl,IdBonus>
    lieuxApprentissage : IdPlace[]
    description : String
    quete? : IdQuete[]
    fabrication? : Collection<Lvl,Array<IdItem>>
}