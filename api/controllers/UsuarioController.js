const Usuario = require("../models/Usuario");

class UsuarioController {
  static async registrar(req, res){
    try {
      const usuario = await Usuario.create({
        ...req.body, 
        administrador: undefined
      })
      res.status(200)
        .send({mensagem: "você foi cadastrado", usuario})
    } catch(e) {
      res.status(400)
        .send({erro: e})
    }
  }
}

module.exports = UsuarioController;