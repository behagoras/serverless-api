const express = require('express')
const app = express()
const cors = require('cors')
const apiRouter = require('./routes/api')

app.use(cors())
app.use(express.json())
app.use('/api', apiRouter)

app.listen(3000, () => {
  console.log('app listening in port 3000')
  console.log('http://localhost:3000')
})
