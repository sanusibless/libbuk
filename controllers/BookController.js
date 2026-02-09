const Book = require("../models/Book");

class BookController {
    async index(req, res) {

        let searchOptions = {};
        if(req.query.title != null && req.query.title !== '') {
            searchOptions.title = new RegExp(req.query.title, 'i');
        }

        try{
            const books =  await Book.find(searchOptions);
            res.render('books/index', { 
                books,
                searchOptions 
            });

        } catch (error) {
            console.log(error);
            res.redirect('/');
        }
    }

    async getBook(req, res) {
        res.render('books/show');
    }

    async createBookView(req, res) {
        res.render('books/create');
    }

    async editBookView(req, res) {
        res.render('books/edit');
    }

    async storeBook(req, res) {
        res.redirect('/books');
    }

    async updateBook(req, res) {
        res.redirect('/books');
    }

    async deleteBook(req, res) {
        res.render('books/delete');
    }
}

module.exports = new BookController;