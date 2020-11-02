const Axios = require('axios')
const express = require('express')

function searchApi (app) {
  const router = express.Router()
  app.use('/search', router)
  router.post(
    '/opportunities',
    async function (req, res) {
      try {
        const body = req.body
        const params = new URLSearchParams(body).toString()
        // console.log(body)
        const url = `https://search.torre.co/opportunities/_search/?${params}`
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
    }
  )
  router.post(
    '/people',
    async function (req, res) {
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
    }
  )
}

module.exports = searchApi
