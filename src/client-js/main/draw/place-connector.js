const _screen = require('convert-to-screen');
const renderGrid = require('render-grid');

module.exports = (event, gridData, activeConnector) => {
    let e = document.getElementById("connector-width");
    let k = document.getElementById("connector-color");
    let u = document.getElementById("unit-url");

      // get map coordinates from screen
      let coord = {
        'x' : _screen(
          event.clientX,
          event.clientY,
          gridData.grid.settings.tileWidth,
          gridData.grid.settings.tileLength,
          gridData.grid.settings.cursorOffsetX,
          gridData.grid.settings.cursorOffsetY
        )._x-1,
        'y' : _screen(
          event.clientX,
          event.clientY,
          gridData.grid.settings.tileWidth,
          gridData.grid.settings.tileLength,
          gridData.grid.settings.cursorOffsetX,
          gridData.grid.settings.cursorOffsetY
        )._y-1
      };

      if((coord.x <= (gridData.grid.settings.width-1) && coord.x >= 0) && (coord.y <= (gridData.grid.settings.length-1) && coord.y >= 0)){
        activeConnector.coord.push({
          x:coord.x,
          y:coord.y
        });
      }

    renderGrid(gridData, activeConnector)

}
