const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/sequelize');

class Usuario extends Model {}

Usuario.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Usuario' // We need to choose the model name
});

module.exports = Usuario;
