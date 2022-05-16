# Projeto

```javascript
yarn init -y
yarn add express
yarn add nodemon
yarn add ejs
yarn add @babel/cli
yarn add @babel/core
yarn add @babel/preset-env
yarn add babel-loader
yarn add webpack
yarn add webpack-cli
```

# Processos

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

```javascript
yarn add @babel/cli
yarn add @babel/core
yarn add @babel/preset-env
yarn add babel-loader
yarn add webpack
yarn add webpack-cli
```

- Adicionamos o arquivo webpack.config.js configurado para o css e gerar o bundle.js final que vai ficar na pasta public.
- Adicionado os arquivos de dependencias do projeto para o webpack funcionar corretamente.

```javascript
yarn add core-js
yarn add css-loader,
yarn add regenerator-runtime
yarn add style-loader
```

- Criar a pasta frontend para separar a aplicação em backend e frontend.
- Definir no package.json o dev para rodar o nodemon ignorando as pastas frontend e public.
- Definir no package.json o start para rodar o webpack (frontend).
- Todas as configurações do backend é realizada dentro da pasta src e iniciada por yarn dev.
- Todas as configurações do frontend é realizada na pasta frontend e compiladas pelo webpack que salva o resultado na pasta public, que sera utilizado pelo view do backend.

# Funcionamento ate este momento:

- O Backend é iniciado pelo comando yarn dev.
- O Frontend é iniciado pelo comando yarn start.
- O backend executa os arquivos dentro da pasta src e carrega as rotas do express.
- A rota principal (backend) invoca a view index.ejs (que tambem esta no backend) que carrega o arquivo da pasta public bundle.js (gerado pelo webpack).
- O arquivo bundle.js que esta na pasta public é gerado pelo webpack, ou seja, é resultado da compilação da pasta frontend que tambem esta no projeto.
- Basicamente o webpack compila a pasta frontend do projeto para a pasta public aonde sera utilizada pelo backend quando o usuario acessar a rota que invoca a view.

# Continuando os Processos

- Adicionamos o middleware global para ser utilizado caso tenha necessidade.
