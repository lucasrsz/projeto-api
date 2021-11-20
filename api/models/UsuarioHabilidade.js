const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");
const Usuario = require("./Usuario");
const Habilidade = require("./Habilidade");

const UsuarioHabilidade = sequelize.define('UsuarioHabilidade', {
  conhecimento: {
    type: DataTypes.TINYINT,
    validate: {
      max: 5,                  
      min: 1,
    }
  }
});

Usuario.belongsToMany(Habilidade, { through: UsuarioHabilidade });
Habilidade.belongsToMany(Usuario, { through: UsuarioHabilidade });

module.exports = UsuarioHabilidade;