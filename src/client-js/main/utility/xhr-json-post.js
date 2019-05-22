const config = require('config');
const _port = config.port!=null?String(':'+config.port):'';
const baseUrl = String(config.protocol)+'://'+config.host+_port;

module.exports = (urlPath, payload, callback) => {

  let xhr = new XMLHttpRequest();
  xhr.open('POST', String(baseUrl+urlPath), true);
  xhr.setRequestHeader('Content-type', 'application/json');

  // set the response callback function
  xhr.onload = (data) => {

    // get response, parse JSON
    let res = JSON.parse(data.currentTarget.response)
    
    if(data.currentTarget.response) {
      // callback with response
      callback(data.currentTarget.response)
    } else {
      // callback error
      callback({'err':500})
    }
  };

  // stringify JSON payload and send in POST request
  xhr.send(JSON.stringify(payload));

}
