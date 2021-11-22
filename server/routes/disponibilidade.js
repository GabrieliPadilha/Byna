const { Router } = require('express')
const router = Router()
const DisponibilidadeModel = require('../models/disponibilidade')

module.exports = router

router.get('', async(req, res) => {
    res.send(await DisponibilidadeModel.find())
})