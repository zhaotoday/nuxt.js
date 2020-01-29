import { mapState } from 'vuex'

export default {
  head () {
    return {
      title: this.detail.title
    }
  },
  computed: mapState({
    detail: state => state.articles.detail
  }),
  async fetch ({ store, params }) {
    await store.dispatch('articles/getDetail', { id: params.id })
  }
}
