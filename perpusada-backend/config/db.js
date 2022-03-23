'use strict'

/**
 * Initialization MYSQL
 * Import DB Config
 * Create Connection to Database
 * Open MYSQL Connection
 */

// Initialization MYSQL
const mysql = require('mysql')

// Import DB Config
const DBConfig = require('./db.config');

// Create Connection to Database
const connectDB = mysql.createConnection({
    host: DBConfig.HOST,
    user: DBConfig.USER,
    password: DBConfig.PASSWORD,
    database: DBConfig.DB,
});

connectDB.connect(err => {
    if (err) throw err;
    console.log('Connected success to database');
});

module.exports = connectDB;