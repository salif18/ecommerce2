//importation du module http
const http = require('http');
const app =require('./app');
const dotenv = require('dotenv');

//configuration
dotenv.config();
app.set(process.env.PORT);
const server = http.createServer(app);

//mis en route du server
server.listen(process.env.PORT,(req,res)=>{
    console.log("Ouverture de l'application sur le server localhost:3900");
})