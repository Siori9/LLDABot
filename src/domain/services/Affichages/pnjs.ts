import { Pnj } from "../../domain/models/Pnjs/Pnj";
import { MessageEmbed, ColorResolvable } from 'discord.js';

export function affichageGuide(guide: Pnj | null):MessageEmbed{
    let couleur:ColorResolvable = "#999B99"

    switch (guide?.famille) {
        case 'Rubis':
            couleur = "#E20909";
            break;
        case 'Emmeraude':
            couleur = "#25D118";
            break;
        case 'Améthyste':
            couleur = "#BA14D4";
            break;
        case 'Saphir':
            couleur = "#341EF9";
            break;
        default:
            break;
    }

    const infoGuide = new MessageEmbed()
    .setColor(couleur)
    .setTitle(guide?.nom ?? 'Inconnu')
    
    .addField('\u200B','\u200B')
    .addField('Famille',guide?.famille ?? 'Inconnu',true)
    .addField('Age',guide?.age?.toString() ?? 'Inconnu',true)
    //.addField('Lieux d\'habitation',guide?.lieu ?? 'Inconnu',true)
    .addField('\u200B','\u200B')
    .addField('Devise',guide?.devise ?? 'Inconnu')
    .addField('\u200B','\u200B')
    .setDescription(guide?.description ?? 'Inconnu')
    .setImage(guide?.imageUrl ?? 'https://tse1.explicit.bing.net/th?id=OIP.DSr6qCx7SOReQiuVQf6shQHaGk&pid=Api&P=0&w=174&h=154.png')

    return infoGuide
}