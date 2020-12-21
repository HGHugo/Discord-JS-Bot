const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
const botSettings = require("./botsettings.json");

const prefix = "!";


client.on('ready', () => {
  console.log(`Demmarage du bot : ${client.user.tag}!`);
  client.user.setPresence({ activity: { name: 'H Bots - Bot test :-)' }, status: 'online' })
  .then(console.log)
  .catch(console.error);
});

client.on('message', msg => {
  if (msg.author.bot) return;
  if (msg.channel.type === "dm") return;
  
  let msgArray = msg.content.split(" ");
	let command = msgArray[0];
  let args = msgArray.slice(1);
  
  if (!msg.content.startsWith(prefix)) return;

    if (msg.content === `${prefix}ping`) {
      msg.reply('Pong!');
    }
  
});
// Add role avec !role
client.on('message', message => {
    if (message.content === `${prefix}role`) {
      const member = message.member;
      let role = message.guild.roles.cache.find(r => r.id === "757973944861982880")
      member.roles.add(role).catch(console.error);
      message.author.send("Vous avez bien été **vérifié** " + member.user.id)
    }
  
});

client.login(botSettings.token);