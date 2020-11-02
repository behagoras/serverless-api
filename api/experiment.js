const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.get('/api/experiment', (req, res) => {
  res.json({ hola: 'mundo' })
})

app.listen(3001, () => {
  console.log('app listening in port 3001')
})
