require('dotenv').config();
const express = require('express');
const app = express();
const routes = require('./src/routes');
const path  = require('path');
const helmet = require('helmet');
const csrf = require('csurf');
const mongoose = require('mongoose');
const { middlewareGlobal, checkCsrfError, csrfMiddleware} = require('./src/middlewares/middleware');

//Proteção para o express
app.use(helmet());

//Conexão com banco de dados MongoDB, o Express emite pronto quando conclui o carregamento.
mongoose.connect(process.env.CONNECTIONSTRING)
.then(() => { console.log("Banco de dados conectado..."); app.emit("pronto") })
.catch(error => console.log(error));


// Salva a session do usuario no mongodb
// Esse recurso vai fornecer ao express o req.session que vamos usar aonde necessitar para tratar a sessão do usuario.
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

// Definição da criação da session, neste caso é um cookie e toda session é salva no mongodb.
const sessionOptions = session({
  //Palavra chave secreta para geração e validação do cookie.
  secret: 'fewf32rgg5#R3dd32@#f42de45642s',
  //Define o local de salvamento do cookie, neste caso informamos nosso mongodb.
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
  resave: false,
  saveUninitialized: false,
  //Definição do tempo do cookie e protocolo http.
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true
  }
});
//Adiciona o recurso de session no express.
app.use(sessionOptions);
//Adiciona a mensagem flash no express.
app.use(flash());
// Encerra o tratamento de sessão.


//Permite executar formulario/json.
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Fornece um diretorio estatico, no caso os arquivos que estão dentro de public.
app.use(express.static(path.resolve(__dirname, 'public')));

//Definimos a engine da view, neste caso ejs e sua localização.
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

//Gera o token para todo formulario utilizar, ou seja, injeta um token aonde precisa, a partir deste momento qualquer envio de formulario sem token gera exception.
app.use(csrf());


//Adicionamos o middleware global.
app.use(middlewareGlobal, checkCsrfError, csrfMiddleware);


//Adicionamos as rotas.
app.use(routes);

//Função que executa somente quando o express emitir pronto (no carregamento do banco)
app.on('pronto', () => {
 
  app.listen(3333, () => {
    console.log("Servidor Iniciado...")
  });
  
});
