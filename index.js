// modules and globals
require('dotenv').config()
const express = require('express')
const app = express()


//Express settings
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use('/places', require('./contollers/places'))
app.use(express.static('public'))


//controllers and routes
app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('error404')
})

app.listen(process.env.PORT)
