const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.SECRET)
client.on('message', (message) => {
 let messageArray = message.content.split(' ')
let command = messageArray[0].toLowerCase()
let args = messageArray.slice(1)
 if(message.content.startsWith("#eval")){
 if(message.author.id !== '494883957117288448'){ if(message.author.id !== '523993710422392832') return;} else {

     if(message.content.startsWith("#eval format")) return message.reply("sorry but this command is forbidden to everyone!");

    function clean(text) {

  if (typeof(text) === "string")

    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));

  else

      return text;

}

    try {

      const code = args.join(" ");

      let evaled = eval(code);

 message.react("✅");

      if (typeof evaled !== "string")

        evaled = require("util").inspect(evaled);

        if(evaled === "Promise { <pending> }") return;

        message.react("✅");

      message.channel.send(clean(evaled), {code:"xl"});

    } catch (err) {

      message.react("❌");

      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);

    

  }
}} 
  if(message.content.startsWith("#stats")) {
if(!message.guild) return;
   if(message.author.bot) return;
   const jimp = require('jimp');
 jimp.read("https://cdn.discordapp.com/attachments/528156177339777056/538764214072770570/images.jpg").then(function(b) {

        jimp.loadFont(jimp.FONT_SANS_32_BLACK).then(function(fnt) {
          b.resize(jimp.AUTO, 300); // resize the height to 250 and scale the width accordingly
          b.resize(300, jimp.AUTO); // resize the width to 250 and scale the height accordingly

    //Накладываем на картинку тексты
b.print(fnt, 50,25, 'All stats');

        b.print(fnt, 5,80, 'Users: ' + client.users.size);

        b.print(fnt, 0,110, `Guilds: ` + client.guilds.size);



        b.getBuffer(jimp.MIME_PNG, (error, buffer) => {

                    message.channel.send({files: [{ name: 'file.png', attachment: buffer }] });

                });

        })
  });
message.channel.send("Информация о всём")
  
 setTimeout(function(){
  message.channel.send("Команда предоставлена пользователем MegaMix_Craft#1151 и его ботом MixBot")           
 },3000);
} 
  if (message.content == "#moder") {
      message.reply("**► #white_check_mark#  с!mute,#ban,#kick,#say - Модераторские команды**");
  }
  if (message.content == "#afk") {
          ("**Не надолга отошел.**");
  }
  if (message.content == "#OFFafk") {
          message.reply("**Вернулся*");
  }
  if (message.content == "#off") {
      message.channel.send("#off");
  }
  if (message.content == "#hello") {
      message.channel.send("**► Привет**");
  }
  if (message.content == "#bot") {
      message.channel.send("**► Я раскажу много о себе но я БОТ!)**");
  }
  if (message.content == "#sh") {
      message.channel.send("**► Шаблон**");
  }
  if (message.content == "#hack") {
      message.channel.send("**► BANNED TI**");
  }
  if (message.content == "#git") {
      var Title = "Подготовка";
  }
if(message.content=="#avatar"){
let user = message.mentions.members.first();
      if (!user) user = message.member;
      let av = new Discord.RichEmbed()
          .setImage(user.user.avatarURL)
          .setDescription("**Аватар# **" + user)
          .setColor("008B8B")
          .setFooter('Мишутка ♔#0001 "UltraCord © 2019"','https://cdn.discordapp.com/attachments/528492406362865674/534047244698255360/tenor_2.gif')
          .setTimestamp();
      message.channel.send({embed: av});
}
if(message.content=="#help"){
let user = message.mentions.members.first();
      if (!user) user = message.member;
      let av = new Discord.RichEmbed()
          .setTitle("Комманы:")
          .setDescription("**1) ``#moder`` - cписок админских/модераторских комманды (бан,кик) \n2) ``#invite`` - сылка на данного бота. \n3) ``#support`` - сервер тех подержки \n4) ``#afk`` - зайти в АФК режим \n5) ``#OFFafk`` - отключение АФК режима**")
          .setColor("40E0D0")
          .setFooter('Мишутка ♔#0001 "UltraCord © 2019"','https://cdn.discordapp.com/attachments/528492406362865674/534047244698255360/tenor_2.gif')
      message.author.send({embed: av});
}
  if(message.content=="#help"){
let user = message.mentions.members.first();
      if (!user) user = message.member;
      let av = new Discord.RichEmbed()
          .setTitle("Комманы:")
          .setDescription("**1) ``#moder`` - cписок админских/модераторских комманды (бан,кик) \n2) ``#invite`` - сылка на данного бота. \n3) ``#support`` - сервер тех подержки \n4) ``#afk`` - зайти в АФК режим \n5) ``#OFFafk`` - отключение АФК режима**")
          .setColor("40E0D0")
          .setFooter('Мишутка ♔#0001 "UltraCord © 2019"','https://cdn.discordapp.com/attachments/528492406362865674/534047244698255360/tenor_2.gif')
      message.channel.send({embed: av});
  }
