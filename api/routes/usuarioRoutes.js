const Usuario = require("../models/Usuario")

module.exports = (app) => {
  app.post('/registro', async function (req, res) {
    try {
      const usuario = await Usuario.create(req.body)
      res.status(200)
        .send({mensagem: "você foi cadastrado", usuario})
    } catch(e) {
      res.status(400)
        .send({erro: e})
    }
  })
} 