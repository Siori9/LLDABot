import { Id, Lien, Lvl } from '../Autres/AutresTypes';
import { IdCoffreBanque } from '../Commerces/Banque';
import { IdPlace } from '../Histoires/Lieux';
import { IdItem } from '../Items/Item';
import { IdPersonnage, Quete } from './Personnage';

export type IdGuilde = Id

export interface Guilde {
    id: IdGuilde
    chef : IdPersonnage
    adjoint : IdPersonnage[]
    membres : IdPersonnage[]
    banque? : IdCoffreBanque
    base? : IdPlace
    description : String
    devise : String
    lienBanniere : Lien
    argent : Number
    niveau : Lvl
    experience : Number
    trophee? : IdItem
    quetes? : Quete

}