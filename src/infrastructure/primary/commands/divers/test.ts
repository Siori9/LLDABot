// import { Client, CommandInteraction, ApplicationCommandNumericOptionData, ApplicationCommandOptionData } from 'discord.js';
// import { EntreeUtilisateurCommande } from '../Command'
// import mongoose from 'mongoose';
// import { nouvPerso } from '../../repositories/Users/CreerPerso'
// import { suppPerso } from '../../repositories/Users/SuppPerso'
// import { modifPerso } from '../../repositories/Users/ModifPerso'
// import { PersonnageEntity, Personnage} from '../../domain/models/Users/Personnage'

// export const Test: EntreeUtilisateurCommande = {

//     data: {
//         name: 'test',
//         description: 'Commande de test',
//         descriptionLocalizations: {fr:'Commande de test'},
//         options: [
//             {
//                 name: 'nom',
//                 description: 'Nom personnage',
//                 type: 'STRING',
//                 required: true
//             } as ApplicationCommandOptionData,
//         ]
//     },
//     category: "Commande de test",
//     acces: "admin",
//     async lancer(_: Client, interaction: CommandInteraction): Promise<void> {

//         const user = interaction.client.user?.id
//         const guide = new mongoose.Types.ObjectId()
//         const nom = interaction.options.getString('nom')

//         if(user && nom) {
//             nouvPerso?.(user, nom, guide, [], [])
//             await interaction.followUp({
//                 content: 'Personnage créé'
//             })
//         } else {
//             await interaction.followUp({
//                 content: 'Le personnage n\'a pas pu être créé'
//             })
//         }
        
        
//     }
// }

// export const Test2: EntreeUtilisateurCommande = {

//     data: {
//         name: 'test2',
//         description: 'Commande de test',
//         descriptionLocalizations: {fr:'Commande de test'},
//         options: [
//             {
//                 name: 'id',
//                 description: 'Id personnage',
//                 type: 'STRING',
//                 required: true
//             } as ApplicationCommandOptionData,
//         ]
//     },
//     category: "Commande de test",
//     acces: "admin",
//     async lancer(_: Client, interaction: CommandInteraction): Promise<void> {
//         const idString = interaction.options.getString('id') ?? ""
//         const id = new mongoose.Types.ObjectId(idString)

//         const elem:Partial<Personnage> = {
//             nom: 'toto',
//             caracteristiques: {
//                 force: 10,
//                 vitalite: 1,
//                 resistance: 1,
//                 precision: 1,
//                 intelligence: 1,
//                 rapidite: 1,
//                 magie: 1
//             }
//         }
        
//         //suppPerso(id)

//         modifPerso(id,elem)
//         await interaction.followUp({
//             content: 'Personnage supprimé'
//         }) 
//     }
// }
