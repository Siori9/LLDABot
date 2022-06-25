import { Client, Intents, Message } from 'discord.js'
import './server'

const bot = new Client({
  intents: [Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGES]
})

const token = process.env.DISCORD_TOKEN

bot.once('ready', () => {
   console.log('Félicitations, votre bot Discord a été correctement initialisé !');
})

/** 
 * attention l'évenement 'message' sur un Client est déprécié d'après la doc discord
 * @see https://discord.js.org/#/docs/discord.js/stable/class/Client?scrollTo=e-message
 * du coup ils disent qu'il faut utiliser 'messageCreate' maintenant qui est pareil
*/

//C'était juste un simple test 
//j'imagine oui ^^ c'est juste que j'ai vu ça en cherchant sur la doc de Discord je me suis dit que ça t'aiderais
bot.on('messageCreate', (message: Message) => {
    console.log(message)
    if (message.content === "!poufpouf") {
      message.channel.send("Pong.")
    }
})

bot.login(token)