'use strict'

/**
 * Class Declaration
 * Module Export Class
 */

class BookController {
    static FindAllBooks(req, res) {
        res.send('Hello ini BookController Tegar');
    }
}

module.exports = {
    BookController
};