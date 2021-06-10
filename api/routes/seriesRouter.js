const {Router} = require('express')
const SeriesController = require('../controllers/SeriesControler')

const router = Router()
router
    .get('/series', SeriesController.pegaTodasAsSeries)
    .get('/series/:id', SeriesController.pegaUmaSerie)
    .get('/series/categoria/:id', SeriesController.pegaUmaSerieGenero)
    .post('/series', SeriesController.criaSerie)
    .put('/series/:id', SeriesController.atualizaSerie)
    .delete('/series/:id', SeriesController.deletaSerie)

module.exports = router