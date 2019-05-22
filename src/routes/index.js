const apiRoutes = require('./api.js');
const mapRoutes = require('./maps.js');
const txrRoutes = require('./textures.js');

module.exports = (app) => {

  app.get('/', (req,res)=>res.render('../views/index.pug'))
  mapRoutes(app);
  txrRoutes(app);
  apiRoutes(app);

}
