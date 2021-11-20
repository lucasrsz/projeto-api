const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/sequelize');

class Curso extends Model {}

Curso.init({
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
  modelName: 'Curso'
});

module.exports = Curso;