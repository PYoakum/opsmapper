const renderGrid = require('render-grid');

module.exports = (event, activeConnector, gridData) => {

  let _temp = JSON.parse(JSON.stringify(activeConnector));
  gridData.grid.connectors.push(_temp);
  activeConnector.coord.length = 0;   // set active connector coordinate array length to 0 (remove child objects)
  renderGrid(gridData, activeConnector)

}
