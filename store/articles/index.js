import mutations from './mutations'
import actions from './actions'

const initState = {
  list: {},
  detail: {}
}

export default {
  state: () => ({
    ...initState,
    getInitState () {
      return initState
    }
  }),
  mutations,
  actions,
}
