
const Discord = require("discord.js");
const client = new Discord.Client();



client.on('ready', () => {
    console.log('logged on');
});
client.on('message', message => {
    // If the message is "ping"
    if (message.content === '!ping') {
        message.delete()
        // Send "pong" to the same channel
      message.channel.send('pong');
    }
    if (message.content === '!randomnumber')
    {
        message.delete()
        message.channel.send(Math.random(10));
    }
    if (message.content === '!flip')
    {
        message.delete()
        var chance = Math.floor(Math.random()*2)
        if (chance === 1){
        message.reply("Coin landed on heads!")
        }
        if (chance === 0){
         message.reply("Coin landed on tails!")
        }


    }
    if (message.content === '!join')
    {
        if (message.member.voiceChannel)
        {
            if(message.guild.voiceConnection)
            {
                message.guild.voiceConnection.disconnect();
            }
            else
            {
                message.member.voiceChannel.join()
                .then(connection=>{
                    message.reply("success");
                })

            }
        }
        else
            {
                message.reply("Your not in a VC");
            }
    }
    if (message.content === '!leave')
    {
        
        if (message.guild.voiceConnection)
        {
            message.guild.voiceConnection.disconnect();
            message.reply("I have left the VC!");
        }
      
    }
        if (message.content === '!cmds')
    {
        message.channel.send("!ping, !randomnumber, !flip, !join, !leave")

    }
   
});

















client.login(process.env.BOT_TOKEN);
