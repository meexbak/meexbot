const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();

client.on('ready', () => {
   console.log(`This Bots Online ' `);
});



giftKeys = {}؛
let devs = ["ايديك"، "ايدي خويك او إي ادمن"]؛ let devs = ["ايديك"، "ايدي خويك او إي ادمن"، "ايدي خويك الثالث"]؛
client.on ("message" ، msg => {
  let args = msg.content.split ("") .slice (1) [0]؛
  دع cmd = msg.content.split ('') [0]
  if (cmd === `$ {prefix} giftR`) {
  واسمحوا roleW = msg.mentions.roles.first () ؛
  إذا (! devs.includes (msg.author.id)) {
    دعنا ندمج = Discord.RichEmbed () جديد
    .setColor ( "# 42f4f4")
    .setTitle (`: x: - انت لاتمتلك الصلاحية`)؛
    msg.reply (embed) .then (z => z.delete (3000))؛
     إرجاع
  }
  إذا (! roleW) {
    دعنا ندمج = Discord.RichEmbed () جديد
    .setColor ( "# 42f4f4")
    .setTitle (`: x: - منشن الرتبة \` $ {prefix} giftR <@ admin-role> \ ``)؛
    msg.reply (embed) .then (z => z.delete (3000))؛ إرجاع
  }؛
  let role = msg.guild.roles.find (`name`، roleW.name)؛
  إذا (! دور) {
    دعنا ندمج = Discord.RichEmbed () جديد
    .setColor ( "# 42f4f4")
    .setTitle (`: x: - تعذر العثور على \` $ {roleW.name} \ `role.`) ؛
  msg.reply (embed) .then (msgs => msgs.delete (3000)) ؛
  إرجاع
  }
  var randomkeys = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"؛
  فار هدية = "" ؛
  لـ (var y = 0؛ y <16؛ y ++) {/// 16
    gift + = `$ {randomkeys.charAt (Math.floor (Math.random () * randomkeys.length))}}؛
  }
  giftKeys [هدية] = دور ؛
  دعنا ندمج = Discord.RichEmbed () جديد
  .setColor ( "# 42f4f4")
  .setTitle (`: ok_hand: - ** تم ارسآل الكود على الخاص **`)؛
  msg.reply (تضمين)؛
  دع embed2 = Discord.RichEmbed () جديد
  .setAuthor (msg.author.username ، msg.author.displayAvatarURL)
  .setThumbnail (msg.author.avatarURL)
  .addField ("** Key Of Gift **" ، هدية ، حقيقية)
  .addField ( "دور"، giftKeys [هدية] .name، صحيح)
  .addField ("هذا المفتاح تم إنشاؤه بواسطة" ، msg.author ، true)
  .addField ("The Room" ، msg.channel ، true)
  .setTimestamp ()
  .setFooter (client.user.username، client.user.displayAvatarURL)  
  msg.author.send (embed2)؛
}؛
if (cmd === `$ {prefix} used`) {
 
  إذا (! args) {  
    دعنا ندمج = Discord.RichEmbed () جديد
    .setColor ( "# 42f4f4")
    .setTitle (`: x: - ** الرجاء ادخال كود الهدية ** \` $ {prefix} used <Key> \ ``)
    msg.reply (embed) .then (z => z.delete (3000))؛
    إرجاع
}
دعنا ندمج = Discord.RichEmbed () جديد
.setTitle (`** جاري التحقق من الكود **`)
.setColor ( "# 42f4f4")
  msg.reply (embed) .then (msgs => {
  إذا (giftKeys [وسائط]) {
    واسمحوا hav = msg.member.roles.find (`name` ، giftKeys [args] .name)؛
    إذا (بحر) {
    دعنا ندمج = Discord.RichEmbed () جديد
    .setTitle (`: x: - ** انت تمتلك هذه الرتبة بالإن ** \` $ {giftKeys [args] .name} \ ``)
    .setColor ( "# 42f4f4")
    msgs.edit (تضمين)
    إرجاع
    }
    دعنا ندمج = Discord.RichEmbed () جديد
    .setTitle (`: tada: - ** مبروك تم اعطائك رتبة ** \` $ {giftKeys [args] .name} \ ``)
    .setColor ( "# 42f4f4")
    msgs.edit (تضمين)
    msg.member.addRole (giftKeys [وسائط])؛
    حذف giftKeys
  }آخر{
    دعنا ندمج = Discord.RichEmbed () جديد
    .setTitle (`: x: - ** الكود غير صيحيح أو أنه مستعمل من قبل **`)
    .setColor ( "# 42f4f4")
    msgs.edit (تضمين)
  }})؛
}؛
})؛


















































client.login(process.env.TOKEN);
