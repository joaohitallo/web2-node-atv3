const express = require('express')
const bodyParser = require('body-parser')

const generos = require('./generosRoutes')
const filmes = require('./filmesRoutes')
const series = require('./seriesRouter')

module.exports = app =>{
    app.use(bodyParser.json(),
    generos,
    filmes,
    series
    )
}


 