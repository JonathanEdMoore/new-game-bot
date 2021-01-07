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
  if(message.channel.name !== 'create-new-game'){
    message.reply(`Command must be made in the "create-new-game channel".`)
    return
  }

  const commandBody = message.content.slice(prefix.length)
  const args = commandBody.split(' ')
  const command = args.shift().toLowerCase()

  if(command === 'ping'){
    const timeToken = Date.now() - message.createdTimestamp
    message.reply(`Pong! This message had a latency of ${timeToken}ms`)
  }

  else if(command ==='create'){
    message.guild.channels.create(args[0], {
      type: 'text'
    }).then((channel) => {
      const categoryId = '796486294271688765'
      channel.setParent(categoryId)
    })
  }
})

client.login(config.BOT_TOKEN)



