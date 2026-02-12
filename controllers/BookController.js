const Book = require("../models/Book");
const Author = require("../models/Author");

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
        const authors = await Author.find({});
        const book = new Book;

        try {
            res.render('books/create',{
                'book': new Book,
                authors: authors
            });
        } catch(error) {
            res.render('/books/create',{
                book: book,
                authors: authors,
                errorMessage: "Unable to get create page"
            })
        }
    }

    async editBookView(req, res) {
        res.render('books/edit');
    }

    async storeBook(req, res) {
        try{
            const bookData = {
                'title': req.body.title,
                'description': req.body.description,
                'publishedDate': req.body.publishedDate,
                'pageCount': req.body.pageCount,
                'coverImageUrl': req.body.coverImageUrl,
                'author': req.body.author
            }
            console.log("bookData", bookData);
            const book = new Book(bookData);
            await book.save();
            res.redirect('/books/');
        } catch (error) {
            console.log(error.message);
            res.render('books/create', {
                book: req.body,
                authors: await Author.find({}),
                errorMessage: error.message
            });
        }
    }

    async updateBook(req, res) {
        res.redirect('/books');
    }

    async deleteBook(req, res) {
        res.render('books/delete');
    }
}

module.exports = new BookController;