import { SlashCommandBuilder } from '@discordjs/builders';
import { Client, CommandInteraction, ApplicationCommandNumericOptionData } from 'discord.js';
import { type } from 'os';
import { EntreeUtilisateurCommande } from '../Command'

export const RandomNumberCommand: EntreeUtilisateurCommande = {

    data: {
        name: 'randnum',
        description: 'Affiche des nombres aléatoires',
        descriptionLocalizations: {fr:'Affiche des nombres aléatoires'},
        options: [
            {
                name: 'min',
                description: 'Nombre minimum',
                type: 'INTEGER'
            } as ApplicationCommandNumericOptionData,
            {
                name: 'max',
                description: 'Nombre maximum',
                type: 'INTEGER'
            } as ApplicationCommandNumericOptionData,
            {
                name: 'rep',
                description: 'Nombre de tirage',
                type: 'INTEGER'
            } as ApplicationCommandNumericOptionData
        ]
    },

    category: "HorsRp",
    async lancer(_: Client, interaction: CommandInteraction): Promise<void> {
        await interaction.followUp({
            content: tirage(interaction), 
            /*
            content: draw({
                n: interaction.options.getInteger('rep'),
                min: interaction.options.getInteger('min'),
                max: interaction.options.getInteger('max')
            })
            */
        })
    }
}

function tirage(interaction:CommandInteraction) {
    let chaine = ""
    let repetition = interaction.options.getInteger('rep')

    if (repetition === null) {
        repetition = 1
    }

    for (let r = 0; r < repetition; r++) {
        chaine = chaine+genrateRandomNumber(interaction.options.getInteger('min'),interaction.options.getInteger('max')).toString()
        if (r !== repetition-1) {
            chaine = chaine+" | "
        }
    }
    return chaine
}

const genrateRandomNumber = (min: number | null, max: number | null) => {
    if(min === null){ 
        min = Math.ceil(1);
    } else {
        min = Math.ceil(min);
    }
    if(max === null){
        max = Math.ceil(10);
    } else {
        max = Math.ceil(max);
    }
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

//pour que tu voie une autre manière de faire (la tienne marche déjà)

function generateRandomNumberInRange(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min)
}

function draw({n, min, max}: {n?: number, min?: number, max?: number}): string {
    const fn = () => generateRandomNumberInRange(min ?? 1, max ?? 10)
    return Array(n ?? 1).map(fn).join(' | ')
}