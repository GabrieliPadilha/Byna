const mongoose = require('mongoose');
const { Schema } = mongoose;

const disponibilidadeSchema = new Schema({
    horario: String,
    servicoId: String
});

const DisponibilidadeModel = mongoose.model('disponibilidade', disponibilidadeSchema);

module.exports = DisponibilidadeModel