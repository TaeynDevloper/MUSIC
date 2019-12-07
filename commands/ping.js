let Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  
  
  

  message.channel.send("Pinging...").then(m => m.edit(new Discord.RichEmbed()
                                                     .setAuthor(`Ping` , bot.user.displayAvatarURL)
                                                     .setDescription(`API Ping : **${Math.floor(bot.ping)}ms** \nBOT Ping : **${Math.floor(Date.now() - m.createdTimestamp)}ms**`)
                                                      .setColor(bot.embedColor)
                                                      .setTimestamp()
                                                     ))
  
  
  
};



module.exports.help = {
name: 'ping',
aliases: ['pong']
};