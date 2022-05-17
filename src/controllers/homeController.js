

exports.paginaInicial = (req, res) => {
  console.log(req.flash('info'));
  res.render("index", {
    titulo: "Titulo",
    numeros: [0,1,2,3,4,5,6,7,8,9]
  });
}

exports.trataPost = (req, res) => {
  res.send("Eu sou sua rota de post");
}