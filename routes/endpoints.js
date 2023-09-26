const endpoints = [
  {
    method: 'GET',
    uri: '/api/bio/:username'
  },
  {
    method: 'GET',
    uri: '/api/opportunities/:id'
  },
  {
    method: 'POST',
    uri: '/api/search/opportunities'
  },
  {
    method: 'POST',
    uri: '/api/search/people'
  }
]

module.exports = endpoints
