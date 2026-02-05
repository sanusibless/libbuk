class Author {
    index(req, res) {
        res.render('../views/author/index');
    }

    getAuthor(req, res) {
        res.render('../views/author/show');
    }
 }