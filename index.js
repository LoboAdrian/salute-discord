const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
})

client.login('TOKEN');

client.on('message', message => {
    console.log(message.content);
})

if (message.content === 'salute') {
    message.channel.send('Present Arms!');
}
