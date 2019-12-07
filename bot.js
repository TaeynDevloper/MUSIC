const express = require("express");
const app = express();

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendFile(__dirname + '/views/kek.html');
  console.log('Ping : ' + Date.now())
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});

const discord = require("discord.js");
const ytdl = require("ytdl-core");
const YouTube = require("simple-youtube-api");
const ready = require("./handlers/ready");
const message = require("./handlers/message");
const config = require("./settings/config.json");
const { YouTubeAPIKey } = require("./settings/credentials.json");
const utils = require("./global/utils");
const bot = new discord.Client();

require("./global/functions")(bot, utils, ytdl, config);

bot.commands = new discord.Collection();
bot.aliases = new discord.Collection();
bot.youtube = new YouTube(YouTubeAPIKey); // YouTube Client
bot.queue = new Map(); // Music Queue
bot.votes = new Map(); // Vote Skip
bot.embedColor = config.embedColor //embed color
ready.ready(bot);
message.message(bot, utils, config, discord);
