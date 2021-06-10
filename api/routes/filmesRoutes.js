const {Router} = require('express')
const FilmesController = require('../controllers/FilmesControler')

const router = Router()
router
    .get('/filmes', FilmesController.pegaTodosOsFilmes)
    .get('/filmes/:id', FilmesController.pegaUmFilme)
    .post('/filmes', FilmesController.criaFilme)
    .put('/filmes/:id', FilmesController.atualizaFilme)
    .delete('/filmes/:id', FilmesController.deletaFilme)

module.exports = router