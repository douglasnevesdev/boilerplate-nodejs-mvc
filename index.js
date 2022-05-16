require('dotenv').config();
const express = require('express');
const app = express();
const routes = require('./src/routes');
const path  = require('path');
const mongoose = require('mongoose');
const { middlewareGlobal } = require('./src/middlewares/middleware');


mongoose.connect(process.env.CONNECTIONSTRING)
.then(() => { console.log("Banco de dados conectado..."); app.emit("pronto") })
.catch(error => console.log(error));


app.use(express.urlencoded({extended: true}));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(middlewareGlobal);

app.use(routes);


app.on('pronto', () => {
 
  app.listen(3333, () => {
    console.log("Servidor Iniciado...")
  });
  
});
