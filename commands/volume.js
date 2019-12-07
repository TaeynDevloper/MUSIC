const utils = require("../global/utils");
const config = require("../settings/config.json");
let Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  let queue = bot.queue.get(message.guild.id);
  if (!queue)
    return [
      message.delete(),
      utils.timed_msg("⚠ No musics are being played.", 5000)
    ];

  if (!args[0])
    return [
      message.delete(),
      message.channel.send(new Discord.RichEmbed()
                          .setDescription(`The Current Volume is **${queue.volume} / 100**`))
    ];
  if (isNaN(args[0]))
    return [
      message.delete(),
      utils.timed_msg(
        utils.cmd_fail(
          `${message.author}, please input a volume between 0 and 100 only!`,
          `${config.prefix}volume <volume>`
        ),
        5000
      )
    ];
  if (args[0] < 0 || args[0] > 100)
    return [
      message.delete(),
      utils.timed_msg(
        utils.cmd_fail(
          `${message.author}, please input a volume between 0 and 150 only!`,
          `${config.prefix}volume <volume>`
        ),
        5000
      )
    ];

  queue.volume = args[0];
  queue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);

  return message.channel.send(
    new Discord.RichEmbed()
    .setDescription(`Volume Has Been Set To **${queue.volume} / 100**`)
    .setColor(bot.embedColor)
    
  );
};

module.exports.help = {
  name: "volume",
  aliases: ["vol" , "v"]
};
