const { default: Axios } = require('axios')
const allowCors = require('../../allowCors')

async function searchOpportunitiesApi (req, res) {
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

module.exports = allowCors(searchOpportunitiesApi)
