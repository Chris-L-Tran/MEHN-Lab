const express = require('express')
const app = express()

const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  res.render('welcome')
})

app.post('/', (req, res) => {
  res.send(`${req.body.recipe_name} ${req.body.recipe_description} ${req.body.recipe_instructions} ${req.body.recipe_ingredients}`)
})

app.listen(4000, () => {
  console.log('yay')
})
