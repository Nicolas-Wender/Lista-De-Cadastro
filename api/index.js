const express = require('express')
const routes = require('./routes')

const app = express()
const port = process.env.PORT || 3000

routes(app)

app.listen(port, () => console.log(`O servidor está rodando na porta http://localhost:${port}`))

app.get('/', function (req, res) {
  res.send('Hello World!');
});

module.exports = app