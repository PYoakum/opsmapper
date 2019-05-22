const draw = require('../api/draw-api.js');

module.exports = (app) => {

  app.get('/map', draw.getMap);
  
}
