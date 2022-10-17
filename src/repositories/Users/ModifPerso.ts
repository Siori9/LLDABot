import { PersonnageEntity, Personnage} from '../../models/Users/Personnage'
import { Types } from 'mongoose';

export async function modifPerso(persoId:Types.ObjectId, champsARemplacer: Partial<Personnage>){
    return PersonnageEntity.findByIdAndUpdate(persoId, champsARemplacer, {
        returnDocument: 'after'
    })
}