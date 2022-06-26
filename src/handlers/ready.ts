import { Client } from 'discord.js';
import { Command } from '../commands/Command';

export const onceReady = (client: Client, commands: Command[]) => {
    client.once('ready', async (client: Client) => {
        console.log(`Félicitations, ${client.user?.username} a été correctement initialisé !`);
        client.application?.commands.set(
          commands.map((command: Command) => command.data)
        );
        (await client.application?.commands.fetch())?.forEach(c => console.log(`Loaded: ${c.name}`))
      })
}
