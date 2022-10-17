import { EntreeUtilisateurCommande } from "../Command"
import { HelpCommand } from "./HelpCommand"
import { LoveCommand } from "./LoveCommand"
import { PingCommand, PongCommand } from "./PingCommand"
import { RandomNumberCommand } from "./RandomNumberCommand"
import { Test, Test2 } from "./test"
import {commMulti } from "./commandMulti"

export const diversCommands: EntreeUtilisateurCommande[] = [
    PingCommand, PongCommand, HelpCommand, RandomNumberCommand, Test, Test2, LoveCommand, commMulti
]