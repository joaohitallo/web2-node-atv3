const {Router} = require('express')
const GeneroController = require('../controllers/GeneroControler')
const passport = require('passport')

const router = Router()

router
    .get('/generos', GeneroController.pegaTodosOsGeneros)
    .get('/generos/:id', GeneroController.pegaUmGenero)
    //.post('/generos', GeneroController.criaGenero)
    .post('/generos',passport.authenticate('bearer',{session:false}), GeneroController.criaGenero)
    .put('/generos/:id', GeneroController.atualizaGenero)
    .delete('/generos/:id', GeneroController.deletaGenero)

module.exports = router