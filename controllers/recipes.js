//A controllers/ directory for each controller in your application

const express = require('express')
const recipes = require('../db/schema')
const router  = express.Router()
const db = require('../db/connection')

router.get('/', (req, res) => {
    Recipe.find({})
      .then((recipes) => {
        res.render('recipes-index', { recipes: recipes })
      })
  })
  
router.get('/:name', (req, res) => {
    var name = req.params.name
    Recipe.findOne({ name: name })
    .then(candidate => { res.render('recipes-show', { recipe: recipe })
    })
  })

  router.post('/', (req, res) => {
    Recipe.create(req.body.recipe)

  })