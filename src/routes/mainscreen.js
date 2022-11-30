const express = require('express');
const LoginController = require('../controllers/MainScreenController');
const router = express.Router();

router.get('/mainscreen/mainscreen', LoginController.login);


module.exports = router;