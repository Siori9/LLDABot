import { ChatInputApplicationCommandData, Client, CommandInteraction } from "discord.js";
import { EntreeUtilisateurSousCommande } from "./SousCommande";

export interface EntreeUtilisateurCommande {
    data: ChatInputApplicationCommandData
    category: string
    acces?: "admin" | "modo"
    lancer(client: Client, interaction: CommandInteraction): Promise<void>
    sousCommandes?: EntreeUtilisateurSousCommande[] 
}