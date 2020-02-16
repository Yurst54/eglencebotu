const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const umutbey = new Discord.RichEmbed()
    .setColor('GOLD')
    .setAuthor(`Yardım`, client.user.avatarURL) 
      .setDescription('**Yardım Menüsü**')
.setThumbnail(client.user.avatarURL)
      .addField('**  Eglence **(1)', '`karıştır`, `kedi`, `piyango`, `wikipedia`, `sunucuresmi`, `malafat`, `espri`, `vine`, `speedtest`, `aşkölçer`, `fal`, `davetlerim`, `dürt`')
.addField('**  Sahip **(1)', '`yaz`')
    .setFooter(``, client.user.avatarURL)
    .setTimestamp()
    message.channel.send(umutbey).catch()

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['y'],
    permLevel: 0
}

exports.help = {
    name: 'yardım'
};

