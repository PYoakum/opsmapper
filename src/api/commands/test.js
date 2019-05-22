const exec =  require('child_process').exec;

module.exports = {

  testShell: (req, res, key, procCmd, cmdRemainder) => {

		exec('echo '+String(key), (err, stdout, stderr) => {

      // if err, return err
      if (err) {

        console.log('ERR!', err)

        res.json({
          'color' 		: '#ff0066',
          'msg' 			: '[ ERR! ]',
          'data' 			: String(err),
          'specs' 		: {
            'color' 		: '#ffffff',
            'hostname' 	: String(key)
          }
        })

      // if stderr, return stderr
      } else if (stderr) {

        console.log('STDERR!', stderr)

        res.json({
          'color' 		: '#ff0066',
          'msg' 			: '[ ERR! ]',
          'data' 			: String(stderr),
          'specs' 		: {
            'color' 		: '#ffffff',
            'hostname' 	: String(key)
          }
        })

      // if stdout, return message
      } else if (stdout) {

        console.log('STDOUT', stdout)

        res.json({
          'color' 	: '#00ff66',
          'msg' 			: '[ OK! ]',
          'data' 			: String(stdout),
          'specs' 		: {
            'color' 		: '#ffffff',
            'hostname' 	: String(key)
          }
        })

      }
      
    })
  },


  testCmd: (req, res, key, procCmd, cmdRemainder) => {

    res.json({
      'color' 		: '#ffff66',
      'msg' 			: '********',
      'data' 			: 'TEST',
      'specs' 		: {
        'color' 		: '#ffffff',
        'hostname' 	: 'TEST'
      }
    })

  },

  basicErr: (req, res, key, procCmd, cmdRemainder) => {

    res.json({
      'color' 		: '#ff0066',
      'msg' 			: '*****',
      'data' 			: '[ ERR! ]',
      'specs' 		: {
        'color' 		: '#ffffff',
        'hostname' 	: 'Syntax Err/Unkn Cmd'
      }
    })

  }


}
