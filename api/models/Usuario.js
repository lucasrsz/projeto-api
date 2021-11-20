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
  email: {
    type: DataTypes.STRING,
    validate: {
      isEmail: true
    }
  },
}, {
  
  sequelize, 
  modelName: 'Usuario'
});

module.exports = Usuario;
