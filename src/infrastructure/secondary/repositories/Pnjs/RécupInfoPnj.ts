import { Types } from "mongoose";
import { Pnj, PnjEntity } from "../../domain/models/Pnjs/Pnj";


export async function infoPnjs(nom: String):Promise<Pnj | null> {
    return await PnjEntity.findOne({nom: nom}).exec()
}