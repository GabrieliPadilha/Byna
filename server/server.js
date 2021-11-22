//@ts-check
const express = require('express')
const servicos = require('./routes/servicos')
const disponibilidade = require('./routes/disponibilidade')
require('./database')

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('', (req, res) => {
    res.send('Hello Express')
})

app.use('/servicos', servicos)

app.use('/disponibilidade', disponibilidade)


app.listen(3713, () => {
    console.log('escutando em http://localhost:3713')
})