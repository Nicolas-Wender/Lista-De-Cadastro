const db = require('../models')

class UserController {
  static async getAllUser(req, res) {
    try {
      const AllUSers = await db.User.findAll()
      return res.status(200).json({ message: 'success', data: AllUSers })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async getUser(req, res) {
    const { id } = req.params
    try {
      const user = await db.User.findOne({
        where: {
          id: Number(id)
        }
      })
      return res.status(200).json({ message: 'sucess', data: user })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async postUser(req, res) {
    const user = req.body
    try {
      const novoUser = await db.User.create(user)
      return res
        .status(201)
        .json({ message: 'usuario criado com sucesso!', data: novoUser })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async putUser(req, res) {
    const { id } = req.params
    const novasInfos = req.body
    try {
      await db.User.update(novasInfos, {
        where: {
          id: Number(id)
        }
      })
      const userAlterado = await db.User.findOne({
        where: {
          id: Number(id)
        }
      })
      return res
        .status(200)
        .json({ message: 'Usuario alterado com sucesso!', data: userAlterado })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async deleteUser(req, res) {
    const { id } = req.params
    try {
      await db.User.destroy({ where: { id: Number(id) } })
      return res.status(200).json({ message: `id ${id} deletado` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = UserController
