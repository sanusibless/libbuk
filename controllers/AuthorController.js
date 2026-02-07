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
        author.save((err, newAutor) => {
            if (err) {
                console.log(err);
                res.render('authors/create', 
                    {
                        author: newAuthor,
                        errorMessage : 'Error in creating Error'
                    }
                );
            } else {
                // res.redirect(`authors/${newAuthor._id}`);
                res.redirect('authors');
            }
        });
    }
 }

module.exports = new AuthorController;