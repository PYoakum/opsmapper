// commands
const test = require('./test.js');
const msg = require('./msg.js');
const util = require('./util.js');

module.exports = (req, res, key, procCmd, cmdRemainder) => {

  // command switch
  switch(procCmd){

    case 'test':
      return test.testCmd(req, res, key, procCmd, cmdRemainder)

    case 'testsh':
        return test.testShell(req, res, key, procCmd, cmdRemainder)

    case 'kmsg':
      return msg.keyMsg(req, res, key, procCmd, cmdRemainder)

    case 'msg':
      return msg.plainMsg(req, res, key, procCmd, cmdRemainder)

    case 'odns':
      return util.osDNSIp(req, res, key, procCmd, cmdRemainder)

    case 'edns':
      return util.extDNSIp(req, res, key, procCmd, cmdRemainder)

    default:
      return test.basicErr(req, res, key, procCmd, cmdRemainder)

  }

}
