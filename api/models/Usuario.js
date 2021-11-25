const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/sequelize');

class Usuario extends Model {}

Usuario.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    validate: {
      isEmail: true
    }
  },
  dataNascimento: {
    type: DataTypes.DATE,
    allowNull: false
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  administrador: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
}, {
  
  sequelize, 
  modelName: 'Usuario'
});

module.exports = Usuario;
