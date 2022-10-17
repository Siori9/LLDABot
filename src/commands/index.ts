import { EntreeUtilisateurCommande } from "./Command"
import { adminCommands } from "./commandsAdmin"
import { creaCommands } from "./creation.ts"
import { diversCommands } from "./divers"
import { infoCommands } from "./informations"

export const commandes: EntreeUtilisateurCommande[] = [
    diversCommands, adminCommands, infoCommands, creaCommands
].flat()