const express = require('express')
const app = express()
const hbs = require('express-handlebars')
const bodyParser = require('body-parser')
const recipes = require('./controllers/recipes')
const methodOverride = require('method-override')

app.use(methodOverride('_method'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine', 'hbs')

app.engine(
  '.hbs',
  hbs({
    extname: '.hbs',
    partialsDir: 'views/',
    layoutsDir: 'views/',
    defaultLayout: 'layout'
  })
)

app.use('/assets', express.static('public'))

app.get('/', (req, res) => {
  res.render('welcome')
})

app.use('/recipes', recipes)

var routes = require('./config/routes')
app.use('/login', routes)

app.listen(4000, () => {
  console.log('yay')
})
