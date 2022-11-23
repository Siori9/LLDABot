// import { SlashCommandBuilder } from '@discordjs/builders';
// import { Client, CommandInteraction,ApplicationCommandOptionData } from 'discord.js';
// import { EntreeUtilisateurCommande } from '../Command'
// // import {nouvModo} from '../../repositories/Autres/CreerNouvDroitUtilisateur'
// // import {verifDroit} from '../../repositories/Autres/VerifDroitUtilisateur'

// export const ModoCommand: EntreeUtilisateurCommande = {
//     data: {
//         name: 'nouvmodo',
//         description: 'Ajoute un nouveau modérateur',
//         descriptionLocalizations: {fr:'Ajoute un nouveau modérateur'},
//         options: [
//             {
//                 name: 'tag',
//                 description: 'Tag de la personne',
//                 type: 'STRING',
//                 required: true
//             } as ApplicationCommandOptionData,
//             {
//                 name: 'id',
//                 description: 'Id de la personne',
//                 type: 'STRING',
//                 required: true
//             } as ApplicationCommandOptionData,
//         ]
//     },
//     category: "Gestion",
//     acces: "admin",
//     async lancer(_: Client, interaction: CommandInteraction): Promise<void> {

//         const tag = interaction.options.getString('tag')
//         const id = interaction.options.getString('id')

//         if(await verifDroit(interaction.user.id,'admin')){
//             if(tag && id) {
//                 nouvModo?.(tag, id)
//                 await interaction.followUp({
//                     content: `Modo validé <@${id}>`
//                 })
//             } else {
//                 await interaction.followUp({
//                     content: 'Modo invalide'
//                 })
//             }
//         } else {
//             await interaction.followUp({
//                 content: 'Vous n\'avez pas les droit d\'effectuer cette commande'
//             })
//         }
//     }
// }