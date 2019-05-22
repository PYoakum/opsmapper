// TODO : add client-side import/export of gridData

// import utility
const config            = require('config');
const loadJSON          = require('load-grid');
const _grid             = require('convert-to-grid');
const _screen           = require('convert-to-screen');

// import draw tools
const drawMainWindow    = require('draw-main-window');
const renderGrid        = require('render-grid');
const _equipment        = require('draw-unit');
const placeUnit         = require('place-unit');
const removeUnit        = require('remove-unit');
const placeConnector    = require('place-connector');
const endConnector      = require('end-connector');
const parseQueryString  = require('parse-query-string');

//import ui
const addUiElements     = require('add-ui-elements');

function removeElement(elementId) {
  // Removes an element from the document
  let element = document.getElementById(elementId);
  element.parentNode.removeChild(element);
}

function copyToClipboard(text) {
  let dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  dummy.value = text;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
}


// set global client variables
var gridData,
drawMode,
resizeNeeded = false;

// set the redraw (and refresh) rate
var _timeoutInterval = parseQueryString('rate');
console.log('refresh interval', _timeoutInterval)

var activeConnector = {
  "color" : null,
  "width" : null,
  "coord" : []
}

var clickEvent = (e) => {

  let drawModeEle =  document.getElementById("draw-mode")
  let drawModeVal = drawModeEle.options[drawModeEle.selectedIndex].value;

  // check the draw mode
  if( drawModeVal == 'Draw' ){
    placeUnit( e, gridData, activeConnector );              // place unit on board
  } else if( drawModeVal == 'Erase' ){
    removeUnit( e, gridData, activeConnector);              // erase unit on board
  } else if( drawModeVal == 'Node' ){
    placeConnector( e, gridData, activeConnector );         // place connector node
    console.log('active connectors', activeConnector)
  } else if ( drawModeVal == 'End' ) {

    // double-check that there is actually coordinates to push
    if ( activeConnector.coord.length > 0 ) {
      endConnector(e, activeConnector, gridData);           // push active connector object to gridData
    }

  }
}

// place unit on click
function addCursorAction(){
  document.getElementById("main-window").addEventListener('click', clickEvent)
}

function removeCursorAction(){
  document.getElementById("main-window").removeEventListener('click', clickEvent)
}

function init(){

  drawMainWindow();        // draw window
  addUiElements();         // draw unit selector

  // get grid data
  loadJSON((res)=>{
    gridData = JSON.parse(res);
    drawNewScreen()
  });

  // this parent function redraws the
  function drawNewScreen(){
    removeCursorAction()                    // remove event listener for cursor action
    removeElement('main-window');           // remove canvas
    drawMainWindow();                       // redraw canvas
    addCursorAction();                      // add event listener for cursor action
    renderGrid(gridData, activeConnector)   // redraw canvas content
  }

  // on window resize, redraw canvas,
  window.onresize = (event) => {
    if(resizeNeeded === false){
      console.log('resizing canvas...')
      resizeNeeded = true
      setTimeout(() => {
        drawNewScreen()
        resizeNeeded = false
        console.log('resizing done!')
      }, config.redrawDelay )
    }

    // uncomment block to enable map scaling on redraw - currently breaks
    // TODO : Fix placeUnit() with dynamic scaling
    /*
    let c=document.getElementById("main-window");
    c.style.width = window.innerWidth;
    c.style.height = window.innerHeight - 50;
    let ctx=c.getContext("2d");
    console.log("window size", {"width": c.width}, {"height" : c.height})
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    renderGrid(gridData)
    */

  };

  // redraw map at interval inherited by query string or by config value
  window.setInterval(()=>{
    renderGrid(gridData, activeConnector)
  }, (_timeoutInterval != (null||undefined)?_timeoutInterval:config.refreshInterval));

  // add copy button event listener
  document.getElementById("copy-btn").addEventListener('click', ()=>{
    console.log('grid data', gridData)
    copyToClipboard(JSON.stringify(gridData))
  })

  // add copy button event listener
  document.getElementById("paste-btn").addEventListener('click', ()=>{
    console.log('pasted', gridData)
    let pastedValue = document.getElementById("json-field").value
    gridData = JSON.parse(pastedValue);
    document.getElementById("json-field").value = '';
    renderGrid(gridData, activeConnector)
  })

  // simple trick to export the canvas object as png
  // https://stackoverflow.com/questions/923885/capture-html-canvas-as-gif-jpg-png-pdf
  document.getElementById("export-pic-btn").addEventListener('click', ()=>{
    let canvas = document.getElementById("main-window");
    let img = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    window.location.href = img;
  })

  document.getElementById("connector-color").addEventListener('change', function(e){
    console.log( 'connector color', this.value )
    activeConnector.color = '#'+String(this.value).substr(0,6);
  })

  // set the grid
  document.getElementById("connector-width").addEventListener('change', function(e){
    console.log( 'connector width', this.value )
    activeConnector.width = Number(this.value);
  })

}

window.addEventListener ?
window.addEventListener("load", init, false) :
window.attachEvent && window.attachEvent("onload", init);
