const Axios = require('axios')
const allowCors = require('../allowCors')

async function bioApi (req, res) {
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )
  try {
    const { username = 'davidbehar' } = req.query
    const result = await Axios.get(`https://bio.torre.co/api/people/${username}/detail`)
    res.json(result.data)
  } catch (err) {
    res.json({ err })
  }
}

module.exports = bioApi
