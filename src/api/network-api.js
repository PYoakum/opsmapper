const commandIndex = require('./commands/index.js');

module.exports = (req, res) => {

		let rawCmd = req.body.cmd;
		let key 	 = req.body.key;

		console.log('raw cmd:', rawCmd)
		console.log('key:', key)

		// TODO: implement Array split instead of String parsing
		// if multiple arguments format remainder
		if(String(rawCmd).indexOf(' ') > 0){
			let breakChar = String(rawCmd).indexOf(' ')?String(rawCmd).indexOf(' '):String(rawCmd).length;
			let procCmd = String(rawCmd).substr(0,breakChar)
			let cmdRemainder = String(
				rawCmd
			).substr(
				breakChar+1,
				String(rawCmd).length
			)

			// run abstracted command
			// make request and response accessible
			// see: ./commands/index.js
			commandIndex(req, res, key, procCmd, cmdRemainder)

		// else, pass solo command
		} else {

			let procCmd = String(rawCmd);
			let cmdRemainder = null;

			// run abstracted command
			// make request and response accessible
			// see: ./commands/index.js
			commandIndex(req, res, key, procCmd, cmdRemainder)

		}
}
