// import express from 'express'
// import express = require('express')
const express = require('express')
const servicos = require('./routes/servicos')

const app = express()

app.use(express.json())

app.get('', (req, res) => {
    res.send('Hello Express')
})

app.use('/servicos', servicos)

app.listen(3713, () => {
    console.log('escutando em http://localhost:3713')
})