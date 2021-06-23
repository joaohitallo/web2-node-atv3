const express = require('express')
const bodyParser = require('body-parser')
//const {estrategiasAutenticacao} = require('./estrategias-autenticacao')
//estrategiasAutenticacao: require('./estrategias-autenticacao')

const generos = require('./generosRoutes')
const filmes = require('./filmesRoutes')
const series = require('./seriesRouter')
const usuarios = require('./usuariosRoutes')

module.exports = app =>{
    app.use(bodyParser.json(),
    generos,
    filmes,
    series,
    usuarios
    )
}


 