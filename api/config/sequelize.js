const { Sequelize } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('catalogo_habilidades', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false,  // I do not want timestamp fields by default
  }
});

module.exports = sequelize;