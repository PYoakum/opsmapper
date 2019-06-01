const uuid = require('uuid/v4');
const fs = require('fs');
const url = require('url');
const defaultMap = require('./maps/default.js');
const five_by_five = require('./maps/5x5.js');
const ten_by_ten = require('./maps/10x10.js');
const fifteen_by_fifteen = require('./maps/15x15.js');
const bold = require('./maps/bold-15x15.js');
const lgBlue = require('./maps/blue-15x15.js');
const medBlue = require('./maps/blue-10x10.js');
const smBlue = require('./maps/blue-5x5.js');
const landmass = require('./maps/landmass-15x15.js');
const boldFifteen_by_fifteen = require('./maps/bold-15x15.js');

module.exports = {

  getMap : (req, res) => {
		let queryData = url.parse(req.url, true).query;

		switch(queryData.map){
			case '5x5':
				res.json(five_by_five)
			case '10x10':
				res.json(ten_by_ten)
			case '15x15':
				res.json(fifteen_by_fifteen)
			case 'bold':
				res.json(bold)
			case 'blue5x5':
				res.json(smBlue)
			case 'blue10x10':
				res.json(medBlue)
			case 'blue15x15':
				res.json(lgBlue)
			case 'landmass':
				res.json(landmass)
			default:
				res.json(defaultMap)
		}
	},

	// get list of sprites from ./dist/public/sprites/svgs
	listUnitTextures : (req, res) => {
		let unitTextureList = []

		fs.readdirSync(__dirname + '/../../dist/public/sprites/svgs/').forEach(function(filename) {
			if (~filename.indexOf('.svg')) unitTextureList.push(filename);
		});

		fs.readdir(__dirname + '/../../dist/public/sprites/svgs/', (err, items) => {
			if(unitTextureList.length = items.length){
				res.json(unitTextureList);
			}
		});

	}

}
