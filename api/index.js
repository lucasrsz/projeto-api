const express = require('express');
const sequelize = require('./config/sequelize');
// eslint-disable-next-line no-unused-vars
const Usuario = require('./models/Usuario');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

sequelize.sync({ force: true });

const port = 3000;

app.get('/teste', (req, res) => res
    .status(200)
    .send({ mensagem: 'boas-vindas à api'
}));

app.listen(port, () => console.log('servidor esta rodando na porta 3000'));

module.exports = app;
