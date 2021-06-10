const database = require('../models')

class FilmesController {
  static async pegaTodosOsFilmes(req, res) {
    try {
      const todosOsFilmes = await database.Filmes.findAll()
      return res.status(200).json(todosOsFilmes)
    } catch {
      return res.status(500).json(error.message)
    }
  }
  static async pegaUmFilme(req, res) {
    const { id } = req.params
    try {
      const umFilme = await database.Filmes.findOne({
        where: {
          id: Number(id)
        }
      })
      return res.status(200).json(umFilme)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
  static async criaFilme(req, res) {
    const novoFilme = req.body
    try {
      const novoFilmeCriado = await database.Filmes.create(novoFilme)
      return res.status(200).json(novoFilmeCriado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
  static async atualizaFilme(req, res) {
    const { id } = req.params
    const novasInfos = req.body
    try {
      await database.Filmes.update(novasInfos, { where: { id: Number(id) }})
      const filmesAtualizada = await database.Filmes.findOne( { where: { id: Number(id) }})
      return res.status(200).json(filmesAtualizada)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
  static async deletaFilme(req, res) {
    const { id } = req.params
    try {
      await database.Filmes.destroy({ where: { id: Number(id) }})
      return res.status(200).json({ mensagem: `id ${id} deletado` })

    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

}

module.exports = FilmesController