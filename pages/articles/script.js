import { mapState } from 'vuex'

export default {
  head () {
    return {
      title: 'articles list'
    }
  },
  computed: mapState({
    list: state => state.articles.list
  }),
  async fetch ({ store, app }) {
    await store.dispatch('articles/getList', {
      offset: 0,
      limit: app.$consts.PAGE_SIZE
    })
  }
}
