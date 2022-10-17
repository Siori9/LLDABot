import { DroitsUtilisateurEntity} from '../../models/HorsRp/DroitsUtilisateur'
import mongoose, { Types } from 'mongoose';

export async function nouvModo(tag:string,id:string) {
    let utilisateur = new DroitsUtilisateurEntity({
        tag: tag,
        id: id,
        role: "modo"
    })

    await utilisateur.save();
}