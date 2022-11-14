import { SlashCommandBuilder } from '@discordjs/builders';
import { Client, CommandInteraction, MessageEmbed } from 'discord.js';
import { EntreeUtilisateurCommande } from '../Command'
import { commandes } from '../../commands'
import {verifDroit} from '../../repositories/Autres/VerifDroitUtilisateur'

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

async function affichageHelp(interaction:CommandInteraction) {

    const messCommandHelp = new MessageEmbed()
	.setColor('#FF1515')
	.setTitle('Commande d\'aide')
	.setDescription('LLDA est un bot role play dans l\'univers du monde de Maled. Embarquez dans un vrai jeu mmorpg sur discord.')

    const categoryCommand: Map<string,EntreeUtilisateurCommande[]> = new Map

    const filtered  = await commandes.reduce(
        async (filtered, command) => (
            (await verifDroit(interaction.user.id, command.acces ?? "*"))? [...(await filtered), command]: filtered 
        ), 
        Promise.resolve<EntreeUtilisateurCommande[]>([])
    )
    filtered.reduce(
        (map, command) => {
            map.get(command.category)?.push(command) ?? map.set(command.category, [command])
            return map
        },
        new Map<string, EntreeUtilisateurCommande[]>()  
    ).forEach((commands, categoryName) => {
        messCommandHelp.addField('\u200B','``'+categoryName+'``')
        commands.forEach(command => messCommandHelp.addField('/'+command.data.name,command.data.description,true))
    })

    interaction.followUp({
        embeds: [messCommandHelp] ,
    })


    /*
    commandes.reduce(async (acc, command) => (await verifDroit(interaction.user.id, command.acces ?? "*"))? [...acc, command] : acc),[]).forEach(command => {
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
       
    })

    

    for (let category of categoryCommand.entries()) {
        console.log(category[0])
        if (category[0] !== "Help") {
            messCommandHelp.addField('\u200B','```'+category[0]+'```')
            category[1].forEach(c => {
                messCommandHelp.addField('/'+c.data.name,c.data.description,true)
            });
        }
    }
    */
}