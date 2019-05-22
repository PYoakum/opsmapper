const drawLayer       = require('draw-layer');
const drawBackground  = require('draw-background');
const drawUnit        = require('draw-unit');
const drawConnector   = require('draw-connector');

function clearWindow(){
  var c=document.getElementById("main-window");
  var ctx=c.getContext("2d");
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight-50);
}

function sortArr(arr, key){
  return arr.sort((a, b) => {
    return a[key] - b[key];
  });
};

module.exports = (data, activeConnector) => {

  // clear canvas
  clearWindow();

  // sort array
  sortArr(data.grid.units, "x");
  sortArr(data.grid.units, "y");

  // set the body background color
  document.getElementsByTagName("body")[0].style.backgroundColor = data.grid.tileSet.default.palette[data.grid.settings.backgroundIndex];

  // draw background color
  drawBackground(data.grid.tileSet.default.palette[data.grid.settings.backgroundIndex])

  // draw layer
  drawLayer(
    data.grid.settings.originZ,
    data.grid.settings.tileWidth,
    data.grid.settings.tileLength,
    data.grid.settings.width,
    data.grid.settings.length,
    data.grid.settings.layerHeight,
    data.grid.tileSet[data.grid.settings.material],
    data.grid.settings.materialIndex,
    data.grid.tileSet[data.grid.settings.surface],
    data.grid.settings.surfaceIndex,
    data.grid.settings.originX,
    data.grid.settings.originY
  )

  for(var i=0;i<data.grid.connectors.length;i++){
    drawConnector(
      data.grid.connectors[i].coord,
      data.grid.connectors[i].color,
      data.grid.connectors[i].width,
      data.grid.settings.width,
      data.grid.settings.length,
      data.grid.settings.tileWidth,
      data.grid.settings.tileLength,
      data.grid.settings.originX,
      data.grid.settings.originY
    )
  }


  // draw active connector
  if(activeConnector.coord.length>0){
    drawConnector(
      activeConnector.coord,
      activeConnector.color,
      activeConnector.width,
      data.grid.settings.width,
      data.grid.settings.length,
      data.grid.settings.tileWidth,
      data.grid.settings.tileLength,
      data.grid.settings.originX,
      data.grid.settings.originY
    )
  }

  // draw all units
  for(var l=0;l<data.grid.units.length;l++){
    drawUnit(
      data.grid.units[l].texture,
      data.grid.units[l].key,
      data.grid.units[l].cmd,
      data.grid.units[l].color,
      data.grid.units[l].x,
      data.grid.units[l].y,
      data.grid.settings.width,
      data.grid.settings.length,
      data.grid.settings.tileWidth,
      data.grid.settings.tileLength,
      data.grid.settings.originX,
      data.grid.settings.originY,
      data.grid.units[l].specs
    );
  }
}
