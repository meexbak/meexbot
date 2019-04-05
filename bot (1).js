const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = 'mx.'

client.on('ready', () => {
   console.log(`This Bots Online ' `);
});



client.on('guildMemberAdd', member => {
        member.guild.channels.get('563747348795228171').setName(Total Users: ${member.guild.memberCount})
        let humans = member.guild.members.filter(m => !m.user.bot).size;
        member.guild.channels.get('563747279375433738').setName(Member Count: ${humans})
        let bots = member.guild.members.filter(m => m.user.bot).size;
        member.guild.channels.get('563747193916358677').setName(Bot Count ${bots})
    //الحقوق محفوظه لي ديمون
      });


















































client.login(process.env.TOKEN);
