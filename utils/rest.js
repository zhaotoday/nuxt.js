import REST from 'jt-rest'

export default class extends REST {
  async request (method = 'GET', options = {}) {
    if (!options.query) {
      options.query = {}
    }

    options.query._ = new Date().getTime()

    const { data } = await super.request(method, options)

    return data
  }
}
