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
                let rawData = res;
                let books = [];
                let book;
                rawData.forEach((eachData) => {
                    book = new Book(
                        eachData.ID,
                        eachData.book_label,
                        eachData.book_tittle,
                        eachData.book_author,
                        eachData.book_genre,
                        eachData.book_publisher,
                        eachData.book_isbn,
                        eachData.book_year,
                        eachData.book_price,
                        eachData.book_stock,
                        eachData.created_at,
                        eachData.updated_at,
                    );
                    books.push(book);
                });

                console.log('result', books);
                result(null, books);
            }
        });
    }
    static showBookById(id, result) {
        let sqlQuery = `SELECT * FROM book WHERE ID = ${id}`;
        sql.query(sqlQuery, (err, res) => {
            if (err) {
                console.log(' error =>, err');
                result(err, null);
            } else {
                let rawData = res;
                let books = [];
                let book;
                rawData.forEach((eachData) => {
                    book = new Book(
                        eachData.ID,
                        eachData.book_label,
                        eachData.book_tittle,
                        eachData.book_author,
                        eachData.book_genre,
                        eachData.book_publisher,
                        eachData.book_isbn,
                        eachData.book_year,
                        eachData.book_price,
                        eachData.book_stock,
                        eachData.created_at,
                        eachData.updated_at,
                    );
                    books.push(book)
                });   
                console.log('result', res);
                result(null, books);
            }
        })
    }
}
    

module.exports = {
    Book
}