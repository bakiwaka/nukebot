const Discord = require('discord.js');
const { Client, Intents } = require('discord.js');
const config = require("./config.json");
const fs = require("fs");

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_PRESENCES] });




client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

const prefix = config.prefix;

client.on('messageCreate', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return;

    try {
        client.commands.get(command).execute(message, args);
    } catch (error) {
        console.error(error);
        message.channel.send({content: 'Fehler beim Ausführen des Befehls! Schreibe Insane.#3448 an. **Error:** ' + error});
    }
});


client.login(config.token).then(r => console.log(`Eingeloggt als ${client.user.tag}!`)).catch(e => console.log(e));

client.on('ready', () => {
    client.user.setActivity('with your Server', { type: 'PLAYING' });
});
