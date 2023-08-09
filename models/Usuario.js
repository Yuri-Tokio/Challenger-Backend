const mongoose = require('mongoose')

const Usuario = mongoose.model('Usuario', {
    user: String,
    email: String,
    password: String,
})

// Campos do backend que estarão ligados com o banco de dados e serão representados no front

module.exports = Usuario