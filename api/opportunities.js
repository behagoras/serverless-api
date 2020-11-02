const Axios = require('axios')

async function opportunitiesApi (req, res) {
  try {
    const { id } = req.query
    const result = await Axios.get(`https://torre.co/api/opportunities/${id}`)
    res.json(result.data)
  } catch (err) {
    res.json({ err })
  }
}

module.exports = opportunitiesApi
