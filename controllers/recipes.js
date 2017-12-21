// A controllers/ directory for each controller in your application

const express = require('express')
const Recipe = require('../db/schema')
const router = express.Router()

// const db = require('../db/connection')

router.get('/', (req, res) => {
  Recipe.find({})
    .then((recipes) => {
      res.render('recipes-index', {
        recipes: recipes
      })
    })
    .catch((err) => {
      console.log(err)
    })
})

router.get('/:name', (req, res) => {
  var name = req.params.name
  Recipe.findOne({ name: name })
  .then(recipe => {
    res.render('recipes-show', { recipe: recipe })
  })
})

router.post('/', (req, res) => {
  Recipe.create(req.body.recipe)
})

module.exports = router
