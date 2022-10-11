//importation du modue muter
const multer = require('multer');

//configuration de l'extemsion d'image
const MIME_TYPES = {
    'image/jpg':'jpg',
    'image/jpeg':'jpg',
    'image/png':'png',
    
}

//configuration de l'environnement de stockage
const storage = multer.diskStorage({
    //destination de l'image
    destination:(req, file, callback ) => {
        callback(null, 'images')
    },
    //le creation du nom du fichier
    filename:(req, file, callback) => {
       const name = file.originalname.split(' ').join('_');
       const extension = MIME_TYPES[file.mimetype];
       callback(null, name + Date.now() + '.' + extension);
    }
})

//exportation 
module.exports = multer({storage}).single('image');