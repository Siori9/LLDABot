import { Client, Intents } from 'discord.js'
import { commandes } from './commands'
import { onceReady, onInteractionCreate } from './handlers'
import './server'
import pool from './infrastructure/db'

const token = process.env.DISCORD_TOKEN

const bot = new Client({
  intents: [
    Intents.FLAGS.GUILDS, 
    Intents.FLAGS.GUILD_MESSAGES
  ]
})

onceReady(bot, commandes)
onInteractionCreate(bot, commandes)

bot.login(token)