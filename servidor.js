const express = require('express')
const bodyParser = require('body-parser')

const bd = require('./bd')
const config = require('./configuracion')
const rutas = require('./red/rutas')

bd( config.DB_URL )

var app = express()

app.use( bodyParser.json() )
app.use( bodyParser.urlencoded({extended:false}) )

rutas( app )

app.use('/', express.static('public'))

const port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log( "La aplicación está escuchando en http://localhost:",port)
})
