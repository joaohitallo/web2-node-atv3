const {Router} = require('express')
const UsuariosController = require('../controllers/UsuariosControler')
const passport = require('passport')

const router = Router()
router
    .get('/usuarios', UsuariosController.pegaTodosUsuarios)
    .post('/usuarios', UsuariosController.criaUsuario)
    .delete('/usuarios/:id', UsuariosController.deletaUsuario)
    .post('/usuarios/login', UsuariosController.login)
module.exports = router