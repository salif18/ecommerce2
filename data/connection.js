//importation du module mongoose
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
//configuration de la connection
mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true, useUnifiedTopology:true})
.then(() => console.log('Connection a Mongo DB Reussie'))
.catch(() => console.log('Connectiona Mongo Db echouer'));

//exportation de data vers app
module.exports = mongoose;