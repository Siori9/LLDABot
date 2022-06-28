import { EntreeUtilisateurCommande } from "../Command"
import { HelpCommand } from "./HelpCommand"
import { PingCommand, PongCommand } from "./PingCommand"
import { RandomNumberCommand } from "./RandomNumberCommand"
import { Test } from "./test"

export const diversCommands: EntreeUtilisateurCommande[] = [
    PingCommand, PongCommand, HelpCommand, RandomNumberCommand, Test
]