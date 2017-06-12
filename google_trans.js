const Command = require('./command')
// czux permet d'obtenir la bibliotheque

const Traducteur = require('@google-cloud/translate');
	key: 'AIzaSyD5KUAKvMH9TFh-YnFWJ8nVjgkR6yXmklM'

module.exports = class Google_Traducteur extends Command {

	static match (text) {

		return text.content.startsWith('!translate')

	}

	static action (text) {
		var text_in = text.content.substring(11)
		console.log('debug : '+text_in)
		if (text_in.charAt(2) !== ' ' || text_in.charAt(1) === ' ') {
			text.channel.send('Veuillez entrer une langue valide.')

		} else {

			const translate = Traducteur

      			// traduction dans la langue choisie
			var text_in = text.content.substring(11)
      			var languedemandee = text_in.charAt(0) + text_in.charAt(1)

      			var atraduire = text_in.substring(3)
			//console.log('langue : '+languedemandee+'  -- atraduire : '+atraduire)
      			translate.translate(atraduire, languedemandee).then((results) => {

        			let traduction = results[0]

        			traduction = Array.isArray(traduction) ? traduction : [traduction]

        			traduction.forEach((traduction) => {

       					text.channel.send(traduction)

				})

      			}).catch((err) => {

				text.channel.send('ERROR', err)

    			})

    		}

	}
}
