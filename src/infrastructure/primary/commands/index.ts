import { EntreeUtilisateurCommande } from "./Command"
import { adminCommands } from "./droitsUtilisateur"
// import { creaCommands } from "./creation.ts"
import { diversCommands } from "./divers"
// import { infoCommands } from "./informations"

export const commandes: EntreeUtilisateurCommande[] = [
    // diversCommands, infoCommands, creaCommands
    adminCommands, diversCommands
].flat()