const UsuarioController = require("../controllers/UsuarioController")
const Usuario = require("../models/Usuario")

module.exports = (app) => {
  app.post('/registro', UsuarioController.registrar)
} 