const mongoose = require('mongoose');
const { Schema } = mongoose;

const servicoSchema = new Schema({
    nome: String,
});

const ServicoModel = mongoose.model('servico', servicoSchema);

module.exports = ServicoModel