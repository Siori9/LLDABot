import { db } from "../../../.."
import { DroitsUtilisateurService } from "../../../../domain/services/DroitsUtilisateurService"
import { DroitUtilisateurRepository } from "../../../secondary/repositories/DroitUtilisateurRepository"
import { EntreeUtilisateurCommande } from "../Command"
import { DroitUtilisateurCreationCommande } from "./DroitUtilisateurCreation"

const repo = new DroitUtilisateurRepository(db)

export const adminCommands: EntreeUtilisateurCommande[] = [
    new DroitUtilisateurCreationCommande(new DroitsUtilisateurService(repo))
]