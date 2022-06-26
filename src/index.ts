import { Client, Intents } from 'discord.js'
import { commands } from './commands'
import { onceReady, onInteractionCreate } from './handlers'
import { connect } from './db'
import './server'

const token = process.env.DISCORD_TOKEN

const bot = new Client({
  intents: [
    Intents.FLAGS.GUILDS, 
    Intents.FLAGS.GUILD_MESSAGES
  ]
})

connect().then(() => {
  console.log("Successfuly connected to database")
})

onceReady(bot, commands)
onInteractionCreate(bot, commands)

bot.login(token)