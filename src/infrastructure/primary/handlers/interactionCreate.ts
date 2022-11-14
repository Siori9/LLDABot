import { Client, CommandInteraction, Interaction } from "discord.js"
import { EntreeUtilisateurCommande } from "../commands/Command"

export const onInteractionCreate = (client: Client, commands: EntreeUtilisateurCommande[]) => {
    client.on('interactionCreate', async (interaction: Interaction) => {
        if(interaction.isCommand()) {
          console.log(`Received command ${interaction}`)
          await onCommand(interaction)
        }
      })
    
    async function onCommand(command: CommandInteraction) {
        await command.deferReply()
        await commands.find(c => c.data.name === command.commandName)?.lancer(command.client, command)
    }
}

