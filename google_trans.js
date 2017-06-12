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
