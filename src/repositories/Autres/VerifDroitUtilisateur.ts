import { DroitsUtilisateurEntity} from '../../models/HorsRp/DroitsUtilisateur'
import mongoose, { Types } from 'mongoose';

export async function verifDroit(id: string, type: string){
    const user = await DroitsUtilisateurEntity.findOne({id:id})
    if(user?.role === type || user?.role === "admin" || type === "*"){
        return true
    } else {
        return false
    }
}