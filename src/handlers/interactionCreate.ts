import { Client, CommandInteraction, Interaction } from "discord.js"
import { Command } from "../commands/Command"

export const onInteractionCreate = (client: Client, commands: Command[]) => {
    client.on('interactionCreate', async (interaction: Interaction) => {
        if(interaction.isCommand()) {
          console.log(`Received command ${interaction}`)
          await onCommand(interaction)
        }
      })
    
    async function onCommand(command: CommandInteraction) {
        await command.deferReply()
        await commands.find(c => c.data.name === command.commandName)?.run(command.client, command)
    }
}

