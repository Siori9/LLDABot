import { Command } from "./Command"
import { miscCommands } from "./misc"

export const commands: Command[] = [
    miscCommands
].flat()