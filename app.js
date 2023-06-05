//CONTROLADORES

const express = require('express')
const hbs = require('hbs');
require('dotenv').config();

const port=process.env.PORT; // Se saca de .env
const app = express();

//HANDLEBARS
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials');

//Servir contenido estatico
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Paola Carrillo',
    titulo: 'Proyecto Node'
  })
})

//dirname es el resto del path
app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Paola Carrillo',
    titulo: 'Proyecto Node'
  })
})

app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Paola Carrillo',
    titulo: 'Proyecto Node'
  })
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})