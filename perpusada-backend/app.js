/**
 * Express Init
 * Setting port
 * Cors init
 * Dotenv Init
 * Body Parser
 */

// Initializition dotenv
require('dotenv').config();

// Initializition Libraries
const express = require('express')
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

// Import Router
const {router} = require('./router/router');
const {bookRouter} = require('./router/BookRouter');

// Initializition PORT
const port = process.env.PORT || 3000;

// Cors Option Origin
let originOptionCors = {
    origin: `http://localhost:${port}`
}

app.use(cors(originOptionCors));

// Routing
app.use('/', router);
app.use('/books', bookRouter);

// Port Connection
app.listen(port, () => `connect to server on port ${port}`)