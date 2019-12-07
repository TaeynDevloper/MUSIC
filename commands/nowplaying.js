const Discord = require('discord.js')
let embed = new Discord.RichEmbed();
let embed2 = new Discord.RichEmbed();

const utils = require("../global/utils");


module.exports.run = async (bot, message, args)  => {
  let queue = bot.queue.get(message.guild.id);
  
  let moment = require('moment');
  require('moment-duration-format');
  
  if (!queue) {
    message.channel.send(embed
                        .setAuthor(' | Queue is Empty af.' , bot.user.displayAvatarURL)
                        .setColor('#ed0202'))
  };
  let music = queue.musics[0]
  
  message.channel.send(embed2
                              .setColor(bot.embedColor)
                              .setAuthor(' | Now Playing!' , bot.user.displayAvatarURL)
                              .addField('Title' , `**[${music.title}](${music.url})**`)
                              .addField('Author' , `**[${music.ct}](${music.channelURL})**` , true)
                              .addField('Duration' , `**${moment.duration(music.duration).format("DD:HH:mm:ss")}**` , true)
                              .addField('Published' , `**${moment(music.published).format("dddd, MMMM do YYYY")}**`) 
                                   .setTimestamp()        
                              .setThumbnail(music.thumbnail))
  
};


module.exports.help = {
  
  name: 'nowplaying',
  aliases: ['np']
  
}