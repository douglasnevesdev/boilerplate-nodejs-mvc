

exports.paginaInicial = (req, res) => {
  res.render("index");
}

exports.trataPost = (req, res) => {
  res.send("Eu sou sua rota de post");
}