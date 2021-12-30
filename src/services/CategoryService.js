import HttpClient from './utils/HttpClient'

class CategoryService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3100')
  }

  async listCategories(orderBy = 'asc') {
    return this.httpClient.get(`/categories?orderBy=${orderBy}`)
  }
}

export default new CategoryService()
