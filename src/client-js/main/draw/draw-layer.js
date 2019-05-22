const drawCube  = require('draw-cube');
const drawTile  = require('draw-tile');
const _brush    = require('brush-tools');
const _drawGrid = require('convert-to-grid');
const _screen   = require('convert-to-grid');
const raiseZ    = require('set-z');


// this function draws the layer of cubes that make up the map
module.exports = (z,tileWidth,tileLength,sectionWidth,sectionLength,layerHeight,type, typeIndex, surface, surfaceIndex, offsetX, offsetY) => {

  let x,y;

  for(y = 0; y < sectionLength; y++)
  for(x = 0; x < sectionWidth; x++){

    let drawGrid = _drawGrid(x, y, sectionWidth, sectionLength, tileWidth, tileLength,offsetX, offsetY)

    // draw a cube for every tile
    drawCube(
      drawGrid.x,
      drawGrid.y+raiseZ(layerHeight, z),
      _brush.colorSelector(type.palette[typeIndex]),
      tileWidth,
      tileLength
    );

    // put surface on it, if map calls for surface value
    if(surface != null && surfaceIndex != null){
      drawTile(
        drawGrid.x,
        drawGrid.y+raiseZ(layerHeight, z),
        _brush.colorSelector(surface.palette[surfaceIndex]),
        tileWidth,
        tileLength
      );

    // draw cube color in place of tile if not specified
    } else if (surface != null && surfaceIndex == null){
      drawTile(
        drawGrid.x,
        drawGrid.y+raiseZ(layerHeight, z),
        _brush.colorSelector(surface.palette),
        tileWidth,
        tileLength
      );
    }

  }
}
