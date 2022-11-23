// import { Client, CommandInteraction, ApplicationCommandOptionData } from 'discord.js';
// import { EntreeUtilisateurCommande } from '../Command'
// import { infoPnjs } from '../../repositories/Pnjs/RécupInfoPnj';
// import { affichageGuide } from '../../services/Affichages/pnjs';


// export const InfoGuide: EntreeUtilisateurCommande = {

//     data: {
//         name: 'infoguide',
//         description: 'Affiche les informations du guide demandé',
//         descriptionLocalizations: {fr:'Commande de test'},
//         options: [
//             {
//                 name: 'nom',
//                 description: 'Nom du guide',
//                 type: 'STRING',
//                 required: true
//             } as ApplicationCommandOptionData,
//         ]
//     },
//     category: "Information",
//     async lancer(_: Client, interaction: CommandInteraction): Promise<void> {

//         const nom = interaction.options.getString('nom')

//         if(nom) {
//             const guide = await infoPnjs(nom)
            
//             await interaction.followUp({
//                 embeds: [affichageGuide(guide)]
//             })
//         } else {
//             await interaction.followUp({
//                 content: 'Le guide n\'a pas été trouvé'
//             })
//         }
        
        
//     }
// }