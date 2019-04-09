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



const { Client } = require('discord.js');
const client = new Client();
let emojiChars = {
    a: '🇦', b: '🇧', c: '🇨', d: '🇩',
    e: '🇪', f: '🇫', g: '🇬', h: '🇭',
    i: '🇮', j: '🇯', k: '🇰', l: '🇱',
    m: '🇲', n: '🇳', o: '🇴', p: '🇵',
    q: '🇶', r: '🇷', s: '🇸', t: '🇹',
    u: '🇺', v: '🇻', w: '🇼', x: '🇽',
    y: '🇾', z: '🇿', 0: '0⃣', 1: '1⃣',
    2: '2⃣', 3: '3⃣', 4: '4⃣', 5: '5⃣',
    6: '6⃣', 7: '7⃣', 8: '8⃣', 9: '9⃣',
    10: '🔟', '#': '#⃣', '*': '*⃣',
    '!': '❗', '?': '❓',
};

client.on('message', msg => {
if (msg.author.bot) return;
let content = msg.content.split('').map(letter => emojiChars[letter]).join(' ');
return msg.channel.send(`${content ? content : 'Failed to emojify'}`);
})














































client.login(process.env.TOKEN);
