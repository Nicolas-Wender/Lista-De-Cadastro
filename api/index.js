const express = require('express')
const dotenv = require('dotenv')
dotenv.config()

console.log(process.env.PORT)

const app = express()
const port = process.env.PORT 

app.listen(port, () => console.log(`O servidor está rodando na porta http://localhost:${port}`))

module.exports = app