// import { ApplicationCommandOptionBase, SlashCommandBuilder } from '@discordjs/builders';
// import { Client, CommandInteraction, ApplicationCommandNumericOptionData, ApplicationCommandOptionData, ApplicationCommand, ApplicationCommandData, ApplicationCommandSubCommand, ApplicationCommandSubCommandData, Options, ApplicationCommandChoicesOption, CacheType, ChatInputApplicationCommandData } from 'discord.js';
// import { type } from 'os';
// import { EntreeUtilisateurCommande } from '../Command'
// import { EntreeUtilisateurSousCommande } from '../SousCommande';

// const sousCommandes: EntreeUtilisateurSousCommande[] = [
//     {
//         data: {
//             name: 'souscommand1',
//             description: 'desc',
//             type: 'SUB_COMMAND',
//             options: [
//                 {
//                     name: 'min',
//                     description: 'Nombre minimum',
//                     type: 'INTEGER'
//                 } as ApplicationCommandNumericOptionData,
//             ]
//         },
//         async lancer(_: Client, interaction: CommandInteraction): Promise<void> {

//         }
//     },
//     {
//         data: {
//             name: 'souscommand2',
//             description: 'desc',
//             type: 'SUB_COMMAND',
//             options: [
//                 {
//                     name: 'nom',
//                     description: 'Nom de votre choix',
//                     type: 'STRING'
//                 }
//             ]
//         },
//         async lancer(_: Client, interaction: CommandInteraction): Promise<void> {

//         }
//     }
// ]

// export const commMulti: EntreeUtilisateurCommande = {

//     data: {
//         name: 'commmulti',
//         description: 'Affiche des nombres aléatoires',
//         descriptionLocalizations: { fr: 'Affiche des nombres aléatoires' },
//         options: sousCommandes.map(sc => sc.data),
//     },
//     sousCommandes: sousCommandes,
//     category: "admin",
//     async lancer(_: Client, interaction: CommandInteraction): Promise<void> {
//         await sousCommandes
//             .find((sousCommande) => sousCommande.data.name === interaction.options.getSubcommand())
//             ?.lancer(_, interaction)
//     }
// }