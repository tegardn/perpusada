'use strict'

/**
 * Initialization Express
 */

// Initializition
const express = require('express');
const router = express.Router();

// Controller
const { Controller } = require('../controller/Controller')

// Endpoint : Home
router.get('/', Controller.Homepage);


// export module
module.exports = { router }