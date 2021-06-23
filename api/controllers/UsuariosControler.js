const database = require('../models')
const usuarios = require('../models/usuarios')
const jwt = require('jsonwebtoken')

function criatokenJWT(usuario){
    const payload = {
        id: usuario.id
    }
    const token = jwt.sign(payload, process.env.CHAVE_JWT)
    return token 
}

class UsuariosController {
    static async criaUsuario(req, res) {
        const novoUsuario = req.body
        try {
          const novoUsuarioCriado = await database.Usuarios.create(novoUsuario)
          return res.status(200).json(novoUsuarioCriado)
        } catch (error) {
          return res.status(500).json(error.message)
        }
      }

      
    static login(req, res) {
          const token = criatokenJWT(req.user)
          res.set('Authorization', token)
          res.status(204).send()
      }

  static async pegaTodosUsuarios(req, res) {
    try {
      const todosOsUsuarios = await database.Usuarios.findAll()
      return res.status(200).json(todosOsUsuarios)
    } catch {
      return res.status(500).json(error.message)
    }
  }
  static async deletaUsuario(req, res) {
    const { id } = req.params
    try {
      await database.Usuarios.destroy({ where: { id: Number(id) }})
      return res.status(200).json({ mensagem: `Usuario de id: ${id} deletado` })

    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

}

module.exports = UsuariosController