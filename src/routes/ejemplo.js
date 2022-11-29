const express = require('express');
const EjemploController = require('../controllers/EjemploController');
const router = express.Router();

router.get('/ejemplo/index', EjemploController.index);


module.exports = router;