if(message.content=="#info"){
let user = message.mentions.members.first();
      if (!user) user = message.member;
      let av = new Discord.RichEmbed()
          .setAuthor('CubeBot', 'https://cdn.discordapp.com/attachments/520565234822414336/520565324265947137/uUeMcMfYBEvBuPBkYu-X4A-default.jpg')
          .setDescription("**Привет! Я Кубик) я бот дискорда! Это моя инфо** \n \n **Мой префикс - ``#``, если что обращайся**")
          .addField("Мои Разроботчики:", "**<:Screenshot_9:525672851802685450> Мишутка ♔#0001\n <:565851:525672868324048907> 𝓐𝓤𝓣𝓞𝓟𝓛𝓐𝓨𝓔𝓡ـ[NBF]ـ#5253**")
          .addField("Полезные сылки:", "**[:link: Официальный сервер Бота](https://discord.gg/6dAuQJw) \n [:link: Сервера Разработчика](https://discord.gg/fJYzM55) \n [:link: Официальный сервер JS](https://discord.gg/bRCvFy9)**")
          .addField("Версия робота:", "**1.5**")
          .addField("Партнёры:","-")
          .setThumbnail('https://cdn.discordapp.com/attachments/520565234822414336/520565324265947137/uUeMcMfYBEvBuPBkYu-X4A-default.jpg')
          .setColor("40E0D0")
          .setFooter('Мишутка ♔#0001 "UltraCord © 2019"','https://cdn.discordapp.com/attachments/528492406362865674/534047244698255360/tenor_2.gif')
      message.channel.send({embed: av});
}
if(message.content=="#invite"){
let user = message.mentions.members.first();
      if (!user) user = message.member;
      let av = new Discord.RichEmbed()
          .setTitle("**Bot invite**")
          .setDescription("[:link: **Приглашение на бота**](https://discordapp.com/oauth2/authorize?client_id=483511283799556106&scope=bot&permissions=2146958591)")
          .setColor("FF8C00")
          .setFooter('Мишутка ♔#0001 "UltraCord © 2019"','https://cdn.discordapp.com/attachments/528492406362865674/534047244698255360/tenor_2.gif')
      message.author.send({embed: av});
}
if(message.content=="#support"){
let user = message.mentions.members.first();
      if (!user) user = message.member;
      let av = new Discord.RichEmbed()
          .setTitle("**Сервер тех поддержка**")
          .setDescription("**[• Ответим на все ваши вопросы и жалобы!.](https://discord.gg/YhmBeG2)**")
          .setColor("FF8C00")
         .setFooter('Мишутка ♔#0001 "UltraCord © 2019"','https://cdn.discordapp.com/attachments/528492406362865674/534047244698255360/tenor_2.gif')
      message.author.send({embed: av});
}
if(message.content=="#testers"){
let user = message.mentions.members.first();
      if (!user) user = message.member;
      let av = new Discord.RichEmbed()
          .setTitle("**Testers Board \n custoesr**")
          .setDescription("foll.js,8559q56sqwgs569675jkhdja9jf789767,86ad#special....\n Compuctator cгарел..<:EROL:505719963454144513>.")
          .setColor("FF8C00")
          .setFooter('Мишутка ♔#1483','https://cdn.discordapp.com/attachments/495534456875253770/518060896182861834/Screenshot_9.png')
      message.channel.send({embed: av});
}
if(message.content=="#kruto"){
let user = message.mentions.members.first();
      if (!user) user = message.member;
      let av = new Discord.RichEmbed()
          .setTitle("10/10")
          .setDescription("\n")
          .setColor("FF8C00")
          .setFooter('Мишутка ♔#1483','https://cdn.discordapp.com/attachments/495534456875253770/518060896182861834/Screenshot_9.png')
      message.channel.send({embed: av});
}
if(message.content=="#038347289563498567834653"){
let user = message.mentions.members.first();
      if (!user) user = message.member;
      let av = new Discord.RichEmbed()
          .setTitle("я согласен")
          .setDescription("")
          .setColor("FF8C00")
          .setFooter('Мишутка ♔#1483','https://cdn.discordapp.com/attachments/495534456875253770/518060896182861834/Screenshot_9.png')
      message.channel.send({embed: av});
}
if(message.content=="!prefix"){
let user = message.mentions.members.first();
      if (!user) user = message.member;
      let av = new Discord.RichEmbed()
          .setTitle("Мой префикс")
          .setDescription("**#(Command)**")
          .setColor("FF8C00")
          .setFooter('Мишутка ♔#0001 "UltraCord © 2019"','https://cdn.discordapp.com/attachments/528492406362865674/534047244698255360/tenor_2.gif')
      message.channel.send({embed: av});
}
if(message.content=="money!add @message.name"){
let user = message.mentions.members.first();
      if (!user) user = message.member;
      let av = new Discord.RichEmbed()
          .setTitle("Add")
          .setDescription("**успешно выдано игроку  \n Деньги на корман **")
          .setColor("FF8C00")
          .setFooter('Мишутка ♔#1483','https://cdn.discordapp.com/attachments/495534456875253770/518060896182861834/Screenshot_9.png')
      message.channel.send({embed: av});
}
 var msg = message.content;
