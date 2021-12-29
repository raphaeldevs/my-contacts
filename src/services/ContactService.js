import HttpClient from './utils/HttpClient'

class ContactService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3100')
  }

  async listContacts(orderBy = 'asc') {
    return this.httpClient.get(`/contacts?orderBy=${orderBy}`)
  }
}

export default new ContactService()
