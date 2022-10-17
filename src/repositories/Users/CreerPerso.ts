import { PersonnageEntity} from '../../models/Users/Personnage'
import mongoose, { Types } from 'mongoose';

export async function nouvPerso(proprio:string, nom:string, guide:Types.ObjectId, attaques: Types.ObjectId[],items: Types.ObjectId[]) {
    let personnage = new PersonnageEntity({
        nom: nom,
        proprietaire: proprio,
        guide: guide,
        selectionne: true,
        niveau: 0,
        experience: 0,
        vito: 0,
        pv: 10,
        pm: 10,
        caracteristiques: {
            force: 1,
            vitalite: 1,
            resistance: 1,
            precision: 1,
            intelligence: 1,
            rapidite: 1,
            magie: 1
        },
        attaques: attaques,
        items: items,
        argent: 0
    })

    await personnage.save();
}