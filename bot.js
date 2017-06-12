const Discord = require('discord.js')
const config = require('./config.js')
const client = new Discord.Client()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`)
})

client.on('message', msg => {
  // Check if the message has been posted in a channel where the bot operates
  // and that the author is not the bot itself
  if (msg.channel.type !== 'dm' && (config.channel !== msg.channel.id || msg.author.id === client.user.id)) return

  // If message is hello, post hello too
  if (msg.content === 'hello') {
    console.log(' hello man!')
    msg.channel.send('hello papy')
  }
    if (msg.content === 'Paris') {
    httpClient.getPromise('http://api.openweathermap.org/data/2.5/weather?q=Paris&APPID=b05787eda8d8f7967925692ea52134d2')
    .then((res) => {
      var tempKal = res.data.main.temp
      var tempCel = tempKal - 273.15
      msg.channel.sendMessage('Il fait à PARIS: ' + tempCel.toFixed(2) + ' °C')
    })
  }

})

client.login(config.token)
