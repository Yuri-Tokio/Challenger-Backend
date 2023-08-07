const express = require("express")
const app = express()

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
app.listen(3000)