import { Client, CommandInteraction, ApplicationCommandNumericOptionData, ApplicationCommandOptionData } from 'discord.js';
import { EntreeUtilisateurCommande } from '../Command'
import mongoose from 'mongoose';
import { nouvPerso } from '../../repositories/Users/CreerPerso'

export const Test: EntreeUtilisateurCommande = {

    data: {
        name: 'test',
        description: 'Commande de test',
        descriptionLocalizations: {fr:'Commande de test'},
        options: [
            {
                name: 'nom',
                description: 'Nom personnage',
                type: 'STRING',
                required: true
            } as ApplicationCommandOptionData,
        ]
    },

    category: "HorsRp",
    async lancer(_: Client, interaction: CommandInteraction): Promise<void> {

        const user = interaction.client.user?.id
        const guide = new mongoose.Types.ObjectId()
        const nom = interaction.options.getString('nom')

        if(user && nom) {
            nouvPerso?.(user, nom, guide, [], [])
            await interaction.followUp({
                content: 'Personnage créé'
            })
        } else {
            await interaction.followUp({
                content: 'Le personnage n\'a pas pu être créé'
            })
        }
        
        
    }
}
