const networkApi	      = require('../api/network-api.js');

module.exports = (app) => {

  app.post('/api/cmd', networkApi)

}
