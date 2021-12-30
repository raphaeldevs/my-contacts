import HttpClient from './utils/HttpClient'

class ContactService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3100')
  }

  async listContacts(orderBy = 'asc') {
    return this.httpClient.get(`/contacts?orderBy=${orderBy}`)
  }

  async createContact(contact) {
    return this.httpClient.post('/contacts', contact)
  }

  async getContact(id) {
    return this.httpClient.get(`/contacts/${id}`)
  }

  async deleteContact(id) {
    return this.httpClient.delete(`/contacts/${id}`)
  }
}

export default new ContactService()
