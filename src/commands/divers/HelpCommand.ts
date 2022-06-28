import { SlashCommandBuilder } from '@discordjs/builders';
import { Client, CommandInteraction, MessageEmbed } from 'discord.js';
import { EntreeUtilisateurCommande } from '../Command'
import { commandes } from '../../commands'

export const HelpCommand: EntreeUtilisateurCommande = {
    data: {
        name: 'help',
        description: 'Affiche l\'ensemble des commandes disponibles avec leurs descriptions.',
        descriptionLocalizations: {fr:'Affiche l\'ensemble des commandes disponibles avec leurs descriptions.'},
    },
    category: "Help",
    async lancer(_: Client, interaction: CommandInteraction): Promise<void> {
        await affichageHelp(interaction)
    }
}

function affichageHelp(interaction:CommandInteraction) {

    const messCommandHelp = new MessageEmbed()
	.setColor('#FF1515')
	.setTitle('Commande d\'aide')
	.setDescription('LLDA est un bot role play dans l\'univers du monde de Maled. Embarquez dans un vrai jeu mmorpg sur discord.')

    const categoryCommand: Map<string,EntreeUtilisateurCommande[]> = new Map

    commandes.forEach(command => {
        let verif = 1
        for (let cat of categoryCommand.keys()) {
            if(cat === command.category){
                verif = 0
                categoryCommand.get(cat)?.push(command);
            }
        }
        if (verif) {
            categoryCommand.set(command.category,[command]);
        }
    });

    for (let category of categoryCommand.entries()) {
        if (category[0] !== "Help") {
            messCommandHelp.addField('\u200B','```'+category[0]+'```')
            category[1].forEach(c => {
                messCommandHelp.addField('/'+c.data.name,c.data.description,true)
            });
        }
    }

    interaction.followUp({
        embeds: [messCommandHelp] ,
    })
}