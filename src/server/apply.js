const bodyParser 	    = require('body-parser');

module.exports = (app) => {

  const allowCrossDomain = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  }

  //-------------APP USE
  app.set('views', __dirname + '/../views/');
  app.set('view engine', 'pug');
  app.use(bodyParser.json());
  app.use(allowCrossDomain)

}
