const { Router } = require('express')
const UserController = require('../controllers/UserController')

const router = Router()
router
  .get('/user', UserController.getAllUser)
  .get('/user/:id', UserController.getUser)
  .post('/user', UserController.postUser)
  .put('/user/:id', UserController.putUser)
  .delete('/user/:id', UserController.deleteUser)
module.exports = router
