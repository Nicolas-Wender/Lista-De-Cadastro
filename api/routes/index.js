const bodyParser = require('body-parser')

const user = require('./userRoute')

module.exports = app => {
  app.use(bodyParser.json(), bodyParser.urlencoded({ extended: false }), user)
}
