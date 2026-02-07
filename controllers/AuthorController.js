const Author = require('../models/Author');

class AuthorController {
    #author;
    constructor() {
        this.author = new Author;
    }
    async index(req, res) {
        try {
            const authors = await Author.find({});
            res.render('authors/index', { authors });
        } catch (error) {
            console.log(error);
        }
    }

    getAuthor(req, res) {
        res.render('authors/show');
    }

    createAuthorView(req, res) {

        res.render('authors/create', {
            author: new Author,
        });
    }

    storeAuthor(req, res) {
        const author = new Author({
            name: req.body.name,
            dob: req.body.dob
        });
        author.save();
        res.send(author);
    }
 }

module.exports = new AuthorController;