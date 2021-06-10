const database = require('../models')

class GeneroController {
    static async pegaTodosOsGeneros(req, res){
        try {
            const todosOsGeneros = await database.Generos.findAll()
            return res.status(200).json(todosOsGeneros)
        } catch  {
            return res.status(500).json(error.message)
        }
    }
    static async pegaUmGenero(req, res) {
        const { id } = req.params
        try {
          const umGenero = await database.Generos.findOne( { 
            where: { 
              id: Number(id) 
            }
          })
          return res.status(200).json(umGenero)
        } catch (error) {
          return res.status(500).json(error.message)
        }
      }
      static async criaGenero(req, res) {
        const novoGenero = req.body
        try {
          const novoGeneroCriado = await database.Generos.create(novoGenero)
          return res.status(200).json(novoGeneroCriado)
        } catch (error) {
          return res.status(500).json(error.message)
        }
      }
      static async atualizaGenero(req, res) {
        const { id } = req.params
        const novasInfos = req.body
        try {
          await database.Generos.update(novasInfos, { where: { id: Number(id) }})
          const generossAtualizada = await database.Generos.findOne( { where: { id: Number(id) }})
          return res.status(200).json(generossAtualizada)
        } catch (error) {
          return res.status(500).json(error.message)
        }
      }
      static async deletaGenero(req, res) {
        const { id } = req.params
        try {
          await database.Generos.destroy({ where: { id: Number(id) }})
          return res.status(200).json({ mensagem: `id ${id} deletado` })
    
        } catch (error) {
          return res.status(500).json(error.message)
        }
      }
    
}

module.exports = GeneroController