'use strict'

/**
 * Initialization Express
 */

// Initializition
const express = require('express');
const router = express.Router();

// Controller
const { Controller } = require('../controller/Controller');
const {bookRouter} = require('./BookRouter');

// Endpoint : Home
router.get('/', Controller.Homepage);

// EndPoint Book
router.use('/books', bookRouter);

// export module
module.exports = { router }