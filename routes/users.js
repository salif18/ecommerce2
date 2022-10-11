//importation du module express 
const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/users');

//router signup
router.post('/signup',userCtrl.signup);

//router login
router.post('/login',userCtrl.login);

//exportation 
module.exports = router;