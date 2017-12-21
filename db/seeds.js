const recipe = require('./schema')
const seedData = require('./seeds.json')

recipe.Recipe.remove({})
  .then(() => {
    return recipe.Recipe.collection.insert(seedData)
  })
  .then(() => {
    process.exit()
  })
