import { Command } from "../Command"
import { PingCommand, PongCommand } from "./PingCommand"

export const miscCommands: Command[] = [
    PingCommand, PongCommand
]