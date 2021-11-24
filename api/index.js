const express = require('express');
const sequelize = require('./config/sequelize');
const routes = require('./routes');
const sincronizarDB = require('./utils/sincronizar-db');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// sincronizarDB(sequelize)

const port = 3000;

app.listen(port, () => console.log('servidor esta rodando na porta 3000'));

routes(app)

module.exports = app;
