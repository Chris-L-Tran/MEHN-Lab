const mongoose = require('./connection')

const RecipeSchema = new mongoose.Schema({
  name: String,
  description: String,
  instructions: String,
  ingredients: String
})

const Recipe = mongoose.model('Recipe', RecipeSchema)

module.exports = {mongoose, Recipe}
