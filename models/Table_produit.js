//importation du module mongoose
const mongoose = require('mongoose');

//configuration de la table produit pour les stockages des articles
const Table_produit = mongoose.Schema({
    titre:{type:String, required:true},
    description:{type:String, required:true},
    prix:{type:Number, required:true},
    imageUrl:{type:String, required:true}
});

//exportation 
module.exports = mongoose.model('Articles',Table_produit);