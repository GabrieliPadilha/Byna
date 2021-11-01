const { Router } = require('express')
const router = Router()

const servicosTest = [{
        id: '1',
        nome: 'Costura'
    },
    {
        id: '2',
        nome: 'Ajustes'
    },
    {
        id: '3',
        nome: 'Fantasia'
    },
]

router.get('', (req, res) => {
    res.send(servicosTest)
})

router.get('/:id', (req, res) => {
    const servico = servicosTest.find(servico => servico.id === req.params.id)
    if (!servico) {
        return res.status(404).send({ error: 'Serviço não encontrado' })
    }
    res.send(servico)
})

router.post('', (req, res) => {
    const servico = req.body;
    const servicoCriado = {
        ...servico,
        id: Math.floor(Math.random() * 1000).toString(),
    }
    servicosTest.push(servicoCriado)
    res.status(201).send(servicoCriado)
})

router.delete('/:id', (req, res) => {
    const servicoIndice = servicosTest.findIndex(
            servico => servico.id === req.params.id
        )
        // TODO testar indice
    const [servico] = servicosTest.splice(servicoIndice, 1)
    res.send(servico)
})

module.exports = router