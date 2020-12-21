const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
const botSettings = require("./botsettings.json");

const prefix = "!";


client.on('ready', () => {
  console.log(`Demmarage du bot : ${client.user.tag}!`);
  client.user.setPresence({ activity: { name: 'SIO Bots - !h commands' }, status: 'online' })
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

   if (msg.content.startsWith(`${prefix}rrusse`)) {
    const replies = [
      "\:relaxed: \:gun: Encore vivant ? Dommage, rejouez et mourez ! \:rage:",
	  "\:relaxed: \:gun: Encore vivant ? Dommage, rejouez et mourez ! \:rage:",
      "\:skull: \:dizzy_face: \:gun:  Vous êtes mort, dommage ..."];
      msg.replytext = Math.floor((Math.random() * replies.length) + 0);
    msg.reply(replies[msg.replytext]);
    }

    if (msg.content === `${prefix}ping`) {
      msg.reply('Pong!');
    }
  
});

    // Message Embed
client.on('message', msg => {
    if (msg.content === `${prefix}site`) {
      const embed = new MessageEmbed()
        .setTitle('WebApp BTS SIO')
        .setDescription("Liens vers le webapp.  https://bts-sio-efrei.systems/")
        .setColor("#121d7c")
        .setURL("https://bts-sio-efrei.systems/")
      msg.channel.send({embed});
    }
});
client.on('message', msg => {
    if(msg.content === `${prefix}h`) {
      const embed = new MessageEmbed()
        .setDescription(
          `
            ▬▬▬▬▬ Panel d'aide de commandes ▬▬▬▬
  
             ►  Programme version 1.0.0
  
            - !hp : Affiche les autres pages du pendu	
            - !p help	: Recoit par MP les commandes d'aide du pendu.
            - !site : Affiche le lien du webapp.
            - !hpm : Affiche le panel d'aide des commandes du futur bot music.
        
        ► Page 1/2
  `)
        .setColor("#121d7c")
        msg.channel.send({embed});
    }
});
client.on('message', msg => {
    if(msg.content === `${prefix}hp`) {
      const embed = new MessageEmbed()
        .setDescription(
          `
            ▬▬▬▬▬ Panel d'aide de commandes du pendu ▬▬▬▬
  
             ►  Programme version 1.0.0
         
            - !pstart (difficultee (NORMAL / HARD)) (mot) : Démare une partie avec le mot (mot) ou un mot aléatoire si non spécifié
            - !ptry [lettre/mot] : Essaye de trouver la lettre [lettre] ou le mot [mot]
            - !phelp : Affiche l'aide par MP
            - !pping : Affiche le ping courant du bot
            - !pword [mot] : Propose un mot
        
        ► Page 2/2
  `)
        .setColor("#121d7c")
     msg.channel.send({embed});
    }
});
client.on('message', msg => {
    if(msg.content === `${prefix}hpm`) {
      const embed = new MessageEmbed()
        .setDescription(
          `
            ▬▬▬▬▬ Panel d'aide de commandes futur bot music ▬▬▬▬
  
             ►  Programme version 1.0.0
  
            - !mplay : Lance la musique, s'utilise avec !play 'Lien youtube'.
            - !mskip : Passe à la prochaine musique.
            - !mstop : Fait partir le bot.
            - !mvolume : Change le volume du bot.
            - !mnp : Affiche le son en cours de lecture.
            - !mqueue : Affiche la file d'attente des sons.
            - !mpause : Met en pause le son.
            - !mresume : Remet en lecture le son.
  `)
        .setColor("#121d7c")
     msg.channel.send({embed});
    }
});
client.on('message', msg => {  
    if(msg.content === `${prefix}concours`) {
      const embed = new MessageEmbed()
        .setDescription(`
          ▬▬▬▬  Jeux concours BDE EFREI Paris  ▬▬▬▬
          
      Les concours actuelle sont : Jeux de Noel
      Rendez-vous sur l'instagram du BDE pour plus d'informations
      
  
          ► Lien des concours : https;//instagram.com`)
        .setColor("#121d7c")
    msg.channel.send({embed});
    }
});

client.login(botSettings.token);