const Discord = require('discord.js');

const client = new Discord.Client();

//const auth = require('./auth.json');



client.on('ready', () => {

    console.log(`Logged in as ${client.user.tag}!`);

});

var blockedchannels = ['587909626087866390','563202381202849832']
var blockedcommands = ['!da', 'gif']

client.on('message', msg => {

  if (msg.content.includes('http') && msg.author != client.user 
    && !msg.content.includes('!da') && !msg.content.includes('gif') 
    && !blockedchannels.includes(msg.channel.id)) {
    client.channels.get('563202381202849832').send("**"+msg.author.username+"**" + " linked: " + msg.content);}

  if (msg.content.split(' ')[0] == '!purge'){
  	const channel = msg.guild.channels.find(ch => ch.name === 'bots');
  	if(!channel) return;
  	channel.send("**Cleaning up messages:** " + msg.content.substr(msg.content.indexOf(" ")+1));
  }

});


//client.login(auth.token);
client.login(process.env.BOT_TOKEN);


//heroku sleep prevention
var http = require("http");
setInterval(function() {
    http.get("http://covenantdiscordlinkbot.herokuapp.com");
}, 300000); // every 5 minutes (300000)
