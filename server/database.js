const mongoose = require('mongoose')


const url = 'mongodb+srv://usuario_admin:88450406@clusterbyna.sremv.mongodb.net/byna?retryWrites=true&w=majority'

// const options = { reconnectTries: Number.MAX_VALUE, reconnectInterval: 500, poolSize: 5 }

mongoose.connect(url)

mongoose.connection.on('error', (err) => {
    console.log("Erro na conexão com o banco de dados " + err)
})

mongoose.connection.on('dicdsconected', () => {
    console.log('Aplicação desconectada do banco de dados')
})

mongoose.connection.on('connected', () => {
    console.log('Conectado no banco de dados!')
})