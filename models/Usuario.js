const mongoose = require('mongoose')

const Usuario = mongoose.model('Usuario', {
  name: String,
  email: String,
  password: String,
  end_rua: String,
  end_nro: Number,
  end_bairro: String,
  cid: String,
  uf: String
})

module.exports = Usuario