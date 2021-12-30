import APIError from '../../errors/APIError'
import delay from '../../utils/delay'

class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL
  }

  async get(path) {
    await delay(3000)

    const response = await fetch(`${this.baseURL}${path}`)

    const contentType = response.headers.get('content-type')

    const body = contentType.includes('application/json')
      ? await response.json()
      : null

    if (response.ok) {
      return body
    }

    throw new APIError(
      body?.error || `${response.status} - ${response.statusText}`
    )
  }

  async post(path, body) {
    await delay(3000)

    const response = await fetch(`${this.baseURL}${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })

    const contentType = response.headers.get('content-type')

    const responseBody = contentType.includes('application/json')
      ? await response.json()
      : null

    if (response.ok) {
      return responseBody
    }

    throw new APIError(
      responseBody?.error || `${response.status} - ${response.statusText}`
    )
  }
}

export default HttpClient
