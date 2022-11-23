import { ApplicationCommandOptionData, ChatInputApplicationCommandData, Client, CommandInteraction } from 'discord.js';
import { EntreeUtilisateurCommande } from '../Command'
import Mustache from 'mustache'

export class LoveCommand implements EntreeUtilisateurCommande {
    data: ChatInputApplicationCommandData = {
        name: 'love',
        description: 'Partage ton amour',
        descriptionLocalizations: {fr:'Partage ton amour'},
        options: [
            {
                name: 'destinataire',
                description: 'La personne destinataire du message (vous par defaut)',
                type: 'USER',
            } as ApplicationCommandOptionData,
        ]
    }
    category: string = "HorsRp"
    async lancer(_: Client, interaction: CommandInteraction): Promise<void> {
        var pseudo = {user: interaction.options.getUser('destinataire')?.username ?? interaction.user.username}
        const phrasePartage = ['Je t\'aimais, je t\'aime et je t\'aimerai {{user}} !', 'T\'es vraiment incroyable {{user}} !','{{user}}, tu illumine ce serveur comme un soleil !','J\'ai jamais été aussi heureux de connaitre {{user}} !','Coeur sur toi {{user}} !']
        const phrase = Mustache.render(phrasePartage[Math.floor(Math.random() * (phrasePartage.length - 1) + 1)-1], pseudo);
        await interaction.followUp({
            content: phrase,
        })
    }
}