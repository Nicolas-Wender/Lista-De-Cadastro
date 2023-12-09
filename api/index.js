const express = require('express')
const routes = require('./routes')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 8000

app.use(cors())
app.use(express.json())

routes(app)

app.listen(port, () =>
  console.log(`O servidor está rodando na porta http://localhost:${port}`)
)

app.get('/', function (req, res) {
  res.send('Hello World!')
})

module.exports = app
