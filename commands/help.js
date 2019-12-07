const discord = require("discord.js");
const { prefix } = require("../settings/config.json");

module.exports.run = async(bot, message, args) => {
    let embed = new discord.RichEmbed()
        .setTitle("Help!")
        .setDescription(bot.commands.map(o => `Name : **${o.help.name}** \nAliases : **${o.help.aliases}**`).join("\n")
            .setColor(bot.embedColor))
    message.channel.send(embed);
};

module.exports.help = {
    name: "help",
    aliases: []
};