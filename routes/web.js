const express = require('express');
const router = express.Router();
const HomeController =  require('../controllers/HomeController');
const AuthorController = require('../controllers/AuthorController');

router.get('/', HomeController.index);

router.get('/authors', AuthorController.index);
router.get('/authors/create', AuthorController.createAuthorView);
router.post('/authors/create', AuthorController.storeAuthor);

module.exports = router;