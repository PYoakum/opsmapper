#!/usr/bin/env node
require('dotenv').config();

// dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const fs = require('fs');
const morgan = require('morgan');
const pug = require('pug');

// apis

// globals
const app = express();
const appPort = (process.env.PORT || 3000);
const initServer = require('./src/server/init.js');
const applyToRoutes = require('./src/server/apply.js');
const loadRoutes  = require('./src/routes/index.js')

app.use('/', express.static('dist/public'));

initServer(http, app, (server)=>{

  applyToRoutes(app)
  loadRoutes(app)

})
