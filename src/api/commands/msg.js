module.exports = {

  keyMsg : function(req, res, key, procCmd, cmdRemainder){

    let msg = cmdRemainder.substr(0, cmdRemainder.length)

    res.json({
      'color'     : '#ffffff',
      'msg' 			: String(msg),
      'data' 			: '',
      'specs' 		: {
        'color' 	  : '#ffffff',
        'hostname' 	: String(key)
      }
    })

  },

  plainMsg : function(req, res, key, procCmd, cmdRemainder){

    res.json({
      'color'     : '#ffffff',
      'msg' 			: '',
      'data' 			: '',
      'specs' 		: {
        'color' 	  : '#ffffff',
        'hostname' 	: String(key)
      }
    })

  }

}
