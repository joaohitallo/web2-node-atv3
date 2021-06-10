const database = require('../models')

class SeriesController {
  static async pegaTodasAsSeries(req, res) {
    try {
      const todasAsSeries = await database.Series.findAll()
      return res.status(200).json(todasAsSeries)
    } catch {
      return res.status(500).json(error.message)
    }
  }
  static async pegaUmaSerie(req, res) {
    const { id } = req.params
    try {
      const umaSerie = await database.Series.findOne({
        where: {
          id: Number(id)
        }
      })
      return res.status(200).json(umaSerie)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
  static async pegaUmaSerieGenero(req, res) {
    const { id } = req.params
    try {
      const umaSerie = await database.Series.findAll({
        where: {
          generos_id: Number(id)
        }
      })
      return res.status(200).json(umaSerie)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
  static async criaSerie(req, res) {
    const novaSerie = req.body
    try {
      const novaSerieCriado = await database.Series.create(novaSerie)
      return res.status(200).json(novaSerieCriado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
  static async atualizaSerie(req, res) {
    const { id } = req.params
    const novasInfos = req.body
    try {
      await database.Series.update(novasInfos, { where: { id: Number(id) }})
      const seriesAtualizada = await database.Series.findOne( { where: { id: Number(id) }})
      return res.status(200).json(seriesAtualizada)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
  static async deletaSerie(req, res) {
    const { id } = req.params
    try {
      await database.Series.destroy({ where: { id: Number(id) }})
      return res.status(200).json({ mensagem: `id ${id} deletado` })

    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

}

module.exports = SeriesController