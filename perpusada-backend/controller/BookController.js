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
                res.json({
                    tittle: 'API Backend Toko Buku',
                    massage: 'Koleksi Buku',
                    status: '200',
                    data,
                });
            }
        });
    }

    static FindBookById(req, res) {
        // console.log('ini id', req.params.id);
        const { id } = req.params;
        Book.showBookById(id, (err, data) => {
            if (err) {
                console.log(err);
            } else {
                res.json({
                    tittle: 'API Backend Toko Buku',
                    massage: 'Koleksi Buku',
                    status: '200',
                    data
                })    
            }
        });
    } 
}

module.exports = {
    BookController,
};