import { ApplicationCommandOptionBase, SlashCommandBuilder } from '@discordjs/builders';
import { Client, CommandInteraction, ApplicationCommandNumericOptionData, ApplicationCommandOptionData, ApplicationCommand, ApplicationCommandData, ApplicationCommandSubCommand, ApplicationCommandSubCommandData, Options, ApplicationCommandChoicesOption, CacheType, ChatInputApplicationCommandData } from 'discord.js';
import { type } from 'os';
import mongoose, { isObjectIdOrHexString } from 'mongoose';
import { nouvPerso } from '../../repositories/Users/CreerPerso'
import { EntreeUtilisateurCommande } from '../Command'
import { EntreeUtilisateurSousCommande } from '../SousCommande';
import { nouvGuide, nouvPnj } from '../../repositories/Pnjs/CreerPnj';

const sousCommandes: EntreeUtilisateurSousCommande[] = [
    {
        data: {
            name: 'personnage',
            description: 'création d\'un personnage',
            type: 'SUB_COMMAND',
            options: [
                {
                    name: 'nom',
                    description: 'Le nom du personnage',
                    type: 'STRING',
                    required: true
                },
                {
                    name: 'guide',
                    description: 'Le guide du personnage',
                    type: 'STRING',
                    choices: [
                        {
                            name: "Lyra",
                            value: "62bc4da543ffac3ff294d800"
                        },
                        {
                            name: "Kwyne",
                            value: "62bc4dea97c70f3305071ab0"
                        },
                        {
                            name: "Yuki",
                            value: "62bc513597c70f3305071ab1"
                        },
                        {
                            name: "Hana",
                            value: "62bc541597c70f3305071ab2"
                        },
                    ],
                    required: true
                } as ApplicationCommandChoicesOption,
                {
                    name: 'proprietaire',
                    description: 'La personne a qui appartient le personnage (la personne exécutant la commande par défaut)',
                    type: 'USER',
                },
            ]
        },
        async lancer(_: Client, interaction: CommandInteraction): Promise<void> {
            var proprio = interaction.options.getUser('proprietaire')?.id ?? interaction.user.id
            var nom = interaction.options.getString('nom') ?? "Vide"
            var guide = new mongoose.Types.ObjectId(interaction.options.getString('guide') ?? undefined)
            
            nouvPerso(proprio,nom,guide,[],[])

            await interaction.followUp({
                content: "Le personnage "+nom+" a bien été créé !",
            })
        }
    },
    {
        data: {
            name: 'pnj',
            description: 'création d\'un pnj',
            type: 'SUB_COMMAND',
            options: [
                {
                    name: 'nom',
                    description: 'Nom de votre choix',
                    type: 'STRING',
                    required: true
                },
                {
                    name: 'famille',
                    description: 'Famille du pnj',
                    type: 'STRING',
                    choices: [
                        {
                            name: 'Emmeraude',
                            value: 'Emmeraude'
                        },
                        {
                            name: 'Rubis',
                            value: 'Rubis'
                        },
                        {
                            name: 'Saphir',
                            value: 'Saphir'
                        },
                        {
                            name: 'Améthyste',
                            value: 'Améthyste'
                        },
                        {
                            name: 'Prophète',
                            value: 'Prophète'
                        },
                        {
                            name: 'Orbe de feu',
                            value: 'Orbe de feu'
                        },
                        {
                            name: 'autre',
                            value: 'autre'
                        },
                    ],
                    required: true
                } as ApplicationCommandChoicesOption,
                {
                    name: 'description',
                    description: 'Description du pnj',
                    type: 'STRING',
                    required: true
                },
                {
                    name: 'image',
                    description: 'Url de l\'image souhaitée',
                    type: 'STRING',
                },
                {
                    name: 'age',
                    description: 'Age du pnj',
                    type: 'NUMBER',
                },
                {
                    name: 'devise',
                    description: 'Devise du pnj',
                    type: 'STRING',
                },
                {
                    name: 'lieu',
                    description: 'Id du lieu où se trouve le pnj',
                    type: 'STRING',
                },
                {
                    name: 'metier',
                    description: 'Metier du pnj',
                    type: 'STRING',
                },
            ]
        },
        async lancer(_: Client, interaction: CommandInteraction): Promise<void> {
            nouvPnj({
                nom: interaction.options.getString('nom', true),
                imageUrl: interaction.options.getString('image') ?? undefined,
                famille: interaction.options.getString('famille', true),
                description: interaction.options.getString('description', true),
                age: interaction.options.getNumber('age') ?? undefined,
                devise: interaction.options.getString('devise') ?? undefined, 
                lieu: interaction.options.getString('lieu') ?? undefined,
                metier: interaction.options.getString('metier') ?? undefined
        })

            await interaction.followUp({
                content: "Le pnj "+interaction.options.getString('nom',true)+" a bien été créé !",
            })
        }
    },
    {
        data: {
            name: 'guide',
            description: 'création d\'un guide',
            type: 'SUB_COMMAND',
            options: [
                {
                    name: 'nom',
                    description: 'Nom de votre choix',
                    type: 'STRING',
                    required: true
                },
                {
                    name: 'famille',
                    description: 'Famille du pnj',
                    type: 'STRING',
                    choices: [
                        {
                            name: 'Emmeraude',
                            value: 'Emmeraude'
                        },
                        {
                            name: 'Rubis',
                            value: 'Rubis'
                        },
                        {
                            name: 'Saphir',
                            value: 'Saphir'
                        },
                        {
                            name: 'Améthyste',
                            value: 'Améthyste'
                        },
                        {
                            name: 'Prophète',
                            value: 'Prophète'
                        },
                        {
                            name: 'Orbe de feu',
                            value: 'Orbe de feu'
                        },
                        {
                            name: 'autre',
                            value: 'autre'
                        },
                    ],
                    required: true
                } as ApplicationCommandChoicesOption,
                {
                    name: 'description',
                    description: 'Description du pnj',
                    type: 'STRING',
                    required: true
                },
                {
                    name: 'image',
                    description: 'Url de l\'image souhaitée',
                    type: 'STRING',
                },
                {
                    name: 'age',
                    description: 'Age du pnj',
                    type: 'NUMBER',
                },
                {
                    name: 'devise',
                    description: 'Devise du pnj',
                    type: 'STRING',
                },
                {
                    name: 'lieu',
                    description: 'Id du lieu où se trouve le pnj',
                    type: 'STRING',
                },
                {
                    name: 'metier',
                    description: 'Metier du pnj',
                    type: 'STRING',
                },
            ]
        },
        async lancer(_: Client, interaction: CommandInteraction): Promise<void> {
            nouvGuide({
                nom: interaction.options.getString('nom', true),
                imageUrl: interaction.options.getString('image') ?? undefined,
                famille: interaction.options.getString('famille', true),
                description: interaction.options.getString('description', true),
                age: interaction.options.getNumber('age') ?? undefined,
                devise: interaction.options.getString('devise') ?? undefined, 
                lieu: interaction.options.getString('lieu') ?? undefined,
                metier: interaction.options.getString('metier') ?? undefined
        })

            await interaction.followUp({
                content: "Le guide "+interaction.options.getString('nom', true)+" a bien été créé !",
            })
        }
    }
]

export const CreaCommand: EntreeUtilisateurCommande = {

    data: {
        name: 'crea',
        description: 'Créer un objet dans la base de donnée',
        options: sousCommandes.map(sc => sc.data),
    },
    sousCommandes: sousCommandes,
    category: "admin",
    async lancer(_: Client, interaction: CommandInteraction): Promise<void> {
        await sousCommandes
            .find((sousCommande) => sousCommande.data.name === interaction.options.getSubcommand())
            ?.lancer(_, interaction)
    }
}