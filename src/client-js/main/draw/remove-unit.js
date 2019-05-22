const _screen = require('convert-to-screen');
const renderGrid = require('render-grid');

module.exports = (event, gridData, activeConnector) => {
    let e = document.getElementById("unit-selector");
    let k = document.getElementById("unit-key");
    let u = document.getElementById("unit-url");

    if (typeof(e) != 'undefined' && e != null){
      let selectedUnit = e.options[e.selectedIndex].text;

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
        for( var i = 0; i < gridData.grid.units.length; i++){
           if (
             gridData.grid.units[i].x === coord.x &&
             gridData.grid.units[i].y === coord.y
           ) {
             console.log('removing', gridData.grid.units[i])
             gridData.grid.units.splice(i, 1);
             i--;
           }
        }
      }
    }
    renderGrid(gridData, activeConnector)
}
