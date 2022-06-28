import { Client } from 'discord.js';
import { EntreeUtilisateurCommande } from '../commands/Command';

export const onceReady = (client: Client, commands: EntreeUtilisateurCommande[]) => {
    client.once('ready', async (client: Client) => {
        console.log(`Félicitations, ${client.user?.username} a été correctement initialisé !`);
        client.application?.commands.set(
          commands.map((command: EntreeUtilisateurCommande) => command.data)
        );
        (await client.application?.commands.fetch())?.forEach(c => console.log(`Loaded: ${c.name}`))
      })
}
