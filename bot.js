const Discord = require('discord.js')
const config = require('./config.js')
const client = new Discord.Client()
var httpClient = require('node-rest-client-promise').Client()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`)
})

client.on('message', msg => {
  // Check if the message has been posted in a channel where the bot operates
  // and that the author is not the bot itself
  if (msg.channel.type !== 'dm' && (config.channel !== msg.channel.id || msg.author.id === client.user.id)) return

  // If message is hello, post hello too
  if (msg.content === 'hi') {
    console.log(' salam !')
    msg.channel.send('salam')
  }
    const Command = require('./command')
  // czux permet d'obtenir la bibliotheque

  const Traducteur = require('@google-cloud/translate');

		key: 'AIzaSyD5KUAKvMH9TFh-YnFWJ8nVjgkR6yXmklM'

 module.exports = class Google_Traducteur extends Command {

	static match (text) {

		return text.content.startsWith('!translate')

	}

	static action (text) {

		

    if (text.content.charAt(2) !== ' ' || text.content.charAt(1) === ' ') {

      text.channel.send('Veuillez entrer une langue valide.')

    } else {

      const traduit = Traducteur

      // traduction dans la langue choisie

      var languedemandee = text.content.charAt(0) + text.content.charAt(1)

      var atraduire = text.content.substring(3)

      traduit.translate(atraduire, languedemandee).then((results) => {

        let traduction = results[0]

        traduction = Array.isArray(traduction) ? traduction : [traduction]

        traduction.forEach((traduction) => {

          text.channel.send(traduction)

        })

      })

    .catch((err) => {

     text.channel.send('ERROR', err)

    })

    }

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
