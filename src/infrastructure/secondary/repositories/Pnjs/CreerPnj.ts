import { Pnj, PnjEntity, GuideEntity, Guide} from '../../domain/models/Pnjs/Pnj'
import mongoose, { isObjectIdOrHexString, ObjectId, Types } from 'mongoose';

export async function nouvPnj({nom, famille, description, age, imageUrl, devise, lieu, metier}: {
    nom:string, 
    famille:string, 
    description: string,
    age?: number,
    imageUrl?: string, 
    devise?:string, 
    lieu?: string,
    metier?: string
}) {
    let lieuId = (lieu)? new Types.ObjectId(lieu): undefined
    let pnj: Pnj = {
        nom,
        famille: (famille as Pnj['famille']) ?? "autre",
        imageUrl,
        age,
        description,
        devise,
        lieu: lieuId,
        metier
    }

    await PnjEntity.create(pnj)
}

export async function nouvGuide({nom, famille, description, age, imageUrl, devise, lieu, metier}: {
    nom:string, 
    famille:string, 
    description: string,
    age?: number,
    imageUrl?: string, 
    devise?:string, 
    lieu?: string,
    metier?: string
}) {
    let lieuId = (lieu)? new Types.ObjectId(lieu): undefined
    let guide: Guide = {
        nom,
        famille: (famille as Pnj['famille']) ?? "autre",
        imageUrl,
        age,
        description,
        devise,
        lieu: lieuId,
        metier,
        quete: new Types.ObjectId('000000000000000000000000'),
        attaques: [],
        bonus: []
    }

    await GuideEntity.create(guide)
}