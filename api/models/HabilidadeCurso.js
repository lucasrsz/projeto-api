const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/sequelize');
const Curso = require('./Curso');
const Habilidade = require('./Habilidade');

const HabilidadeCurso = sequelize.define('HabilidadeCurso', { });

Habilidade.belongsToMany(Curso,{
  through: HabilidadeCurso,
  as: "cursos",
});

Curso.belongsToMany(Habilidade, {
 through: HabilidadeCurso,
 as: "habilidades",
});

module.exports = HabilidadeCurso;