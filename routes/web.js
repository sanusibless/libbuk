const express = require('express');
const router = express.Router();
const HomeController =  require('../controllers/HomeController');
const AuthorController = require('../controllers/AuthorController');
const BookController = require('../controllers/BookController');

router.get('/', HomeController.index);

// Authors Routes
router.get('/authors', AuthorController.index);
router.get('/authors/create', AuthorController.createAuthorView);
router.post('/authors/create', AuthorController.storeAuthor);


// Books Routes
router.get('/books', BookController.index);
router.get('/books/create', BookController.createBookView);
router.post('/books/store', BookController.storeBook);
router.get('/book/:id/show', BookController.getBook);
router.get('/book/:id/edit', BookController.editBookView);
router.put('/book/:id/update', BookController.updateBook);












module.exports = router;