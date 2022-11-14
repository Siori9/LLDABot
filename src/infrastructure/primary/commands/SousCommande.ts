import { ApplicationCommandSubCommandData, Client, CommandInteraction } from "discord.js";

export interface EntreeUtilisateurSousCommande {
    data: ApplicationCommandSubCommandData,
    lancer(client: Client, interaction: CommandInteraction): Promise<void>
}