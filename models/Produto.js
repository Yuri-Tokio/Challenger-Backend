const mongoose = require('mongoose')

const Produto = mongoose.model('Produto', {
    nm_produto: String,
    ds_produto: String,
    valor: Number,
    categoria: String,
    fornecedor: String,
})

module.exports = Produto