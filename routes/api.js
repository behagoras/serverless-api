const express = require('express')
const router = express.Router()
const Provider = require('../Provider')

router.get('/bio/:username', async (req, res) => {
  // For example davidbehar
  const { username } = req.params
  const url = `https://bio.torre.co/api/people/${username}/detail`
  const result = await Provider.get(url)
  res.json(result.data)
})

router.get('/opportunities/:id', async (req, res) => {
  // For example 8wD6yArl
  const { id } = req.params
  const url = `https://torre.co/api/opportunities/${id}`
  const result = await Provider.get(url)
  res.json(result.data)
})

router.post('/search/opportunities', async (req, res) => {
  // Example search body in json
  // { currency: 'MXN', page: 0, periodicity: 'hourly', lang: 'en', size: 20, aggregate: false, offset: 10 }
  const body = req.body
  const params = new URLSearchParams(body).toString()
  const url = `https://search.torre.co/opportunities/_search/?${params}`
  const result = await Provider.post(url)
  res.json(result.data)
})

router.post('/search/people', async (req, res) => {
  // Example search body in json
  // { currency: 'MXN', page: 0, periodicity: 'hourly', lang: 'en', size: 20, aggregate: false, offset: 10 }
  const body = req.body
  const params = new URLSearchParams(body).toString()
  const url = `https://search.torre.co/people/_search/?${params}`
  const result = await Provider.post(url)
  res.json(result)
})

module.exports = router
