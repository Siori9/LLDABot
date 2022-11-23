import { DroitsUtilisateur } from "../../../domain/models/HorsRp/DroitsUtilisateur";
import Database from "../../db";

export class DroitUtilisateurRepository {
    db: Database

    constructor(db: Database) {
        this.db = db
    }

    async findAll(): Promise<DroitsUtilisateur[]> {
        const results = await this.db.query("SELECT * FROM droits_utilisateurs").then(r => r.rows)
        return results.map<DroitsUtilisateur>(this.parse)
    }

    parse(raw: any): DroitsUtilisateur {
        return {
            id: raw.id,
            role: raw.role,
            idUtilisateur: raw.tagUtilisateur,
            tagUtilisateur: raw.tag
        }
    }

   async create(droitsUtilisateur : DroitsUtilisateur) {
    await this.db.query("INSERT TO DroitTable VALUES ($1,$2,$3,$4)",[droitsUtilisateur.id,droitsUtilisateur.idUtilisateur,droitsUtilisateur.tagUtilisateur,droitsUtilisateur.role]) 
   }
}