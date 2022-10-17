import { PersonnageEntity} from '../../models/Users/Personnage'
import { Types } from 'mongoose';

export async function suppPerso(persoId:Types.ObjectId){
    await PersonnageEntity.findOneAndDelete(persoId);
}