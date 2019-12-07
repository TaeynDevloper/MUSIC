const utils = require('../global/utils');
const config = require('../settings/config.json');
const discord = require('discord.js');
const embed = new discord.RichEmbed();

module.exports.run = async (bot, message, args) => {
  let queue = bot.queue.get(message.guild.id)
  const vcvote = Math.floor(message.guild.me.voiceChannel.members.size / 2)
  const oki = Math.floor(message.guild.me.voiceChannel.members.size / 2 - 1)
 if(message.member.roles.find("name", "DJ")){
  let queue = bot.queue.get(message.guild.id);
  if (!message.member.voiceChannel) return [message.delete(), utils.timed_msg(utils.cmd_fail(`${message.author}, please join a voice channel to run this command!`, `${config.prefix}skip`), 5000)];
    if (!queue) return [message.delete(), utils.timed_msg('🎧 **No Music Found, Being Played to Skip**. Use `+play` to Play Music!', 5000)];
  queue.connection.dispatcher.end()}
  else if(message.guild.me.voiceChannel.members.size < 3){
    let queue = bot.queue.get(message.guild.id);
    if (!message.member.voiceChannel) return [message.delete(), utils.timed_msg(utils.cmd_fail(`${message.author}, please join a voice channel to run this command!`, `${config.prefix}skip`), 5000)];
      if (!queue) return [message.delete(), utils.timed_msg('🎧 **No Music Found, Being Played to Skip**. Use `+play` to Play Music!', 5000)];
    queue.connection.dispatcher.end()}
  else if (message.guild.me.voiceChannel.members.size < 3) {
    if (!queue) return [message.delete(), utils.timed_msg('🎧 **No Music Found, Being Played to Skip**. Use `+play` to Play Music!', 5000)];
    if (!message.author.voiceChannel) return [message.delete(), utils.timed_msg(utils.cmd_fail(`${message.author}, please join a voice channel to run this command!`, `${config.prefix}skip`), 5000)];
    else return queue.connection.dispatcher.end()
  }
  else
  {
    let queue = bot.queue.get(message.guild.id);
    let votes = bot.votes.get(message.guild.id);
    if (!message.member.voiceChannel) return [message.delete(), utils.timed_msg(utils.cmd_fail(`${message.author}, please join a voice channel to run this command!`, `${config.prefix}skip`), 5000)];
    if (!queue) return [message.delete(), utils.timed_msg('🎧 **No Music Found, Being Played to Skip**. Use `+play` to Play Music!', 5000)];

    if (!message.member.hasPermission('ADMINISTRATOR')) {
        if (votes.voters.includes(message.author.id)) return [message.delete(), utils.timed_msg(utils.cmd_fail(`🎫 ${message.author}, you have already voted! **${votes.votes}/${vcvote}** votes`, `${config.prefix}skip`), 5000)];

        votes.votes++
        votes.voters.push(message.author.id);
        message.channel.send(embed.setDescription(`You have voted to skip the current song! ${votes.votes}/${vcvote} votes currently. We need ${Math.floor(vcvote - votes.votes)} more to skip this song!`).setColor(message.guild.me.displayHexColor));
       if(!queue) return [message.delete(), utils.timed_msg('🎧 **No Music Found, Being Played to Skip**. Use `+play` to Play Music!', 5000)];
        if (votes.votes > oki) return queue.connection.dispatcher.end();
    } else return queue.connection.dispatcher.end();
    
}};

module.exports.help = {
    name: 'skip',
    aliases: ['s','next','sk','nxt']
};