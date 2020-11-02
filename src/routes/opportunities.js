const { default: Axios } = require('axios')
const express = require('express')

function opportunitiesApi (app) {
  const router = express.Router()
  app.use('/opportunities', router)
  router.get(
    '/:id',
    async function (req, res, next) {
      try {
        const { id } = req.params
        console.log('opportunitiesApi -> id', id)
        const result = await Axios.get(`https://torre.co/api/opportunities/${id}`)
        res.json(result.data)
      } catch (err) {
        res.json({ err })
      }
    }
  )
}

module.exports = opportunitiesApi
