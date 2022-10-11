//importation du module jsonwebtoken
const jwt = require('jsonwebtoken');

//exportation du module 
module.exports = (req, res, next) => {
   try{
    //recuperation du token dans le headers autorization bears
    const token = req.headers.authorization.split(' ')[1];

    //decodage du token recuperer
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');

    //recuupere le user qui se trouve dans le token
    const userId = decodedToken.userId;
    req.auth = {userId : userId}

  next();
   }catch(error){
    res.status(401).json({
        message:`authentification incorrect`,
        error:error
    })
   }
}
