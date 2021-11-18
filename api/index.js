const express = require('express')

const app = express()

app.use(express.json())

const port = 3000

app.get('/teste', (req, res) => res
    .status(200)
    .send({ mensagem: 'boas-vindas à api'
}))

app.listen(port, () => console.log('servidor esta rodando na porta 3000'))

module.exports = app
