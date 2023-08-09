const mongoose = require('mongoose')

const Produto = mongoose.model('Produto', {
    nm_produto: String,
    ds_produto: String,
    valor: Number,
    categoria: String,
    fornecedor: String,
})

// Campos do backend que estarão ligados com o banco de dados e serão representados no front
module.exports = Produto