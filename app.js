//importation du module express 
const express = require('express');
const app = express();
const data = require('./data/connection');
const path = require('path');
const ejs = require('ejs');
const staticPath = path.join(__dirname,'public');
const userRouter = require('./routes/users');
const produitsRouter =require('./routes/produits');

//autorisation de lire les doonees json
app.use(express.json());
app.use(express.static(staticPath));
app.use('/images',express.static(path.join(__dirname,'images')));
//config ejs
app.set('view engine','ejs');
app.set('views','./public/views');

//connection avec tous les servers
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

//--- FONTIONS--->

// A-routes des pages
// 1- acceuil
app.get('/home',(req,res)=>{
    res.render('shop')
})

// 2- boutique
app.get('/boutique',(req,res)=>{
    res.render('nboutique')
});

// 3- nouveautes
app.get('/nouveautes',(req,res)=>{
    res.render('nouveaute')
});

// 4- connection au compte
app.get('/connection',(req,res) => {
    res.render('shopconnection')
});

// 5- inscription
app.get('/inscription',(req,res) => {
    res.render('shopinscr')
});

// B- routes vers la base des donnees
// 1- routes CRUD
app.use('/produits',produitsRouter);

// 2-routes des authentifications
app.use('/auth',userRouter);

//--- Fin des Fonctions ---
//exportation de l'application dans le server
module.exports = app;