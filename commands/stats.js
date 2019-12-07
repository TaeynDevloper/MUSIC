let Discord = require('discord.js');
let moment = require('moment');
require('moment-duration-format');

module.exports.run = async (bot, message, args) => {
  
  let embed = new Discord.RichEmbed()
  .setAuthor("Bot Info" , bot.user.displayAvatarURL)
  .addField("Basics" , `Tag : **${bot.user.tag}** \nID : ${bot.user.id}`)
  .addField("Status" , `Presence : **${bot.user.presence.game.name}** \nStats : **${bot.user.presence.status.toUpperCase()}**`)
  .addField("Counts" , `Guilds : **${bot.guilds.size}** \nChannels : **${bot.channels.size}** \nUsers : **${bot.users.size}**`)
  .addField("Runtime" , `Uptime : **${moment.duration(bot.uptime).format('DD:HH:mm:ss')}** \nAPI : **${Math.floor(bot.ping)}ms** \nBOT : **${Math.floor(Date.now() - message.createdTimestamp)}ms**`)
  .setThumbnail(bot.user.displayAvatarURL)
  .setColor(bot.embedColor)
  .setTimestamp();
  

  
  
  
  message.channel.send(embed)
}

module.exports.help = {
  name: 'stats',
  aliases: ['botinfo']
}