const mongoose = require('mongoose')

const Photo = mongoose.model('Photo', {
    nm_img: String,
    src_img: String,

})

module.exports = Photo