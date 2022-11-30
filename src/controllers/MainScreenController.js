function login(req, res){
    res.render('mainscreen/mainscreen', { layout: 'main.hbs'});
}

module.exports = {
    login: login,
}