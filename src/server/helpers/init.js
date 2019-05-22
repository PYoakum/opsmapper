const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const _port = process.env.PORT || 3000;
const colors = require('colors');
const morgan = require('morgan');

module.exports = {

  // production mode
  _production : (http, app, cb) =>{
    console.log('...starting'+' Production '.green+'server on port '+String(_port).magenta);
    if (cluster.isMaster) {
      console.log(`master ${process.pid} is running...`.green);
      for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
      }
      cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`.red);
      });
    } else {
      cb(http.createServer(app).listen(_port));
      console.log(`worker ${process.pid} started`);
    }
  },

  // development mode
  _development : (http, app, cb) => {

    app.use(morgan('dev'))
    cb(http.createServer(app).listen(_port));
    console.log('...starting'+' Development '.green+'server on port '+String(_port).magenta);

  }

}