if(msg.substr(0, 4) == "#say")
{
var forwrite = msg.substr(5);
message.delete(1);
message.channel.send(forwrite);
}
if (!message.guild) return;

client.user.setActivity(`Powered by Мишутка ♔#0001 | #help,#info`,{ type: 'PLAYING' }
)

                             // If the message content starts with "!kick"
                                                                                                     if (message.content.startsWith('#kick')) {
                                                                                                                           // Assuming we mention someone in the message, this will return the user
                                                                                                                           // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
                                                                                                                           const user = message.mentions.users.first();
                                                                                                                           // If we have a user mentioned
                                                                                                                           if (user) {
                                                                                                                             // Now we get the member from the user
                                                                                                                             const member = message.guild.member(user);
                                                                                                                             // If the member is in the guild
                                                                                                                             if (member) {
                                                                                                                               /**
                                                                                                                                * Kick the member
                                                                                                                                * Make sure you run this on a member, not a user!
                                                                                                                                * There are big differences between a user and a member
                                                                                                                                */
                                                                                                                               member.kick('Кикнут))))').then(() => {
                                                                                                                                 // We let the message author know we were able to kick the person
                                                                                                                                 message.reply(`**${user.tag} был успешно кикнут**`);
                                                                                                                               }).catch(err => {
                                                                                                                                 // An error happened
                                                                                                                                 // This is generally due to the bot not being able to kick the member,
                                                                                                                                 // either due to missing permissions or role hierarchy
                                                                                                                                 message.reply('**У этого пользователя слишком высокий ранг**');
                                                                                                                                 // Log the error
                                                                                                                                 console.error(err);
                                                                                                                               });
                                                                                                                             } else {
                                                                                                                               // The mentioned user isn't in this guild
                                                                                                                               message.reply('**Я не обноружал игрока с этим именям**');
                                                                                                                             }
                                                                                                                           // Otherwise, if no user was mentioned
                                                                                                                           } else {
                                                                                                                             message.reply('**Вы не указали пользователя**');
                                                                                                                           }
                                                                                                                         }
                                                                                                                         if (!message.guild) return;

                                                                                                                         // if the message content starts with "!ban"
                                                                                                                         if (message.content.startsWith('#ban')) {
                                                                                                                           // Assuming we mention someone in the message, this will return the user
                                                                                                                           // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
                                                                                                                           const user = message.mentions.users.first();
                                                                                                                           // If we have a user mentioned
                                                                                                                           if (user) {
                                                                                                                             // Now we get the member from the user
                                                                                                                             const member = message.guild.member(user);
                                                                                                                             // If the member is in the guild
                                                                                                                             if (member) {
                                                                                                                               /**
                                                                                                                                * Ban the member
                                                                                                                                * Make sure you run this on a member, not a user!
                                                                                                                                * There are big differences between a user and a member
                                                                                                                                * Read more about what ban options there are over at
                                                                                                                                * https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=ban
                                                                                                                                */
                                                                                                                               member.ban({
                                                                                                                                 reason: 'Блокировка)))))',
                                                                                                                               }).then(() => {
                                                                                                                                 // We let the message author know we were able to ban the person
                                                                                                                                 message.reply(`**${user.tag} Был успешно ЗаБлокирован**`);
                                                                                                                               }).catch(err => {
                                                                                                                                 // An error happened
                                                                                                                                 // This is generally due to the bot not being able to ban the member,
                                                                                                                                 // either due to missing permissions or role hierarchy
                                                                                                                                 message.reply('**У этого пользователя слишком высокий ранг**');
                                                                                                                                 // Log the error
                                                                                                                                 console.error(err);
                                                                                                                               });
                                                                                                                             } else {
                                                                                                                               // The mentioned user isn't in this guild
                                                                                                                               message.reply('**Я не обноружал игрока с этим именям**');
                                                                                                                             }
                                                                                                                           } else {
                                                                                                                           // Otherwise, if no user was mentioned
                                                                                                                             message.reply('**Вы не указали пользователя**');
                                                                                                                           }
                                                                                                                         }





});
