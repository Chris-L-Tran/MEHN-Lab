const mongoose = require('./connection')

const RecipeSchema = new mongoose.Schema({
  name: String,
  description: String,
  instructions: String,
  ingredients: String
})

const Recipe = mongoose.model('recipes', RecipeSchema)

module.exports = Recipe
