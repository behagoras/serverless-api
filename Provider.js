const axios = require('axios').default

const makeResult = () => ({ success: true, data: null })

class Provider {
  static async get (url, options) {
    const result = makeResult()
    try {
      const response = await axios.get(url, options)
      result.data = response.data
    } catch (error) {
      result.success = false
      result.message = error.message
    }
    return result
  }

  static async post (url) {
    const result = makeResult()
    try {
      const response = await axios.post(url, {
        headers: { 'Content-Type': 'application/json charset=utf-8' }
      })
      result.data = response.data
    } catch (error) {
      result.success = false
      result.message = error.message
    }
    return result
  }
}

module.exports = Provider
