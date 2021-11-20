const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/sequelize');
const Curso = require('./Curso');
const Usuario = require('./Usuario');

const UsuarioCurso = sequelize.define('UsuarioCurso', { });

Usuario.belongsToMany(Curso,{
  through: UsuarioCurso,
  as: "cursos",
});

Curso.belongsToMany(Usuario, {
 through: UsuarioCurso,
 as: "usuarios",
});

module.exports = UsuarioCurso;
