function index(req, res){
    res.render('ejemplo/index', { layout: 'main.hbs' });
}

module.exports = {
    index: index,
}