const config = require('config');
const _port = config.port!=null?String(':'+config.port):'';
const baseUrl = String(config.protocol)+'://'+config.host+_port;

module.exports = (callback) => {

  let xhr = new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open('GET', baseUrl+'/unit/textures', true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == "200") {
      let _response = JSON.parse(xhr.response)
      callback(_response);
    } else if (xhr.readyState == 4 && xhr.status != "200") {
      callback('no textures found');
    }
  };
  xhr.send(null);
  
}
