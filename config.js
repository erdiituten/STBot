module.exports = {
TOKEN: "MTMyOTU2NTk2NzM3MzY5NzAzNA.GS4JC8.yVgl36a168t31x69Rx4D-8BLglRXm2bP8wMvsE",
ownerID: "668417617723260928", //write your discord user id.
botInvite: "https://discord.gg/9mUAzhm5", //write your discord bot invite.
mongodbURL: "mongodb+srv://hoyodi1473:TxGJcQ99qivhxAta@cluster0.3vy52.mongodb.net/", //write your mongodb url.
status: 'STBot',
commandsDir: './commands', //Please don't touch
language: "tr", //en, tr, nl
embedColor: "ffa954", //hex color code
errorLog: "1329569639667335188", //write your discord error log channel id.
  
    voteManager: { //optional/ELLEME
        status: false, //true or false/ELLEME
        api_key: "", //write your top.gg api key. /ELLEME
        vote_commands: ["back","channel","clear","dj","filter","loop","nowplaying","pause","play","playlist","queue","resume","save","search","skip","stop","time","volume"], //write your use by vote commands./ELLEME
        vote_url: "", //write your top.gg vote url./ELLEME
    },

    playlistSettings:{
        maxPlaylist: 10, //max playlist count
        maxMusic: 75, //max music count
    },

opt: {
DJ: {
commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume'] //Please don't touch
},

voiceConfig: {
leaveOnFinish: false, //If this variable is "true", the bot will leave the channel the music ends.
leaveOnStop: false, //If this variable is "true", the bot will leave the channel when the music is stopped.

leaveOnEmpty: { //The leaveOnEnd variable must be "false" to use this system.
status: true, //If this variable is "true", the bot will leave the channel when the bot is offline.
cooldown: 10000000, //1000 = 1 second
},

},

maxVol: 150, //You can specify the maximum volume level.

}
}
