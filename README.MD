<img alt="MVC" title="MVC" src="https://github.com/douglasneves-net/Boilerplate-NodeJS-MVC/blob/main/git/mvc.png" width="100%" style="max-width: 100%;">

<h2 align="center">
  :rocket: Boilerplate NodeJS MVC
</h2>

## :computer: Projeto

<strong>Boilerplate NodeJS MVC</strong> é um projeto Node.js com MVC.

O projeto é uma base para construção de sistemas utilizando Node.js com Express e arquitetura MVC.

## :rocket: Tecnologias

### Back-End/Front-End (NodeJS/WebPack)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [EJS](https://ejs.co/)
- [DotEnv](https://www.npmjs.com/package/dotenv)
- [Mongoose](https://mongoosejs.com/)
- [WebPack](https://webpack.js.org/)


#### Comandos Back-End/Front-End (NodeJS/WebPack)
```bash
$ yarn init -y 
$ yarn add express 
$ yarn add nodemon -D 
$ yarn add ejs 
$ yarn add @babel/cli 
$ yarn add @babel/core 
$ yarn add @babel/preset-env
$ yarn add babel-loader 
$ yarn add webpack 
$ yarn add webpack-cli
$ yarn add core-js
$ yarn add css-loader,
$ yarn add regenerator-runtime
$ yarn add style-loader
$ yarn add dotenv
$ yarn add mongoose
$ yarn add express-session 
$ yarn add connect-mongo 
$ yarn add connect-flash
$ yarn add helmet 
$ yarn add csurf
```

## :information_source: Como usar ?

### Back-End NodeJS
- Instale as dependencias: npm install / yarn
- Execute a aplicação: npm dev / yarn dev

### Front-End Webpack
- Execute a aplicação: npm start / yarn start


## :european_castle: Estrutura
<img alt="MVC" title="MVC" src="https://github.com/douglasneves-net/Boilerplate-NodeJS-MVC/blob/main/git/base.png" width="100%" style="max-width: 100%;">


## Etapas do Desenvolvimento
- Criar scrips em package.json
- Criar arquivo index.js
  - Liberar json.
  - Permitir divisão das routes.
  - Definir porta para iniciação.
- Criar pasta src.
- Criar arquivo de rotas -> routes.js dentro de src.
- Criar pasta/arquivos controllers dentro de src.
- Criar pasta views
  - Adicionar no index.js no express o set para adicionar a view.
  - Adicionar o EJS (Engine igual HTML + Com mais recursos) como engine de view.
- Criar pasta public para arquivos estaticos.
- Adicionamos todas as bibliotecas do babel para funcionar com webpack, obs: o Webpack vai ser utilizado para gerar nossa pagina, por isso vamos adicionar no projeto e sera executado em paralelo com o backend, mais os arquivos vão ficar dentro do mesmo projeto.
- Adicionamos o arquivo webpack.config.js configurado para o css e gerar o bundle.js final que vai ficar na pasta public.
- Adicionado os arquivos de dependencias do projeto para o webpack funcionar corretamente.
- Criar a pasta frontend para separar a aplicação em backend e frontend.
- Definir no package.json o dev para rodar o nodemon ignorando as pastas frontend e public.
- Definir no package.json o start para rodar o webpack (frontend).
- Todas as configurações do backend é realizada dentro da pasta src e iniciada por yarn dev.
- Todas as configurações do frontend é realizada na pasta frontend e compiladas pelo webpack que salva o resultado na pasta public, que sera utilizado pelo view do backend.
- O Backend é iniciado pelo comando yarn dev.
- O Frontend é iniciado pelo comando yarn start.
- O backend executa os arquivos dentro da pasta src e carrega as rotas do express.
- A rota principal (backend) invoca a view index.ejs (que tambem esta no backend) que carrega o arquivo da pasta public bundle.js (gerado pelo webpack).
- O arquivo bundle.js que esta na pasta public é gerado pelo webpack, ou seja, é resultado da compilação da pasta frontend que tambem esta no projeto.
- Basicamente o webpack compila a pasta frontend do projeto para a pasta public aonde sera utilizada pelo backend quando o usuario acessar a rota que invoca a view.
- Adicionamos o middleware global para ser utilizado caso tenha necessidade.
- Instalamos o dotenv para utilizar variaveis de ambiente.
- Instalar o mongoose para gerenciar o banco de dados.
- Aproveitamos o recurso de emit do express para deixar a aplicação executar somente se conseguir comunicação com o banco de dados mongodb.
- Criamos o arquivo .env na raiz do projeto.
- Adiconamos .env no .gitignore.
- Criamos nossos modelos baseados ao schema do mongodb.
- Instalamos 3 bibliotecas auxiliares para tratar as sessões do usuario
- Instalamos o express-session que permite o express gravar uma sessão do usuario no servidor, porem vamos usar essa biblioteca para salvar os dados no mongodb, dessa forma não teremos problema com memoria, sobrecarga e outros.
- Instalamos o connect-mongo para arnazenar a sessão que o express gerar no mongoDB.
- Instalamos o connect-flash que fornece uma funcionalidade para o Express de armazenar mensagens que serão apagadas quando forem exibidas ao usuario.
- Todas as configurações acima dessa parte de sessão foram realizadas no index.js (arquivo principal do node.js)
- Para salvar mensagens flash utilize o req.flash('info', "Ola mundo!") e para resgatar a mensagem use console.log(req.flash('info'));
- O ideal para frontend é usar o React porem nesse projeto deixei tudo sendo fornecido pelo express utilizando o MVC.
- Para adicionar parametro para o ejs, basta mandar como segundo parametro, no caso o primeiro parametro é a pagina .ejs que gostariamos de renderizar e no segundo parametro é o objeto que queremos passar para ser renderizado na pagina.
- Se precisar injetar informações de um middleware no .ejs basta fazer como no exemplo: res.locals.umaVariavelLocal = 'Este é o valor da variavel local'
- Se tiver duvidas de como usar o .ejs consulte a documentação.
- Não esquecer que .ejs utiliza os includes para adicionar cabeçalho, rodape entre outros.
- O express recomenda instalação do helmet, instalamos e utilizamos no projeto, o helmet garante segurança nas rotas, basicamente ele previne que alguem post ou faça quaquer ação de algum site que não seja o fornecido pela aplicação.
- Adicionamos acima o csurf que adiciona um token em cada formulario.
- Desenvolvemos middlewares para gerar os tokens necessarios para os formularios, um middleware para tratamento do erro foi desenvolvido.
- Concluido
