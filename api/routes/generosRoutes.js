const {Router} = require('express')
const GeneroController = require('../controllers/GeneroControler')

const router = Router()

router.get('/generos', GeneroController.pegaTodosOsGeneros)

module.exports = router