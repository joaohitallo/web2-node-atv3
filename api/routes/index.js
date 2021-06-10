const express = require('express')
const generos = require('./generosRoutes')

module.exports = app =>{
    app.use(express.json())
    app.use(generos)

}