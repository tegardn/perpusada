'use strict'

/**
 * SQL Init from COnfig
 */
const sql = require('../config/db');

class Book {
    constructor(ID, book_label, book_tittle, book_author, book_genre, book_publisher, book_isbn, book_year, book_price, book_stock, created_at, updated_at) {
        this.ID = ID;
        this.book_label = book_label;
        this.book_tittle = book_tittle;
        this.book_author = book_author;
        this.book_genre = book_genre;
        this.book_publisher = book_publisher;
        this.book_isbn = book_isbn;
        this.book_year = book_year;
        this.book_price = book_price;
        this.book_stock = book_stock;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
    static showAllBooks(result) {
        let sqlQuery = `SELECT * FROM book`;
        sql.query(sqlQuery, (err, res) => {
            if (err) {
                console.log('this is Err => /n', err);
                result(err, null)
            } else {
                console.log('result', res);
                result(null, res);
            }
        });
    }
}
    

module.exports = {
    Book
}