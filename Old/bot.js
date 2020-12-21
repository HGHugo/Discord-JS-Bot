const botSettings = require("./botsettings.json");
const Discord = require("discord.js");
const prefix = botSettings.prefix;
const request = require('snekfetch');
const YoutubeStream = require('ytdl-core');

const bot = new Discord.Client();

bot.login(botSettings.token);

// Console
bot.on("ready", async () => {
  console.log('Edaly system 1.0 ON - Systèmes operationnels.');
});
// Commande
bot.on("message", async message => {
	if(message.author.bot) return;
	if(message.channel.type === "dm") return;

	let messageArray = message.content.split(" ");
	let command = messageArray[0];
	let args = messageArray.slice(1);

	if(!command.startsWith(prefix)) return;

	if(command === `${prefix}site`) {
		const embed = new Discord.RichEmbed()
			.setTitle('Edaly FR')
			.setDescription("Liens vers le site edaly.  https://edaly.fr/")
			.setColor("#121d7c")
			.setURL("https://edaly.fr/")
		message.channel.send({embed});
	}
  if(command === `${prefix}h`) {
    const embed = new Discord.RichEmbed()
      .setDescription(
        `
          ▬▬▬▬▬ Panel d'aide de commandes ▬▬▬▬

           ►  Programme version 1.0.0

          - !hp : Affiche les autres pages du panel d'aide : s'utilise avec !hp2		   
          - !site : Affiche le lien du site.
          - !rpg : Affiche le lien comportant les infos du RPG Edaly.
          - !hpm : Affiche le panel d'aide des commandes du bot music.
          - Futur commandes ...
		  
		  ► Page 1/2
`)
      .setColor("#121d7c")
    message.channel.send({embed});
  }
  if(command === `${prefix}hp2`) {
    const embed = new Discord.RichEmbed()
      .setDescription(
        `
          ▬▬▬▬▬ Panel d'aide de commandes ▬▬▬▬

           ►  Programme version 1.0.0
		   
          - Futur commandes ...
		  
		  ► Page 2/2
`)
      .setColor("#121d7c")
    message.channel.send({embed});
  }
  if(command === `${prefix}hpm`) {
    const embed = new Discord.RichEmbed()
      .setDescription(
        `
          ▬▬▬▬▬ Panel d'aide de commandes bot music ▬▬▬▬

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
    message.channel.send({embed});
  }
  if(command === `${prefix}rpg`) {
    const embed = new Discord.RichEmbed()
      .setDescription(
        `
        ▬▬▬▬  RPG : Rôle-playing game  ▬▬▬▬
        
		Projet RPG basé sur le jeux Arma 3,
		Maps et mods produit entièrement par notre équipe,
		

        ► Nous rejoindre ? https;//edaly.fr`)
      .setColor("#121d7c")
    message.channel.send({embed});
  }

  if(command === `${prefix}concours`) {
    const embed = new Discord.RichEmbed()
      .setDescription(`
        ▬▬▬▬  Jeux concours Edaly  ▬▬▬▬
        
		Bienvenue sur ce concours tape,
		!keys pour valider ta candidature
		

        ► Lien des concours : https;//edaly.fr`)
      .setColor("#121d7c")
    message.channel.send({embed});
  }
});

// Nouveau membres
// Reponse message
bot.on('message', function (message) {
  if (message.content === `RP ?`) {
    return message.reply(`Le RP est le diminutif de Role Play, qui signifie en français "Jouer un Rôle". "Jouer RP", c'est donner une véritable vie au personnage que l'on joue, c'est à dire une personnalité, un passé, des manies, etc... ... Chaque joueur considère les autres comme des vrais personnages du jeu.`);
  }
});
bot.on('message', function (message) {
  if (message.content === `Site`) {
    return message.reply(`https://edaly.fr/`);
  }
});
bot.on('message', function (message) {
  if (message.content === `FAQ`) {
    return message.reply(`FAQ disponible sur https://edaly.fr/`);
  }
});
bot.on('message', function (message) {
  if (message.content === `Ok Edaly`) {
    return message.reply(`Edaly à votre écoute`);
  }
});
bot.on('message', function (message) {
  if (message.content === `recrutement`) {
    return message.reply(`Nous recrutons actuellement des dev 3D, SQF, des graphistes pour le projet RPG, plus d'info sur https://edaly.fr/`);
  }
});
bot.on('message', function (message) {
  if (message.content.startsWith(`${prefix}rrusse`)) {
    const replies = [
      "\:relaxed: \:gun: Encore vivant ? Dommage, rejouez et mourez ! \:rage:",
	  "\:relaxed: \:gun: Encore vivant ? Dommage, rejouez et mourez ! \:rage:",
      "\:skull: \:dizzy_face: \:gun:  Vous êtes mort, dommage ..."];
      message.replytext = Math.floor((Math.random() * replies.length) + 0);
    return message.reply(replies[message.replytext]);
    }
});