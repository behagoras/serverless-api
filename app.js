const express = require('express')
const app = express()
const cors = require('cors')
const apiRouter = require('./routes/api')
const endpoints = require('./routes/endpoints')

app.use(cors())
app.set('view engine', 'pug')
app.use(express.json())
app.use('/api', apiRouter)

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Endpoints',
    endpoints: endpoints
  })
})

app.listen(3000, () => {
  console.log('app listening in port 3000')
  console.log('http://localhost:3000')
})
