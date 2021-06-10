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
}

module.exports = GeneroController