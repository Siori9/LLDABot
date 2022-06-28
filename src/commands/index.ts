import { EntreeUtilisateurCommande } from "./Command"
import { diversCommands } from "./divers"

export const commandes: EntreeUtilisateurCommande[] = [
    diversCommands
].flat()