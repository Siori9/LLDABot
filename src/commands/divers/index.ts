import { EntreeUtilisateurCommande } from "../Command"
import { HelpCommand } from "./HelpCommand"
import { PingCommand, PongCommand } from "./PingCommand"
import { RandomNumberCommand } from "./RandomNumberCommand"

export const diversCommands: EntreeUtilisateurCommande[] = [
    PingCommand, PongCommand, HelpCommand, RandomNumberCommand
]