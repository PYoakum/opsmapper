const path = require('path');

var pageConfig = {
  resolve : {
    alias: {

      // config
      'config'              : path.join(__dirname, './src/client-js/main/config.js'),

      // draw functions
      'brush-tools'         : path.join(__dirname, './src/client-js/main/draw/brush-tools.js'),
      'draw-connector'      : path.join(__dirname, './src/client-js/main/draw/draw-connector.js'),
      'draw-background'     : path.join(__dirname, './src/client-js/main/draw/draw-background.js'),
      'draw-cube'           : path.join(__dirname, './src/client-js/main/draw/draw-cube.js'),
      'draw-layer'          : path.join(__dirname, './src/client-js/main/draw/draw-layer.js'),
      'draw-main-window'    : path.join(__dirname, './src/client-js/main/draw/draw-main-window.js'),
      'draw-outline'        : path.join(__dirname, './src/client-js/main/draw/draw-outline.js'),
      'draw-text'           : path.join(__dirname, './src/client-js/main/draw/draw-text.js'),
      'draw-tile'           : path.join(__dirname, './src/client-js/main/draw/draw-tile.js'),
      'draw-unit'           : path.join(__dirname, './src/client-js/main/draw/draw-unit.js'),
      'draw-unit-data'      : path.join(__dirname, './src/client-js/main/draw/draw-unit-data.js'),
      'render-grid'         : path.join(__dirname, './src/client-js/main/draw/render-grid.js'),
      'place-connector'     : path.join(__dirname, './src/client-js/main/draw/place-connector.js'),
      'end-connector'       : path.join(__dirname, './src/client-js/main/draw/end-connector.js'),
      'place-unit'          : path.join(__dirname, './src/client-js/main/draw/place-unit.js'),
      'remove-unit'         : path.join(__dirname, './src/client-js/main/draw/remove-unit.js'),

      // ui
      'add-ui-elements'     : path.join(__dirname, './src/client-js/main/ui/add-ui-elements.js'),
      'get-unit-textures'   : path.join(__dirname, './src/client-js/main/ui/get-unit-textures.js'),

      // elements
      'add-ui-bar'          : path.join(__dirname, './src/client-js/main/ui/elements/add-ui-bar.js'),
      'draw-mode'           : path.join(__dirname, './src/client-js/main/ui/elements/draw-mode.js'),
      'unit-selector'       : path.join(__dirname, './src/client-js/main/ui/elements/unit-selector.js'),
      'input-key'           : path.join(__dirname, './src/client-js/main/ui/elements/input-key.js'),
      'copy-data-btn'       : path.join(__dirname, './src/client-js/main/ui/elements/copy-data-btn.js'),
      'json-field'          : path.join(__dirname, './src/client-js/main/ui/elements/json-field.js'),
      'action-field'        : path.join(__dirname, './src/client-js/main/ui/elements/action-input-field.js'),
      'paste-data-btn'      : path.join(__dirname, './src/client-js/main/ui/elements/paste-data-btn.js'),
      'export-pic-btn'      : path.join(__dirname, './src/client-js/main/ui/elements/export-pic-btn.js'),
      'add-connector-width' : path.join(__dirname, './src/client-js/main/ui/elements/add-connector-width.js'),
      'add-connector-color' : path.join(__dirname, './src/client-js/main/ui/elements/add-connector-color.js'),


      // utility
      'xhr-post-json'       : path.join(__dirname, './src/client-js/main/utility/xhr-json-post'),
      'canvas-text'         : path.join(__dirname, './src/client-js/main/utility/canvas-text.js'),
      'convert-to-grid'     : path.join(__dirname, './src/client-js/main/utility/convert-to-grid'),
      'convert-to-screen'   : path.join(__dirname, './src/client-js/main/utility/convert-to-screen.js'),
      'parse-query-string'  : path.join(__dirname, './src/client-js/main/utility/parse-query-string.js'),
      'load-grid'           : path.join(__dirname, './src/client-js/main/utility/load-grid.js'),
      'set-z'               : path.join(__dirname, './src/client-js/main/utility/set-z.js'),
    }
  }
}

var mainJs = Object.assign({}, pageConfig, {
  entry: [
    "./src/client-js/main/index.js",
  ],
  output: {
    filename: "./public/js/main.js"
  }
})

module.exports = [
  mainJs
]
