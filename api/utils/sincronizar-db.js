const Curso = require('../models/Curso');
const Habilidade = require('../models/Habilidade');
// eslint-disable-next-line no-unused-vars
const Usuario = require('../models/Usuario');
const UsuarioCurso = require('../models/UsuarioCurso');
const UsuarioHabilidade = require('../models/UsuarioHabilidade');
const HabilidadeCurso = require('../models/HabilidadeCurso');

module.exports = function(sequelize) {
  sequelize.sync({ force: true });
}