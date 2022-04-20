const Discord = require("discord.js");
const {MessageEmbed} = require("discord.js");

module.exports = {
    name: "coder",
    description: "Coder",

    execute(message) {
        const embed = new MessageEmbed()
            .setColor("RED")
            .setTitle("Coder")
            .setDescription("Here are all my Coders! :)")
            .addField("Creator and Coder", "`Insane.#3448`")
            .setTimestamp()
        message.reply({embeds: [embed]});
    }
}