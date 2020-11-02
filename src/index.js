// include dependencies
const express = require('express')

const app = express()

const bioApi = require('./routes/bio')
const opportunitiesApi = require('./routes/opportunities')
const searchApi = require('./routes/search')

app.use(express.json())

bioApi(app)
searchApi(app)
opportunitiesApi(app)

app.listen(3001, () => {
  console.log('App listening in http://localhost:3001')
})
