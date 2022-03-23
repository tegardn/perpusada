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


// Initializition PORT
const port = process.env.PORT || 3000;

// Cors Option Origin
let originOptionCors = {
    origin: `http://localhost:${port}`
}

app.use(cors(originOptionCors));

// parse requests of content-type - application/json
// app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
// app.use(express.urlencoded({ extended: true }));

// Routing
app.use('/', router);

// Port Connection
app.listen(port, () => `connect to server on port ${port}`)