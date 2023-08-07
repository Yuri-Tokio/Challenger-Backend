const express = require("express")
const mongoose = require("mongoose")
const app = express()

const Usuario = require('./models/Usuario')

//ler Json / middleware
app.use(
    express.urlencoded({
      extended: true,
    }),
)
  
app.use(express.json())

// endpoints
app.get('/', (req, res) => {
    
    res.json({ message: 'fazendo teste'})

})

// entregar porta
mongoose.connect("mongodb+srv://yuriTCC:01020304@apitcc.wm8hsil.mongodb.net/?retryWrites=true&w=majority")
.then(() => {
    app.listen(3000)
    console.log('Conectou ao banco na porta 3000')
})
.catch((err) => console.log(err))