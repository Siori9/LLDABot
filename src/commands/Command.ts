import { ChatInputApplicationCommandData, Client, CommandInteraction } from "discord.js";

export interface EntreeUtilisateurCommande {
    data: ChatInputApplicationCommandData 
    category: string
    lancer(client: Client, interaction: CommandInteraction): Promise<void>
}