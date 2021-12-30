import APIError from '../../errors/APIError'

class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL
  }

  async get(path) {
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

  async delete(path) {
    const response = await fetch(`${this.baseURL}${path}`, {
      method: 'DELETE'
    })

    if (response.ok) return

    throw new APIError(`${response.status} - ${response.statusText}`)
  }
}

export default HttpClient
