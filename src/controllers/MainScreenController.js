function login(req, res){
    res.render('mainscreen/mainscreen', { layout: 'main.hbs', style: 'style.css'});
}

module.exports = {
    login: login,
}