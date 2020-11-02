const express = require('express')
const Axios = require('axios')

function searchPeopleApi (app) {
  const router = express.Router()
  app.use('/api/search/people', router)
  router.get('/', async (req, res) => {
    try {
      const body = req.body
      const params = new URLSearchParams(body).toString()
      // console.log(body)
      const url = `https://search.torre.co/people/_search/?${params}`
      const result = await Axios({
        method: 'POST',
        url,
        headers: { 'Content-Type': 'application/json; charset=utf-8' }
      })
      res.json({
        data: result.data
      })
    } catch (err) {
      res.json(err)
    }
  })
}

module.exports = searchPeopleApi
