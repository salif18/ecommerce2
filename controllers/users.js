//importation du module bcrypt et jsonwebtoken
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Users = require('../models/Table_user');

//route pour inscription d'users
 exports.signup = (req, res, next) => {
    //hash le mot de passe
    bcrypt.hash(req.body.password, 10)
    .then((hash) => {
        const users = Users({
            prenom:req.body.prenom,
            nom:req.body.nom,
            address:req.body.address,
            numero:req.body.numero,
            email:req.body.email,
            password:hash,
        });
        users.save()
        .then(() => res.status(201).json('utilisateur inserer'))
        .catch((error) => res.status(400).json({
            message:'Utilisateur non inserer',
            error:error
        }))
    })
    .catch((error) => res.status(400).json({
        error:error
    }))
 };


 //route pour se connecter
 exports.login = (req, res, next) => {
    //recuperation de l'email
    Users.findOne({email:req.body.email})
    .then((user) => {
        if(!user){
            return res.status(400).json({
                message:'email incorrect'
            })
        };

    //recuperation et comparaison du mot de passe 
    bcrypt.compare(req.body.password, user.password )
    .then((valid) => {
        if(!valid){
            return res.status(400).json({
                message:'mot de passe incorrect'
            })
        }
     
    // creation 'un token d'indentification
    res.status(200).json({
        userId: user._id,
        token: jwt.sign(
            { userId: user._id },
            'RANDOM_TOKEN_SECRET',
            { expiresIn: '24h' }
        )
    })

    })
    .catch((error) => res.status(500).json({
        error : error
    }));
    })
    .catch((error) => res.status(500).json({
          error : error
    }));
 };