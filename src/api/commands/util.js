const dns = require('dns');
const request = require('request');
const url = require('url');
var { Resolver } = require('dns');
var resolver = new Resolver();

var defaultHeaders = {

}

module.exports = {


  osDNSIp: (req, res, key, procCmd, cmdRemainder) => {

    dns.lookup(key, (err, address, family) => {
      if(!err){

        res.json({
          'color' 		: '#ffff66',
          'msg' 			: 'IPv'+String(family),
          'data' 			: '↳'+String(address),
          'specs' 		: {
            'color' 		: '#692aff',
            'hostname' 	: String(key)
          }
        })

      } else {

        res.json({
          'color' 		: '#ffff66',
          'msg' 			: '**********',
          'data' 			: '↳'+String(err),
          'specs' 		: {
            'color' 		: '#ff0066',
            'hostname' 	: 'ERR'
          }
        })

      }

    });
  },

  extDNSIp: (req, res, key, procCmd, cmdRemainder) => {

    resolver.setServers([cmdRemainder]);
    resolver.resolve4(key, (err, addresses) => {

      if(!err){

        res.json({
          'color' 		: '#ffff66',
          'msg' 			: '@'+cmdRemainder,
          'data' 			: '↳'+String(addresses),
          'specs' 		: {
            'color' 		: '#692aff',
            'hostname' 	: String(key)
          }
        })

      } else {

        res.json({
          'color' 		: '#ff0066',
          'msg' 			: '[ ERR! ]',
          'data' 			: String(err),
          'specs' 		: {
            'color' 		: '#ffffff',
            'hostname' 	: String(key)
          }
        })

      }

    })

  }

}
