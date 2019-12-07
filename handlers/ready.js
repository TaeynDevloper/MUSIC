const { token } = require("../settings/credentials.json");
const { prefix } = require("../settings/config.json")

module.exports = {
  ready: bot => {
   bot.login(token)
    bot.on("ready", () => {
      bot.user.setActivity("Cadmium Music", { type: "LISTENING" });
      bot.user.setStatus("online");
      console.log("I am Ready! id:" + bot.user.id);
    });
  }
};
