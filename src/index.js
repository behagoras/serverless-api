const express = require('express')
const app = express()
const cors = require('cors')
const bioApi = require('./routes/bio')
const searchPeopleApi = require('./routes/search/people')
const searchOpportunitiesApi = require('./routes/search/opportunities')
const opportunitiesApi = require('./routes/opportunities')

app.use(cors())
app.use(express.json())

bioApi(app)
searchPeopleApi(app)
searchOpportunitiesApi(app)
opportunitiesApi(app)

app.listen(3000, () => {
  console.log('app listening in port 3000')
  console.log('http://localhost:3000')
})
