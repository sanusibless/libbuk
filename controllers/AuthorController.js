const Author = require('../models/Author');

class AuthorController {
    #author;
    constructor() {}
    async index(req, res) {
        let searchOptions = {};
        if(req.query.name != null && req.query.name !== '') {
            searchOptions.name = new RegExp(req.query.name, 'i');
        }
        try {
            const authors = await Author.find(searchOptions);
            res.render('authors/index', { 
                authors,
                searchOptions: req.query
            });
        } catch (error) {
            console.log(error);
            res.redirect('/');
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

    async storeAuthor(req, res) {
        const author = new Author({
            name: req.body.name,
            dob: req.body.dob
        });
        try{
            await author.save();
            res.redirect('authors');
        } catch (error) {
            console.log(error);
            res.render('authors/create', 
                {
                    author: author,
                    errorMessage : 'Error in creating Error'
                }
            );
        }

    }
 }

module.exports = new AuthorController;