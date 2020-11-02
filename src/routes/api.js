const express = require('express')
const router = express.Router()
const Provider = require('../Provider')

router.get('/bio', async (req, res) => {
  const { username = 'davidbehar' } = req.query
  const url = `https://bio.torre.co/api/people/${username}/detail`
  const result = await Provider.get(url)
  res.json(result.data)
})

router.post('/search/opportunities', async (req, res) => {
  const body = req.body
  const params = new URLSearchParams(body).toStrsing()
  const url = `https://search.torre.co/opportunities/_search/?${params}`
  const result = await Provider.post(url)
  return res.json(result.data)
})

router.post('/search/people', async (req, res) => {
  const body = req.body
  const params = new URLSearchParams(body).toStrsing()
  const url = `https://search.torre.co/people/_search/?${params}`
  const result = await Provider.post(url)
  return res.json(result.data)
})

module.exports = router
