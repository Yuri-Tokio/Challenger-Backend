const express = require("express")
const mongoose = require("mongoose")
const app = express()

const Usuario = require('./models/Usuario')
const Produto = require('./models/Produto')

//ler Json / middleware
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

// ENDPOINTS USUARIO

// TESTE
app.get('/', (req, res) => {

    res.json({ message: 'fazendo teste, voce está conectado na API!' })

})


// CRIANDO USUARIO NO SISTEMA
app.post('/usuario', async (req, res) => {
    const { user, email, password } = req.body

    const usuario = {
        user,
        email,
        password,
    }

    try {
        await Usuario.create(usuario)

        res.status(201).json({ message: 'Pessoa inserida no sistema!' })
    } catch (error) {
        res.status(500).json({ erro: 'O motivo do erro é ' + error })
    }
})

// CONSULTANDO USUARIO
app.get('/usuario', async (req, res) => {
    try {
        const people = await Usuario.find()

        res.status(200).json(people)
    } catch (error) {
        res.status(500).json({ erro: error })
    }
})

// CONSULTANDO USUARIO POR ID
app.get('/usuario/id/:id', async (req, res) => {
    const id = req.params.id

    try {
        const usuario = await Usuario.findOne({ _id: id })

        if (!usuario) {
            res.status(422).json({ message: 'Usuário não encontrado!' })
            return
        }

        res.status(200).json(usuario)
    } catch (error) {
        res.status(500).json({ erro: error })
    }
})


// CONSULTANDO USUARIO POR EMAIL
app.get('/usuario/email/:email', async (req, res) => {
    const email = req.params.email

    try {
        const usuario = await Usuario.findOne({ email: email })

        if (!usuario) {
            res.status(422).json({ message: 'Usuário não encontrado!' })
            return
        }

        res.status(200).json(usuario)
    } catch (error) {
        res.status(500).json({ erro: error })
    }
})

// ALTERANDO USUARIO DO SISTEMA
app.patch('/usuario/:id', async (req, res) => {
    const id = req.params.id

    const { user, email, password } = req.body

    const usuario = {
        user,
        email,
        password,
    }

    try {
        const updatedUsuario = await Usuario.updateOne({ _id: id }, usuario)

        if (updatedUsuario.matchedCount === 0) {
            res.status(422).json({ message: 'Usuário não encontrado!' })
            return
        }

        res.status(200).json(usuario)
    } catch (error) {
        res.status(500).json({ erro: error })
    }
})

// EXCLUINDO USUARIO DO SISTEMA
app.delete('/usuario/:id', async (req, res) => {
    const id = req.params.id

    const usuario = await Usuario.findOne({ _id: id })

    if (!usuario) {
        res.status(422).json({ message: 'Usuário não encontrado!' })
        return
    }

    try {
        await Usuario.deleteOne({ _id: id })

        res.status(200).json({ message: 'Usuário removido!' })
    } catch (error) {
        res.status(500).json({ erro: error })
    }
})


// ENDPOINTS PRODUTO

// CRIANDO PRODUTO NO SISTEMA
app.post('/produto', async (req, res) => {
    const { nm_produto, ds_produto, valor, categoria, fornecedor } = req.body

    const produto = {
        nm_produto,
        ds_produto,
        valor,
        categoria,
        fornecedor,
    }

    try {
        await Produto.create(produto)

        res.status(201).json({ message: 'Produto inserido no sistema!' })
    } catch (error) {
        res.status(500).json({ erro: 'O motivo do erro é ' + error })
    }
})

// CONSULTANDO PRODUTO
app.get('/produto', async (req, res) => {
    try {
        const people = await Produto.find()

        res.status(200).json(people)
    } catch (error) {
        res.status(500).json({ erro: error })
    }
})

// CONSULTANDO PRODUTO POR ID
app.get('/produto/id/:id', async (req, res) => {
    const id = req.params.id

    try {
        const produto = await Produto.findOne({ _id: id })

        if (!produto) {
            res.status(422).json({ message: 'Produto não encontrado!' })
            return
        }

        res.status(200).json(produto)
    } catch (error) {
        res.status(500).json({ erro: error })
    }
})


// CONSULTANDO PRODUTO POR VALOR
app.get('/produto/valor/:valor', async (req, res) => {
    const valor = req.params.valor

    try {
        const produto = await Produto.findOne({ valor: valor })

        if (!produto) {
            res.status(422).json({ message: 'Produto não encontrado!' })
            return
        }

        res.status(200).json(produto)
    } catch (error) {
        res.status(500).json({ erro: error })
    }
})

// ALTERANDO PRODUTO DO SISTEMA
app.patch('/produto/:id', async (req, res) => {
    const id = req.params.id

    const { nm_produto, ds_produto, valor, categoria, fornecedor } = req.body

    const produto = {
        nm_produto,
        ds_produto,
        valor,
        categoria,
        fornecedor,
    }

    try {
        const updatedProduto = await Produto.updateOne({ _id: id }, produto)

        if (updatedProduto.matchedCount === 0) {
            res.status(422).json({ message: 'Produto não encontrado!' })
            return
        }

        res.status(200).json(produto)
    } catch (error) {
        res.status(500).json({ erro: error })
    }
})

// EXCLUINDO PRODUTO DO SISTEMA
app.delete('/produto/:id', async (req, res) => {
    const id = req.params.id

    const produto = await Produto.findOne({ _id: id })

    if (!produto) {
        res.status(422).json({ message: 'Produto não encontrado!' })
        return
    }

    try {
        await Produto.deleteOne({ _id: id })

        res.status(200).json({ message: 'Produto removido!' })
    } catch (error) {
        res.status(500).json({ erro: error })
    }
})

// entregar porta
mongoose.connect("mongodb+srv://yuriTCC:01020304@apitcc.wm8hsil.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
        app.listen(4000)
        console.log('Conectou ao banco na porta 4000')
    })
    .catch((err) => console.log(err))