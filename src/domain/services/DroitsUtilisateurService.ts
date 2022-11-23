import { DroitUtilisateurRepository } from "../../infrastructure/secondary/repositories/DroitUtilisateurRepository";
import { DroitsUtilisateur } from "../models/HorsRp/DroitsUtilisateur";

export class DroitsUtilisateurService {
    repository: DroitUtilisateurRepository

    constructor(repository: DroitUtilisateurRepository) {
        this.repository = repository
    }

    async listAll(): Promise<DroitsUtilisateur[]> {
        return this.repository.findAll()
    }

    async create(droitsUtilisateur: DroitsUtilisateur): Promise<DroitsUtilisateur> {
        this.repository.create(droitsUtilisateur)
        throw new Error("Not implemented");
    }
}