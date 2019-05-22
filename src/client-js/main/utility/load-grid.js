const config            = require('config');
const parseQueryString  = require('parse-query-string');

module.exports = (callback) => {

  let mapQuery = parseQueryString('map') == null?'?map=default':'?map='+parseQueryString('map');
  let _port = config.port!=null?String(':'+config.port):'';
  let baseUrl = String(config.protocol)+'://'+config.host+_port;
  let xhr = new XMLHttpRequest();
  let mapApiUrl = baseUrl+'/map'+mapQuery;
  console.log('requesting map', parseQueryString('map'))
  xhr.overrideMimeType("application/json");
  xhr.open('GET', mapApiUrl, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == "200") {
      callback(xhr.responseText);
    }
  };
  xhr.send(null);
}
