// importation du module express
const express = require('express');
const router = express.Router();
const multer = require('../middleware/multer');
const auth = require('../middleware/auth');

//importation du produit controllers
const produitsCtrl = require ('../controllers/produits');

//routes 
//inserer produit
router.post('/' , auth, multer,produitsCtrl.insertArticles);

//afficher produits
router.get('/', auth, produitsCtrl.afficheAllArticles);

//selectioner un produit
router.get('/:id',auth, produitsCtrl.afficheUnArticles);

//modifier un produit
router.put('/:id',auth, multer, produitsCtrl.modifierArticles);

//supprimer un produit
router.delete('/:id',auth, multer, produitsCtrl.supprimerArticles);

//exportation
module.exports = router;
