'use strict'

/**
 * Class Declaration
 * Write Export Class
 * Add model to Controller
 * Mobile Export class
 */

const { Book } = require ('../model/Book');

class BookController {
    static FindAllBooks(req, res) {
        Book.showAllBooks((err, data) => {
            if(err) {
                console.log('Controller eror');
            } else {
                console.log('data', data);
            }
        })
    }
}

module.exports = {
    BookController,
};