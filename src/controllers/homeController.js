

exports.paginaInicial = (req, res) => {
  console.log(req.flash('info'));
  res.render("index");
}

exports.trataPost = (req, res) => {
  res.send("Eu sou sua rota de post");
}