'use strict'

const Discord = require('discord.js')
const config = require('./config')

const client = new Discord.Client()
const prefix = '!'

client.on('message', function(message) {
  if (message.author.bot) {
    return
  }
  if(!message.content.startsWith(prefix)) {
    return
  }

  const commandBody = message.content.slice(prefix.length)
  const args = commandBody.split(' ')
  const command = args.shift().toLowerCase()

  if(command === 'ping'){
    const timeToken = Date.now() - message.createdTimestamp
    message.reply(`Pong! This message had a latency of ${timeToken}ms`)
  }
})

client.login(config.BOT_TOKEN)



