/* eslint-disable no-undef */
/* eslint-disable quotes */
'use strict'

const Discord = require('discord.js')
const config = require('./config')


const client = new Discord.Client()

const prefix = '!'

const newGames = '796486294271688765'

const currGames = '796486354359549993'


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

  else if(command ==='create'){
    if(message.channel.name !== 'create-new-game'){
      message.reply(`Command must be made in the "create-new-game" channel.`)
      return
    }
    message.guild.channels.create(args[0], {
      type: 'text'
    }).then((channel) => {
      channel.setParent(newGames)
    })
  }

  else if (command === 'start'){
    if(message.channel.parent.id !== newGames){
      message.reply(`Command must be made in a channel that belongs to the "New Games" category.`)
      return
    }
    message.channel.setParent(currGames)
  }
})

client.login(config.BOT_TOKEN)



