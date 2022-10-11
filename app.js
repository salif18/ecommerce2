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

//--- fONTIONS--->
app.get('/',(req,res)=>{
    res.send({message:'Hello world'})
});

app.get('/home',(req,res)=>{
    const fruits = [
       {nom:"pomme",prix:"25f"}];
    res.render('home',{fruits});
})
app.use('/produits',produitsRouter);
app.use('/auth',userRouter);
//exportation de l'application dans le server
module.exports = app;