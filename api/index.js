require('dotenv').config()
//const {estrategiasAutenticacao} = require('./routes')

const express = require('express')
const routes = require('./routes')

const app = express()
const port = 3000

routes(app)

//app.use (passport.initialize ());

app.listen(port, ( ) => console.log(`servidor está rondando na porta ${port}`))

module.exports = app