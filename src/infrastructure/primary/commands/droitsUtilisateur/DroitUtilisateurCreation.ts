import { randomUUID } from "crypto";
import { ApplicationCommandChoicesData, ApplicationCommandOptionData, CacheType, ChatInputApplicationCommandData, Client, CommandInteraction } from "discord.js";
import { DroitsUtilisateurService } from "../../../../domain/services/DroitsUtilisateurService";
import { EntreeUtilisateurCommande } from "../Command";

export class DroitUtilisateurCreationCommande implements EntreeUtilisateurCommande {
    data: ChatInputApplicationCommandData = {
        name: 'creer-droits',
        description: 'Crée un droit utilisateur',
        options: [
            {
                name: 'tag',
                description: 'tag',
                type: 'STRING',
                required: true
            } as ApplicationCommandOptionData,
            {
                name: 'id-utilisateur',
                description: 'id-utilisateur',
                type: 'STRING',
                required: true
            } as ApplicationCommandOptionData,
            {
                name: 'role',
                description: 'role',
                choices: [
                    { name: 'admin', value: 'admin' },
                    { name: 'modo', value: 'modo' }
                ],
                required: true,
                type: 'STRING'
            } as ApplicationCommandChoicesData,
        ]
    }
    category: string = 'HorsRP'
    acces?: "admin"
    service: DroitsUtilisateurService;
    async lancer(client: Client<boolean>, interaction: CommandInteraction<CacheType>): Promise<void> {
        const tagUtilisateur = interaction.options.getString('tag-utilisateur', true)
        const role = interaction.options.getString('role', true) as ('modo' | 'admin')
        const idUtilisateur = interaction.options.getString('id-utilisateur', true)
        const droit = this.service.create({
            id: randomUUID(),
            idUtilisateur: idUtilisateur,
            tagUtilisateur: tagUtilisateur,
            role: role,
        }) 
        interaction.followUp(JSON.stringify(droit))
    }
    constructor(service: DroitsUtilisateurService) {
        this.service = service
    }
}