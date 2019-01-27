import REST from 'jt-rest'
import restHelpers from './helpers/rest-helpers'

export default class extends REST {
  /**
   * 重写父类 request 方法，按业务场景定制功能
   * @override
   */
  request (method = 'GET', options = {}) {
    if (!options.query) {
      options.query = {}
    }

    // 转 options.query.where 对象为字符串
    if (options.query.where) {
      options.query.where = restHelpers.whereToStr(options.query.where)
    }

    if (method === 'GET') {
      options.query._ = new Date().getTime()
    }

    return super.request(method, options)
  }
}
