import { SlashCommandBuilder } from '@discordjs/builders';
import { Client, CommandInteraction } from 'discord.js';
import { EntreeUtilisateurCommande } from '../Command'

export const PingCommand: EntreeUtilisateurCommande = {
    data: {
        name: 'ping',
        description: 'Ping the bot',
        descriptionLocalizations: {fr:'Ping le bot'},
    },
    category: "HorsRp",
    async lancer(_: Client, interaction: CommandInteraction): Promise<void> {
        await interaction.followUp({
            content: `Pong ${interaction.user}`,
        })
    }
}

export const PongCommand: EntreeUtilisateurCommande = {
    data: {
        name: 'pong',
        description: 'Pong the bot',
        descriptionLocalizations: {fr:'Pong le bot'},
    },
    category: "HorsRp",
    async lancer(_: Client, interaction: CommandInteraction): Promise<void> {
        await interaction.followUp({
            content: `Ping ! Je parle en verlen ${interaction.user}`,
        })
    }
}