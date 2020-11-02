const { default: Axios } = require('axios')
const express = require('express')

function bioApi (app) {
  const router = express.Router()
  app.use('/bio', router)
  router.get(
    '/',
    async function (req, res, next) {
      try {
        const result = await Axios.get('https://bio.torre.co/api/people/davidbehar/detail')
        console.log(result.data)
        res.json(result.data)
      } catch (err) {
        res.json({ err })
      }
    }
  )
}

module.exports = bioApi
