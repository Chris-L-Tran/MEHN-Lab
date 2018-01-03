// A controllers/ directory for each controller in your application

const express = require('express')
const recipes = require('../db/schema')
const router = express.Router()
const Recipe = recipes.Recipe

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
  .catch((err) => {
    console.log(err)
  })
})

router.delete('/:name', (req, res) => {
  Recipe.findOneAndRemove({name: req.params.name})
  .then(() => {
    res.redirect('/recipes')
  })
})

router.post('/', (req, res) => {
  Recipe.create(req.body.recipe)
  .then((recipe) => {
    res.redirect(`/recipes/`)
  })
  .catch((err) => {
    console.log(err)
  })
})

router.post('/', (req, res) => {
  res.json(req.body)
})

router.put('/:name', (req, res) => {
  Recipe.findOneAndUpdate({name: req.params.name}, req.body.recipe, {new: true})
  .then((recipe) => {
    res.redirect(`/recipes/`)
  })
  .catch((err) => {
    console.log(err)
  })
})

module.exports = router
