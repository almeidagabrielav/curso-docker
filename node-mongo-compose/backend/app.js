const express = require('express')
const restful = require('node-restful')
const server = express()
const mongoose = restful.mongoose

//Database
mongoose.Promisse = global.Promisse //Mongoose utilizar a api de Promisse do node pois a do mongoose ta deprecated
mongoose.connect('mongodb://db/mydb')

//Teste
server.get('/', (req, res, next) => res.send('Backend'))

//Start Server
server.listen(3000)