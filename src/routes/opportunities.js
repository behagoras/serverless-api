const Axios = require('axios')
const express = require('express')

function opportunitiesApi (app) {
  const router = express.Router()
  app.use('/api/opportunities', router)
  router.get('/', async (req, res) => {
    try {
      const { id = 'Rrnxg1wA' } = req.query
      const result = await Axios.get(`https://torre.co/api/opportunities/${id}`)
      res.json(result.data)
    } catch (err) {
      res.json({ err })
    }
  })
}

module.exports = opportunitiesApi
