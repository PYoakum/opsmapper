const addUiBar            = require('add-ui-bar');
const unitSelector        = require('unit-selector');
const inputKey            = require('input-key');
const jsonField           = require('json-field');
const actionField         = require('action-field');
const copyDataBtn         = require('copy-data-btn');
const pasteDataBtn        = require('paste-data-btn');
const exportPicBtn        = require('export-pic-btn');
const drawMode            = require('draw-mode');
const addConnectorWidth   = require('add-connector-width');
const addConnectorColor   = require('add-connector-color');

module.exports = () => {

    addUiBar()
    unitSelector()
    inputKey()
    actionField()
    copyDataBtn()
    exportPicBtn()
    pasteDataBtn()
    jsonField()
    drawMode()
    addConnectorWidth()
    addConnectorColor()

}
