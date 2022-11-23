import { Client, Intents } from 'discord.js'
import { commandes } from './infrastructure/primary/commands'
import { onceReady, onInteractionCreate } from './infrastructure/primary/handlers'
import './infrastructure/server'
import Database from './infrastructure/db'
import { devNull } from 'os'

const token = process.env.DISCORD_TOKEN

const bot = new Client({
  intents: [
    Intents.FLAGS.GUILDS, 
    Intents.FLAGS.GUILD_MESSAGES
  ]
})

export const db = new Database({
  poolConfig: {
    host: process.env.POSTGRESQL_ADDON_HOST,
    user: process.env.POSTGRESQL_ADDON_USER,
    password: process.env.POSTGRESQL_ADDON_PASSWORD,
    database: process.env.POSTGRESQL_ADDON_DATABASE,
    max: 5,
  }
})

onceReady(bot, commandes)
onInteractionCreate(bot, commandes)

bot.login(token)