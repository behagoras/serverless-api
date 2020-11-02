const Axios = require('axios')
const express = require('express')

function bioApi (app) {
  const router = express.Router()
  app.use('/api/bio', router)
  router.get('/', async (req, res) => {
    try {
      const { username = 'davidbehar' } = req.query
      const result = await Axios.get(`https://bio.torre.co/api/people/${username}/detail`)
      res.json(result.data)
    } catch (err) {
      res.json({ err })
    }
  })
}

module.exports = bioApi
