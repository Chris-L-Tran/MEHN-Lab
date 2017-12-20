const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('yay')
})

app.listen(4000, () => {
  console.log('yay')
})
