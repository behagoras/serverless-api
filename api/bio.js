const Axios = require('axios')

async function bioApi (req, res) {
  try {
    const { username = 'davidbehar' } = req.query
    const result = await Axios.get(`https://bio.torre.co/api/people/${username}/detail`)
    res.json(result.data)
  } catch (err) {
    res.json({ err })
  }
}

module.exports = bioApi
