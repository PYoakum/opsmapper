const _port = process.env.PORT;
const colors = require('colors');
const init = require('./helpers/init.js')


module.exports=(http, app, cb)=>{

  // if production mode start in cluster mode
  if(process.env.LOCAL=='production'){
    init._production(http, app, (server)=>cb(server))

  // if development mode start development mode :P
  } else if(process.env.LOCAL=='development' || process.env.LOCAL == undefined || process.env.LOCAL == null){
    init._development(http, app, (server)=>cb(server))
  }
}
