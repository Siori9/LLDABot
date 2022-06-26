import { SlashCommandBuilder } from '@discordjs/builders';
import { Client, CommandInteraction } from 'discord.js';
import { Command } from '../Command'

export const PingCommand: Command = {
    data: new SlashCommandBuilder()
            .setName('ping')
            .setDescriptionLocalization('fr', 'Ping le bot')
            .setDescription('Ping the bot')
            .toJSON()
    ,
    async run(_: Client, interaction: CommandInteraction): Promise<void> {
        await interaction.followUp({
            content: `Pong ${interaction.user}`,
        })
    }
}

export const PongCommand: Command = {
    data: new SlashCommandBuilder()
            .setName('pong')
            .setDescriptionLocalization('fr', 'Pong le bot')
            .setDescription('Pong the bot')
            .toJSON()
    ,
    async run(_: Client, interaction: CommandInteraction): Promise<void> {
        await interaction.followUp({
            content: `Ping ! Je parle en verlen ${interaction.user}`,
        })
    }
}