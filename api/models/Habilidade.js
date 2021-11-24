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
}, {
  sequelize,
  modelName: 'Habilidade'
});

module.exports = Habilidade;