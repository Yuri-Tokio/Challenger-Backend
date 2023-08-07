const mongoose = require('mongoose')

const Usuario = mongoose.model('Usuario', {
    user: String,
    email: String,
    password: String,
})

module.exports = Usuario