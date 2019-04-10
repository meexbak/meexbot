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



const Discord = requ ('discord.js')
const bot = Discord.Client () جديد
بادئة const = "mx."
bot.on ('message'، msg => {
  إذا عاد (msg.author.bot)
  if (msg.content.startsWith (بادئة + 'دور')) {
  دع params = msg.content.slice (prefix.length) .trim (). split (/ + / g)؛
  إذا كان (! params [0]) بإرجاع msg.channel.send (`** بناء الجملة: $ {prefix} دور <all / humans / bots / @ user> <name role / @ role>`)؛
إذا (params [0] === 'all') {
 إذا كان (! params [1]) بإرجاع msg.channel.send (`** منشن الرتبة أو اكتب اسمها \ n بناء الجملة: $ {prefix} دور كل <role / name role> **`)
     دع دور = msg.mentions.roles.first () || msg.guild.roles.find (r => r.name.toLowerCase (). يبدأ بـ (params [1] .toLowerCase ()))
   إذا كان (! دور) بإرجاع msg.channel.send (`** لم استطع إيجاد هذه الرتبة **`)
 msg.guild.members.forEach (m => {
إذا كانت (m.roles.some (r => r.id == role.id)) ترجع
     m.addRole (الدور)
 })
 msg.channel.send (`** done أعط كل دور @ $ {role.name} **`) ؛
} آخر إذا (params [0] === 'bots') {
 إذا كان (! params [1]) بإرجاع msg.channel.send (`** منشن الرتبة أو اكتب اسمها \ n بناء الجملة: $ {prefix} bots bots <role / name role> **`)
     دع دور = msg.mentions.roles.first () || msg.guild.roles.find (r => r.name.toLowerCase (). يبدأ بـ (params [1] .toLowerCase ()))
   إذا كان (! دور) بإرجاع msg.channel.send (`** لم استطع إيجاد هذه الرتبة **`)
 دع bots = msg.guild.members.filter (m => m.user.bot)
 bots.forEach (bot => {
   إذا كان (bot.roles.some (r => r.id == role.id)) يُرجع
   bot.addRole (الدور)
 })
 msg.channel.send (`** done أعط كل bots role @ $ {role.name} **`)؛
} if if (params [0] === 'humans') {
 إذا كان (! params [1]) بإرجاع msg.channel.send (`** منشن الرتبة أو اكتب اسمها \ n بناء الجملة: $ {prefix} دور البشر <@ دور / اسم الدور> **`)
     دع دور = msg.mentions.roles.first () || msg.guild.roles.find (r => r.name.toLowerCase (). يبدأ بـ (params [1] .toLowerCase ()))
   إذا كان (! دور) بإرجاع msg.channel.send (`** لم استطع إيجاد هذه الرتبة **`)
   دع البشر = msg.guild.members.filter (m =>! m.user.bot)
   humans.forEach (h => {
     إذا كانت (h.roles.some (r => r.id == role.id)) ترجع
     h.addRole (الدور)
   })
   msg.channel.send (`** done أعط كل البشر دورًا @ $ {role.name} **`) ؛
} آخر {
     إذا كان (! params [1]) بإرجاع msg.channel.send (`** منشن الرتبة أو اكتب اسمها \ n بناء الجملة: $ {prefix} roleuser <role / name role> **`)
     دع دور = msg.mentions.roles.first () || msg.guild.roles.find (r => r.name.toLowerCase (). يبدأ بـ (params [1] .toLowerCase ()))
     إذا كان (! دور) بإرجاع msg.channel.send (`** لم استطع إيجاد هذه الرتبة **`)
     دع معرف المستخدم = params [0]. شريحة (2 ، -1)
     اسمح للمستخدم = msg.guild.members.get (معرف المستخدم)
     إذا (المستخدم) العودة
     user.addRole (الدور)
     msg.channel.send (`** تم إعطاء $ {user} @ $ {role.name} **`)
 
   }
 
 
 }
 
 
})










































client.login(process.env.TOKEN);
