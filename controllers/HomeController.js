class HomeController {
    index(req, res) {
        res.render('../views/home/index');
    }
}

module.exports = new HomeController;