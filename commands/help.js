const Discord = require("discord.js");


module.exports = {
    name: "help",
    description: "Displays all commands",

    execute(message) {
        const embed = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle("Commands")
            .setDescription("What do you think I can??? Try `+nuke`")
            .setTimestamp()
        message.reply({embeds: [embed]});
    }
}