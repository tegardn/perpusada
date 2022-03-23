'use strict'

/**
 * Initialization Express
 */

// Initializition
const express = require('express');
const bookRouter = express.Router();

// Controller
const { BookController } = require('../controller/BookController')


// Endpoint : Home
bookRouter.get('/', BookController.FindAllBooks);

// Endpoint : Book by id
bookRouter.get('/:id', BookController.FindBookById);



// export module
module.exports = { bookRouter };