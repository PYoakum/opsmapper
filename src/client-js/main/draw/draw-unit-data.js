const config        = require('config');
const specFont      = config.unitTitleFontSize+' '+config.unitTitleFontFamily;
const msgFont       = config.unitSubtitleFontSize+' '+config.unitSubtitleFontFamily;
const _port         = config.port!=null?String(':'+config.port):'';
const baseUrl       = String(config.protocol)+'://'+config.host+_port;
const msgSize       = Number(String(config.unitSubtitleFontSize).substr(0,config.unitSubtitleFontSize.length-2))
const hostSize      = Number(String(config.unitTitleFontSize).substr(0,config.unitTitleFontSize.length-2))

module.exports = (unitDataResponse, coord) => {

  let c=document.getElementById("main-window");
  let ctx=c.getContext("2d");
  ctx.fillStyle = unitDataResponse.color
  ctx.font = msgFont;
  ctx.fillText(unitDataResponse.data, coord.x, coord.y)

  // if msg and response
  if(unitDataResponse.specs && unitDataResponse.msg){

    ctx.fillStyle = unitDataResponse.color
    ctx.font = msgFont;
    ctx.fillText(unitDataResponse.data, coord.x, coord.y)

    ctx.fillStyle = unitDataResponse.color
    ctx.font = msgFont;
    ctx.fillText(unitDataResponse.msg, coord.x, (coord.y-((msgSize)+(msgSize*0.2))))

    // default specs from api
    ctx.fillStyle = unitDataResponse.specs.color
    ctx.font = specFont;
    ctx.fillText(unitDataResponse.specs.hostname, coord.x, (coord.y-((hostSize)+(msgSize*0.2)+(msgSize)+(msgSize*0.2))))

  } else if(unitDataResponse.specs && !unitDataResponse.msg){

    // default specs from api
    ctx.fillStyle = unitDataResponse.specs.color
    ctx.font = specFont;
    ctx.fillText(unitDataResponse.specs.hostname, coord.x, (coord.y-(hostSize)+(msgSize*0.2)))

  }
}
