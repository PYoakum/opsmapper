const config        = require('config');
const convertToGrid = require('convert-to-grid');
const getUnitData   = require('xhr-post-json');
const drawUnitData  = require('draw-unit-data');

function getObjectKeyIndex(obj, keyToFind) {
  let i = 0, key;
  for (key in obj) {
    if (key == keyToFind) {
      return i;
    }
    i++;
  }
  return null;
}

const specFont  = config.unitTitleFontSize+' '+config.unitTitleFontFamily;
const msgFont   = config.unitSubtitleFontSize+' '+config.unitSubtitleFontFamily;
const _port = config.port!=null?String(':'+config.port):'';
const baseUrl = String(config.protocol)+'://'+config.host+_port;
const msgSize = Number(String(config.unitSubtitleFontSize).substr(0,config.unitSubtitleFontSize.length-2))
const hostSize = Number(String(config.unitTitleFontSize).substr(0,config.unitTitleFontSize.length-2))

module.exports = (texture, _key, cmd, color, x, y, sectionWidth, sectionLength, tileWidth, tileLength, offsetX, offsetY, specs) => {

    let c=document.getElementById("main-window");
    let ctx=c.getContext("2d");
    let img = new Image();
    img.src = baseUrl+"/sprites/svgs/"+texture+".svg";
    let coord = convertToGrid(
      x-1,
      y-2,
      sectionWidth,
      sectionLength,
      tileWidth,
      tileLength,
      offsetX,
      offsetY
    );

    img.onload = () => {

      // text remains in foreground
      ctx.drawImage(img, coord.x, coord.y)
      if(_key && cmd){

        let payload = {
          'cmd' : String(cmd),
          'key' : _key
        }

        // make POST request for every unit on board, parse response, passe to units
        getUnitData('/api/cmd', payload, (res) => {

          let _res = JSON.parse(res)
          drawUnitData(_res, coord);

        });
      }
    }
  }
