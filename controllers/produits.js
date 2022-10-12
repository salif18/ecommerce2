//importation du module fs
const fs = require('fs');
const Articles = require('../models/Table_produit');

//route pour inserer les nouveaux produits
exports.insertArticles = (req, res, next) => {

    const articlesObject =JSON.parse(req.body.articles);
    delete articlesObject._id;
    delete articlesObject._userId;

    const articles = new Articles({
        
      ...articlesObject,
        userId: req.auth.userId,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
    articles.save()
    .then(() => res.status(201).json({
        message:'produit inserer'
    }))
    .catch((error) => res.status(400).json({error}))
};

//route pour afficher tous les produits inseres dans la base de donnee
exports.afficheAllArticles = (req, res, next) => {
     Articles.find()
     .then((articles) => res.status(200).json(articles))
     .catch((error) => res.status(400).json({error}));
};

//route pour selectionner un seul produit
exports.afficheUnArticles = (req, res, next) => {
    Articles.findOne()
    .then((article) => res.status(200).json(article))
    .catch((error) => res.status({error}))
};

//route pour changer ou modifier un produit
exports.modifierArticles = (req, res, next) => {
    const articlesObject = req.file ? {
       ...JSON.parse(req.body.articles),
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : { ...req.body };
  
   delete articlesObject._userId;
    Articles.findOne({_id: req.params.id})
        .then((article) => {
            if (article.userId != req.auth.userId) {
                res.status(401).json({ message : 'Non autorise'});
            } else {
                Articles.updateOne({ _id: req.params.id}, { ...articlesObject, _id: req.params.id})
                .then(() => res.status(200).json({message : 'Objet modifié!'}))
                .catch(error => res.status(401).json({ error }));
            }
        })
        .catch((error) => {
            res.status(400).json({ error });
        });
 };

//route pour supprimer un produit
exports.supprimerArticles = (req, res, next) => {
    Articles.findOne({ _id: req.params.id})
        .then(article => {
            if (article.userId != req.auth.userId) {
                res.status(401).json({message: 'Non autorise'});
            } else {
                const filename = article.imageUrl.split('/images/')[1];
                fs.unlink(`images/${filename}`, () => {
                    Articles.deleteOne({_id: req.params.id})
                        .then(() => { res.status(200).json({message: 'Objet supprimé !'})})
                        .catch(error => res.status(401).json({ error }));
                });
            }
        })
        .catch( error => {
            res.status(500).json({ error });
        });
 };