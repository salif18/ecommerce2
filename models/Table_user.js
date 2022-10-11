// importation du module mongoose pour creer les tables
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Tables_user = mongoose.Schema({
    prenom:{type:String, required:true},
    nom:{type:String, required:true},
    address:{type:String, required:true},
    numero:{type:Number, required:true, unique:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true}
});

Tables_user.plugin(uniqueValidator);

//exportation 
module.exports = mongoose.model('Users',Tables_user);