const { DataTypes, Model, INTEGER } = require('sequelize');
const sequelize = require('../config/sequelize');

class Habilidade extends Model {}

Habilidade.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  java: {
    type: DataTypes.STRING
  },
  javaScript: {
    type: DataTypes.STRING
  },
  html: {
    type: DataTypes.STRING
  },
  css: {
    type: DataTypes.STRING
  },
  php: {
    type: DataTypes.STRING
  },
  vscode: {
    type: DataTypes.STRING
  },
  eclipse: {
    type: DataTypes.STRING
  }

}, {
  sequelize,
  modelName: 'Habilidade'
});

module.exports = Habilidade;