import { ApplicationCommandDataResolvable, Client, CommandInteraction } from "discord.js";

export interface Command {
    data: ApplicationCommandDataResolvable 
    run(client: Client, interaction: CommandInteraction): Promise<void>
}