const fs = require('fs');
const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Shows a list of available commands',
    execute(client, message, args) {

        let helpEmbed = new Discord.RichEmbed();
        
        const command_files = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
        
        for (const file of command_files) {
            const command = require(`../commands/${file}`);
            
            if (command.name) {
                helpEmbed.addField(command.name, command.description || "");
            } else {
                continue;
            }
        }
        
        message.channel.send(helpEmbed);

    }
}
